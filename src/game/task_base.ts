import { err } from '..';
import { embed_style } from './temp/embed/embed';
import { TsrpcError, TsrpcErrorType } from "tsrpc";
import bot from "../unity/bot";
import common from "../shared/game/common";
import { guildCfg } from '../interface/guildCfg';
import db, { dbName } from '../unity/db';
import { userCfg, USER_CFG_MSGTEMPLATE } from '../interface/userCfg';
import { ResMe_strengthen } from '../shared/protocols/me/equip/PtlMe_strengthen';
import { EQUIP_QUALITY, EQUIP_TYPE_ICON, EQUIP_TYPE } from '../shared/game/equip';
import { walletKey_CN, walletKey } from '../shared/game/user';

/**
 * 指令基类
 */
export class task_base {
    /**
     * 用户ID
     */
    userId: string;
    /**
     * 用户频道来源
     */
    channel_id: string;
    /**
     * 用户头像
     */
    userIcon: string;
    /**
     * 用户艾特内容
     */
    content: string;
    /**
     * 触发指令
     */
    matchKey: string;
    userName: string;
    /**
     * 频道ID
     */
    guild: string
    args: any[]
    /**
     * 频道配置
     */
    GuildCfg: guildCfg;
    UserCfg: userCfg;
    constructor(...args) {
        this.args = args;
        this.userId = args[0];
        this.channel_id = args[1];
        this.userIcon = args[2] || '';
        this.content = args[3];
        this.matchKey = args[4];
        this.userName = args[5] || '匿名用户';
        this.guild = args[6];
        this.GuildCfg = db.get(dbName.GuildCfg, this.guild) as guildCfg;
        if (!this.GuildCfg) {
            err('错误：未检查到频道配置信息',)
        }
        this.UserCfg = db.get(dbName.UserCfg, this.userId) as userCfg
        if (!this.UserCfg) {
            err('错误：未检查到用户配置信息',)
        }
    }
    /**
     * 是否为频道主
     */
    isMaster() {
        return this.userId == this.GuildCfg.master;
    }
    /**
     * 艾特用户
     * @returns 
     */
    at() {
        return `<@!${this.userId}>`
    }
    log(str: string) {
        bot.sendText(this.channel_id, `<emoji:147><@!${this.userId}>${str}`)
    }
    sendErr(err: TsrpcError) {
        // console.log(err)
        switch (err.type) {
            case TsrpcErrorType.ApiError:
                bot.sendText(this.channel_id, `<@!${this.userId}><emoji:147>${err.message}`);
                break;
            case TsrpcErrorType.NetworkError:
                bot.sendText(this.channel_id, `<@!${this.userId}><emoji:147>服务器睡着了，正在努力叫醒中`);
                break;
            default:
                if (this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.text) {
                    let temp = ``;
                    temp += `┏┄═══⚠️错误提示══━┄\n`
                    temp += `┣⛔︎错误代码:${err.code || '0x' + common.random(0, 99999999999).toString(16)}\n`;
                    temp += `┣🗂️错误类型:${err.type}\n`;
                    temp += `┣┄════❌错误提示══━┄\n`
                    temp += `          ${err.message}\n`;
                    temp += `          ${err.innerErr}\n`;
                    temp += `┗┄━══════════━┄\n`;
                    temp += `<emoji:147>如不知如何发生的错误且长时间存在请截图反馈`;
                    bot.sendText(this.channel_id, temp);
                } else {
                    let temp = new embed_style();
                    temp.setTitle('⚠️错误提示');
                    temp.setTips('出错了。')
                    temp.addLine(`⛔︎错误代码:${err.code || '0x' + common.random(0, 99999999999).toString(16)}`)
                    temp.addLine(`🗂️错误类型:${err.type}`)
                    temp.addLine(`${err.message}`)
                    temp.addLine(`有问题截图反馈`)
                    temp.sendMsg(this.channel_id)
                }
                break;
        }

    }
    /**
     * 装备强化结果
     */
    strenthen(data:ResMe_strengthen){
        let bf = data.bfEquip;
        let now = data.nowEquip;
        if (this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.text) {
            let temp = `┏┄══${data.isSuccress ? '<emoji:320>强化成功' : '<emoji:173>强化失败'}══━┄\n`;
            if (data.isSuccress) {
                temp += `🔣本次成功率:${data.rate.toFixed(4)}%\n`
                temp += `🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
                temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
                temp += `${this.at()}(${EQUIP_QUALITY[bf.quality]}级装备)\n`
                temp += `${EQUIP_TYPE_ICON[EQUIP_TYPE[bf.type]]}${bf.name}+${now.leve}\n`;
                if (common.converEquipattribute(bf, `hp_max`) > 0) temp += `♥️最大生命${common.BN(common.converEquipattribute(bf, `hp_max`))}🔺${common.BN(common.converEquipattribute(now, `hp_max`))}\n`;
                if (common.converEquipattribute(bf, `MagicAttack`) > 0) temp += `🔮魔法攻击${common.BN(common.converEquipattribute(bf, `MagicAttack`))}🔺${common.BN(common.converEquipattribute(now, `MagicAttack`))}\n`;
                if (common.converEquipattribute(bf, `MagicDefense`) > 0) temp += `🌟魔法防御${common.BN(common.converEquipattribute(bf, `MagicDefense`))}🔺${common.BN(common.converEquipattribute(now, `MagicDefense`))}\n`;
                if (common.converEquipattribute(bf, `PhysicalAttacks`) > 0) temp += `🔪物理攻击${common.BN(common.converEquipattribute(bf, `PhysicalAttacks`))}🔺${common.BN(common.converEquipattribute(now, `PhysicalAttacks`))}\n`;
                if (common.converEquipattribute(bf, `PhysicalDefense`) > 0) temp += `🔰物理防御${common.BN(common.converEquipattribute(bf, `PhysicalDefense`))}🔺${common.BN(common.converEquipattribute(now, `PhysicalDefense`))}\n`;
                if (common.converEquipattribute(bf, `secondResHp`) > 0) temp += `💖每秒回复${common.BN(common.converEquipattribute(bf, `secondResHp`))}🔺${common.BN(common.converEquipattribute(now, `secondResHp`))}\n`;
                temp += `┗══════════┄`;
            } else {
                temp += `${EQUIP_TYPE_ICON[EQUIP_TYPE[bf.type]]}${bf.name}+${now.leve}\n`;
                temp += `🔣本次成功率:${data.rate.toFixed(4)}%\n`
                temp += `🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
                temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
                temp += `┗┄${this.at()}┄`;
            }

            bot.sendText(this.channel_id, temp,this.content)
        } else {
            let temp = new embed_style();
            temp.setIcon(`${bot.getBotConfig().cosUrl_http}/equip/${data.nowEquip.icon}.png`);
            temp.setTips(`${bf.name}+${now.leve}`)
            if (data.isSuccress) {
                temp.setTitle(`强化成功`)
                temp.addLine(`🔣本次成功率:${data.rate.toFixed(4)}%\n`)
                temp.addLine(`🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${common.BN(data.pay.condition.val)}`)
                temp.addLine(`▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${common.BN(data.pay.now)}`)
                temp.addLine(`${EQUIP_QUALITY[bf.quality]}级装备归属:${this.userName}`)
                temp.addLine(`${EQUIP_TYPE_ICON[EQUIP_TYPE[bf.type]]}${bf.name}+${now.leve}`)
                if (common.converEquipattribute(bf, `hp_max`) > 0) temp.addLine(`♥️生命${common.BN(common.converEquipattribute(bf, `hp_max`))}🔺${common.BN(common.converEquipattribute(now, `hp_max`))}`)
                if (common.converEquipattribute(bf, `MagicAttack`) > 0) temp.addLine(`🔮魔攻${common.BN(common.converEquipattribute(bf, `MagicAttack`))}🔺${common.BN(common.converEquipattribute(now, `MagicAttack`))}`)
                if (common.converEquipattribute(bf, `MagicDefense`) > 0) temp.addLine(`🌟魔防${common.BN(common.converEquipattribute(bf, `MagicDefense`))}🔺${common.BN(common.converEquipattribute(now, `MagicDefense`))}`)
                if (common.converEquipattribute(bf, `PhysicalAttacks`) > 0) temp.addLine(`🔪物攻${common.BN(common.converEquipattribute(bf, `PhysicalAttacks`))}🔺${common.BN(common.converEquipattribute(now, `PhysicalAttacks`))}`)
                if (common.converEquipattribute(bf, `PhysicalDefense`) > 0) temp.addLine(`🔰物防${common.BN(common.converEquipattribute(bf, `PhysicalDefense`))}🔺${common.BN(common.converEquipattribute(now, `PhysicalDefense`))}`)
                if (common.converEquipattribute(bf, `secondResHp`) > 0) temp.addLine(`💖回复${common.BN(common.converEquipattribute(bf, `secondResHp`))}🔺${common.BN(common.converEquipattribute(now, `secondResHp`))}`)
            } else {
                temp.setTitle(`强化失败`)
                temp.addLine(`${EQUIP_TYPE_ICON[EQUIP_TYPE[bf.type]]}${bf.name}+${now.leve}`)
                temp.addLine(`🔣本次成功率:${data.rate.toFixed(4)}%`)
                temp.addLine(`🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${common.BN(data.pay.condition.val)}`)
                temp.addLine(`▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${common.BN(data.pay.now)}`)
                temp.addLine(`归属:${this.userName}`)
            }
            temp.sendMsg(this.channel_id)
        }
    }

}