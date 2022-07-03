import { rank_MinGame_horse_cont } from './rank/rank_MinGame_horse_cont';
import { rank_MinGame_horse_win } from './rank/rank_MinGame_horse_win';
import { horse_look } from './minGame/horse/horse_look';
import { horse_join } from './minGame/horse/horse_join';
import { rank_hp } from './rank/rank_hp';
import { rank_teamContribute } from './rank/rank_teamContribute';
import { shop_rankscore_buy } from './shop/shop_rankscore_buy';
import { rank_military_pet } from './rank/rank_military_pet';
import { shop_icon } from './shop/shop_icon';
import { soaringTask } from './me/task/soaringTask';
import { challenge_box } from './challenge/challenge_box';
import { rank_MinGame_lottery_cont } from './rank/rank_MinGame_lottery_cont';
import { rank_MinGame_lottery_win } from './rank/rank_MinGame_lottery_win';
import { challenge_image } from './challenge/challenge_image';
import { rank_titleCont } from './rank/rank_titleCont';
import { rank_titleAttr } from './rank/rank_titleAttr';
import { rank_teamLv } from './rank/rank_teamLv';
import { rank_petCont } from './rank/rank_petCont';
import { rank_rankscore } from './rank/rank_rankscore';
import { rank_sign } from './rank/rank_sign';
import { shop_team_buy } from './shop/shop_team_buy';
import { shop_team } from './shop/shop_team';
import { creatorJoinCode_team } from './me/team/creatorJoinCode_team';
import { userList_team } from './me/team/userList_team';
import { dismiss_team } from './me/team/dismiss_team';
import { creator_team } from './me/team/creator_team';
import { me_team } from './me/team/me_team';
import { pk } from './battle/pk';
import { auction_look } from './shop/auction_look';
import { fishing } from './map/fishing';
import { shop_back_buy } from './shop/shop_back_buy';
import { me_titleRandom } from './me/title/me_titleRandom';
import { me_title } from './me/me_title';
import { me_callPos } from './me/me_callPos';
import { me_strengthen } from './me/me_strengthen';
import { me_skill } from './me/me_skill';
import { shop_skill_buy } from './shop/shop_skill_buy';
import { shop_skill } from './shop/shop_skill';
import { shop_equip_buy } from './shop/shop_equip_buy';
import { shop_equip } from './shop/shop_equip';
import { me_destroyBagEquip } from './me/equip/me_destroyBagEquip';
import { me_wearEquip } from './me/equip/me_wearEquip';
import { me_lookBag } from './me/me_lookBag';
import { me_bag } from './me/me_bag';
import { me_resLife } from './me/me_resLife';
import { me_changeName } from './me/me_changeName';
import { me_wallet } from './me/me_wallet';
import { pos_attackPlayer } from './battle/pos_attackPlayer';
import { me_move } from './map/me_move';
import { sys_update } from './sys/update';
import { me_attribute } from './me/me_attribute';
import { log } from "..";
import { BOT_MSG_AT } from "../shared/bot/bot";
import bot from "../unity/bot";
import sever from "../unity/sever";
import me_sign from "./me/me_sign";
import { me_pos } from './me/me_pos';
import { pos_attackEnemy } from './battle/pos_attackEnemy';
import { baseTaskMenu } from './sys/baseTaskMenu';
import { openMapChestBox } from './map/openMapChestBox';
import common from '../shared/game/common';
import { setUp } from './sys/setUp';
import { searchSkill } from './sys/searchSkill';
import { me_destroyMeSkill } from './me/me_destroyMeSkill';
import { me_openBlindBox } from './me/me_openBlindBox';
import { me_equip } from './me/me_equip';
import { me_titleChangeName } from './me/me_titleChangeName';
import { shop_back } from './shop/shop_back';
import { auction } from './shop/auction';
import { auction_offer } from './shop/auction_offer';
import { me_pet } from './me/pet/me_pet';
import { me_lookPet } from './me/pet/me_lookPet';
import { me_petChangeName } from './me/pet/me_petChangeName';
import { me_petRm } from './me/pet/me_petRm';
import { docile } from './map/docile';
import { me_ancestry } from './me/ancestry/me_ancestry';
import { randomAncestry } from './me/ancestry/randomAncestry';
import { attackBoss } from './battle/attackBoss';
import { addOneWord } from "./sys/addOneWrod";
import { rank } from "./battle/rank";
import { changeName_team } from './me/team/changeName_team';
import { join_team } from './me/team/join_team';
import { out_team } from './me/team/out_team';
import { kickout_team } from './me/team/Kickout_team';
import { everDayTask } from './me/task/everDayTask';
import { rank_leve } from './rank/rank_leve';
import { rank_menu } from './rank/rank_menu';
import { rank_strengthen } from './rank/rank_strengthen';
import { rank_petLeve } from './rank/rank_petLeve';
import { lottery } from './minGame/lottery/lottery';
import { rank_gold } from './rank/rank_gold';
import { shop_icon_buy } from './shop/shop_icon_buy';
import { rank_dnaLv } from './rank/rank_dnaLv';
import { rank_ancestry } from './rank/rank_ancestry';
import { rank_military } from './rank/rank_military';
import { rank_evil } from './rank/rank_evil';
import { rank_justice } from './rank/rank_justice';
import { me_AutoPlay } from './me/autoPlay/me_AutoPlay';
import { sys_update_code } from './sys/updateDev';
import { me_Reread } from './me/autoPlay/me_Reread';
import { rank_MagicAttack } from './rank/rank_MagicAttack';
import { rank_MagicDefense } from './rank/rank_MagicDefense';
import { rank_PhysicalAttacks } from './rank/rank_PhysicalAttacks';
import { rank_PhysicalDefense } from './rank/rank_PhysicalDefense';
import { shop_rankscore } from './shop/shop_rankscore';
import { switch_CN, CFG_SWITCH } from '../interface/guildCfg';
import { me_vip } from './me/me_vip';
import { emojiMenu } from './sys/emojiMenu';
import { openMapChestBox_all } from './map/openMapChestBox_all';
import { store_save_equip } from './me/store/store_save_equip';
import { store_look } from './me/store/store_look';
import { store_get } from './me/store/store_get';
import { horse } from './minGame/horse/horse';
import { newUserTask } from './me/task/newUserTask';
import { challenge_hit } from './challenge/challenge_hit';
import { challenge_power } from './challenge/challenge_power';
import { challenge_downUser } from './challenge/challenge_downUser';

enum matchType {
    /**
     * 文字完全匹配指令
     */
    all,
    /**
     * 文字包含指令
     */
    match
}


export default class game {
    /**
     * 指令可交互行为分析
     */

    matchMap: Map<string, {
        /**
         * 意图
         */
        action: any,
        /**
         * 匹配规则
         */
        match: matchType,
        /**
         * 是否显示在匹配菜单内
         */
        isShowMatch?: boolean
    }>
    /**
     * 用户上次艾特内容
     */
    contentMap: Map<string, string>
    /**
     * 复读状态
     */
    repeState: Map<string, boolean>

    /**
     * dev tips Map
     */
    devTipsMap: Map<string, boolean>
    /**
     * speedLock Map
     * 消息速度限制
     */
    speedLockMap: Map<string, number>

    constructor() {
        this.speedLockMap = new Map();
        this.devTipsMap = new Map();
        this.repeState = new Map();
        this.matchMap = new Map();
        this.contentMap = new Map()
        this.initRankKey();
        this.initKeyMap();
        this.start();
    }
    private initRankKey() {
        this.matchMap.set(`强化排行榜`, { action: rank_strengthen, match: matchType.all })
        this.matchMap.set(`魔攻排行榜`, { action: rank_MagicAttack, match: matchType.all })
        this.matchMap.set(`魔防排行榜`, { action: rank_MagicDefense, match: matchType.all })
        this.matchMap.set(`物攻排行榜`, { action: rank_PhysicalAttacks, match: matchType.all })
        this.matchMap.set(`物防排行榜`, { action: rank_PhysicalDefense, match: matchType.all })
        this.matchMap.set(`签到排行榜`, { action: rank_sign, match: matchType.all })
        this.matchMap.set(`红名排行榜`, { action: rank_evil, match: matchType.all })
        this.matchMap.set(`正义排行榜`, { action: rank_justice, match: matchType.all })
        this.matchMap.set(`进化排行榜`, { action: rank_ancestry, match: matchType.all })
        this.matchMap.set(`战力排行榜`, { action: rank_military, match: matchType.all })
        this.matchMap.set(`宠物战力排行榜`, { action: rank_military_pet, match: matchType.all })

        this.matchMap.set(`等级排行榜`, { action: rank_leve, match: matchType.all })
        this.matchMap.set(`基因锁排行榜`, { action: rank_dnaLv, match: matchType.all })
        this.matchMap.set(`声望排行榜`, { action: rank_rankscore, match: matchType.all })
        this.matchMap.set(`金币排行榜`, { action: rank_gold, match: matchType.all })
        this.matchMap.set(`宠物数量排行榜`, { action: rank_petCont, match: matchType.all })
        this.matchMap.set(`宠物等级排行榜`, { action: rank_petLeve, match: matchType.all })
        this.matchMap.set(`工会等级排行榜`, { action: rank_teamLv, match: matchType.all })
        this.matchMap.set(`称号属性排行榜`, { action: rank_titleAttr, match: matchType.all })
        this.matchMap.set(`称号重置排行榜`, { action: rank_titleCont, match: matchType.all })
        this.matchMap.set(`猜数排行榜`, { action: rank_MinGame_lottery_cont, match: matchType.all })
        this.matchMap.set(`猜数欧皇排行榜`, { action: rank_MinGame_lottery_win, match: matchType.all })
        this.matchMap.set(`马拉松冠军排行榜`, { action: rank_MinGame_horse_win, match: matchType.all })
        this.matchMap.set(`马拉松参与排行榜`, { action: rank_MinGame_horse_cont, match: matchType.all })
        this.matchMap.set(`工会贡献排行榜`, { action: rank_teamContribute, match: matchType.all })
        this.matchMap.set(`生命排行榜`, { action: rank_hp, match: matchType.all })


    }
    private initKeyMap() {
        /**
        * 排行榜指令模块
        */
        //    emojiMenu
        this.matchMap.set(`宠物马拉松`, { action: horse_look, match: matchType.all })
        this.matchMap.set(`参赛`, { action: horse_join, match: matchType.match })
        this.matchMap.set(`赞助会员`, { action: me_vip, match: matchType.all })
        this.matchMap.set('复读', { action: me_Reread, match: matchType.all })
        this.matchMap.set('更新', { action: sys_update_code, match: matchType.all })

        this.matchMap.set(`排行榜`, { action: rank_menu, match: matchType.all })
        this.matchMap.set('拍卖行', { action: auction_look, match: matchType.all })
        this.matchMap.set(`猜数`, { action: lottery, match: matchType.match })
        this.matchMap.set('镜像挑战', { action: challenge_image, match: matchType.match })
        this.matchMap.set('伤害挑战', { action: challenge_hit, match: matchType.match })
        this.matchMap.set('力量挑战', { action: challenge_power, match: matchType.match })
        this.matchMap.set('强者挑战', { action: challenge_downUser, match: matchType.match })
        this.matchMap.set('破壁计划', { action: challenge_box, match: matchType.match })
        this.matchMap.set('阶梯任务', { action: soaringTask, match: matchType.all })
        this.matchMap.set('每日任务', { action: everDayTask, match: matchType.all })
        this.matchMap.set('新手任务', { action: newUserTask, match: matchType.all })
        this.matchMap.set('挂机', { action: me_AutoPlay, match: matchType.match })
        this.matchMap.set('攻击全部怪物', { action: pos_attackEnemy, match: matchType.match })
        this.matchMap.set('查看背包装备', { action: me_lookBag, match: matchType.match })
        this.matchMap.set('分解全部装备', { action: me_destroyBagEquip, match: matchType.all })
        this.matchMap.set('一言', { action: addOneWord, match: matchType.match })
        this.matchMap.set('称号改名', { action: me_titleChangeName, match: matchType.match })
        this.matchMap.set('更新日志', { action: sys_update, match: matchType.all })
        this.matchMap.set('攻击玩家', { action: pos_attackPlayer, match: matchType.match })
        this.matchMap.set('攻击怪物', { action: pos_attackEnemy, match: matchType.match })
        this.matchMap.set('基础指令', { action: baseTaskMenu, match: matchType.match })
        this.matchMap.set('打开宝箱', { action: openMapChestBox, match: matchType.match })
        this.matchMap.set('打开全部宝箱', { action: openMapChestBox_all, match: matchType.all })
        this.matchMap.set('打开盲盒', { action: me_openBlindBox, match: matchType.match })
        this.matchMap.set('查询技能', { action: searchSkill, match: matchType.match })
        this.matchMap.set('我的装备', { action: me_equip, match: matchType.all })
        this.matchMap.set('遗忘技能', { action: me_destroyMeSkill, match: matchType.match })
        this.matchMap.set('分解装备', { action: me_destroyBagEquip, match: matchType.match })
        this.matchMap.set('装备商店', { action: shop_equip, match: matchType.all })
        this.matchMap.set('购买装备', { action: shop_equip_buy, match: matchType.all })
        this.matchMap.set('技能商店', { action: shop_skill, match: matchType.all })
        this.matchMap.set('我的称号', { action: me_title, match: matchType.match })
        this.matchMap.set('重置称号', { action: me_titleRandom, match: matchType.match })
        this.matchMap.set('购买技能', { action: shop_skill_buy, match: matchType.all })
        this.matchMap.set('黑市购买', { action: shop_back_buy, match: matchType.all })
        this.matchMap.set('头像商店', { action: shop_icon, match: matchType.all })
        this.matchMap.set('购买头像', { action: shop_icon_buy, match: matchType.all })
        this.matchMap.set('表情指令', { action: emojiMenu, match: matchType.all })

        this.matchMap.set('我的技能', { action: me_skill, match: matchType.all })
        this.matchMap.set('我的宠物', { action: me_pet, match: matchType.all })
        this.matchMap.set('查看宠物', { action: me_lookPet, match: matchType.match })
        this.matchMap.set('宠物改名', { action: me_petChangeName, match: matchType.match })
        this.matchMap.set('放生宠物', { action: me_petRm, match: matchType.match })
        this.matchMap.set('我的进化', { action: me_ancestry, match: matchType.match })
        this.matchMap.set('重置进化', { action: randomAncestry, match: matchType.all })
        this.matchMap.set('华山论剑', { action: rank, match: matchType.all })
        this.matchMap.set('我的工会', { action: me_team, match: matchType.all })
        this.matchMap.set('创建工会', { action: creator_team, match: matchType.match })
        this.matchMap.set('解散工会', { action: dismiss_team, match: matchType.all })
        this.matchMap.set('工会改名', { action: changeName_team, match: matchType.match })
        this.matchMap.set('成员列表', { action: userList_team, match: matchType.all })
        this.matchMap.set('生成邀请码', { action: creatorJoinCode_team, match: matchType.all })
        this.matchMap.set('加入工会', { action: join_team, match: matchType.match })
        this.matchMap.set('退出工会', { action: out_team, match: matchType.all })
        this.matchMap.set('踢出成员', { action: kickout_team, match: matchType.match })
        this.matchMap.set('工会商店', { action: shop_team, match: matchType.all })
        this.matchMap.set('工会购买', { action: shop_team_buy, match: matchType.all })
        this.matchMap.set('PK', { action: pk, match: matchType.match })
        this.matchMap.set('攻击boss', { action: attackBoss, match: matchType.match })
        this.matchMap.set('捕捉', { action: docile, match: matchType.match })
        this.matchMap.set('拍卖行', { action: auction_look, match: matchType.all })
        this.matchMap.set(`拍卖`, { action: auction, match: matchType.match })
        this.matchMap.set(`出价`, { action: auction_offer, match: matchType.match })
        this.matchMap.set('仓库', { action: store_look, match: matchType.all })
        this.matchMap.set('取', { action: store_get, match: matchType.match })
        this.matchMap.set('存装备', { action: store_save_equip, match: matchType.match })
        this.matchMap.set('穿装备', { action: me_wearEquip, match: matchType.match })
        this.matchMap.set('钓鱼', { action: fishing, match: matchType.all })
        this.matchMap.set('黑市商店', { action: shop_back, match: matchType.all })
        this.matchMap.set('声望商店', { action: shop_rankscore, match: matchType.all })
        this.matchMap.set('声望购买', { action: shop_rankscore_buy, match: matchType.all })
        this.matchMap.set('签到', { action: me_sign, match: matchType.all })
        this.matchMap.set('属性', { action: me_attribute, match: matchType.all })
        // this.matchMap.set('测试', { action: battleTest, match: matchType.all })
        this.matchMap.set('位置', { action: me_pos, match: matchType.all })
        this.matchMap.set('改名', { action: me_changeName, match: matchType.match })
        this.matchMap.set('钱包', { action: me_wallet, match: matchType.match })
        this.matchMap.set('复活', { action: me_resLife, match: matchType.all })
        this.matchMap.set('治疗', { action: me_resLife, match: matchType.all })
        this.matchMap.set('背包', { action: me_bag, match: matchType.all })

        // 设置相关
        this.matchMap.set('设置', { action: setUp, match: matchType.match, isShowMatch: true })
        this.matchMap.set('设置消息文本模式', { action: setUp, match: matchType.match, isShowMatch: false })
        this.matchMap.set('设置消息卡片模式', { action: setUp, match: matchType.match, isShowMatch: false })
        this.matchMap.set('设置不显示地图坐标', { action: setUp, match: matchType.match, isShowMatch: false })
        this.matchMap.set('设置显示地图坐标', { action: setUp, match: matchType.match, isShowMatch: false })
        this.matchMap.set('设置显示伤害日志', { action: setUp, match: matchType.match, isShowMatch: false })
        this.matchMap.set('设置不显示伤害日志', { action: setUp, match: matchType.match, isShowMatch: false })
        this.matchMap.set('设置显示击杀日志', { action: setUp, match: matchType.match, isShowMatch: false })
        this.matchMap.set('设置不显示击杀日志', { action: setUp, match: matchType.match, isShowMatch: false })

        this.matchMap.set('强化', { action: me_strengthen, match: matchType.match })
        this.matchMap.set('传送', { action: me_callPos, match: matchType.match })
        this.matchMap.set('上', { action: me_move, match: matchType.all })
        this.matchMap.set('下', { action: me_move, match: matchType.all })
        this.matchMap.set('左', { action: me_move, match: matchType.all })
        this.matchMap.set('右', { action: me_move, match: matchType.all })

    }
    start() {
        bot.setOnMsg_at((data: BOT_MSG_AT) => this.atBot(data))
        // this.updateCode()

    }
    /**
     * // 收到消息
     * 用户艾特机器人触发
     */
    async atBot(data: BOT_MSG_AT) {
        log('收到消息', data.guild_id, data.author.username, data.content)
        // return
        if (!sever.isReady()) {
            let temp = ``;
            temp += `<emoji:147>有内鬼！服务器终止了通话,正在重新通话`
            await bot.sendText(data.channel_id, temp);
            await sever.HelloWorld()
            return;
        }
        if (data.content == '频道ID') {
            await bot.sendText(data.channel_id, data.channel_id);
            return
        }
        if (data.content == '我的ID' || data.content == '我的id') {
            await bot.sendText(data.channel_id, data.author.id)
            return;
        }
        if (data.content == '测试') {
            log('测试')
            bot.test(data.guild_id, data.author.id)
            return;
        }
        // if (data.content) {
        //     log('测试')
        //     for (let index = 0; index < 20; index++) {
        //         await bot.sendText(data.channel_id, `赛马/参赛`)
        //     }
        //     return;
        // }
        // let isNext = false;
        // let whiteMap = new Map();
        // whiteMap.set('1933444',true)
        // whiteMap.set('1495759',true)
        // whiteMap.set('7244616',true) 
        // whiteMap.set('7267397',true)

        // if (whiteMap.has(data.channel_id)) {
        //     isNext = true;
        // }
        // if(!isNext){
        //     return;
        // }


        if (!this.devTipsMap.has(data.guild_id)) {
            bot.sendText(data.channel_id, `内测中不会保存任何数据,建议请前往官方频道[达尔文进化岛]测试体验,V1已运行7月24天感谢,你的陪伴，愿后会有期。`)
            this.devTipsMap.set(data.guild_id, true)
        }

        // if (data.author.id != '14139673525601401123') {
        //     bot.sendText(data.channel_id, `你没有对此机器人的测试权限`)
        //     return;
        // }
        // if (data.guild_id != '8512894071433076954' && data.author.id != '14139673525601401123') {
        //     bot.sendText(data.channel_id, `内测中,请前往官方频道[达尔文进化岛]测试体验`)
        //     // return;
        // }

        const userId = data.author.id;
        const userIcon = data.author.avatar;
        const fromChannel = data.channel_id;
        const userName = data.author.username;
        const lastContent = this.contentMap.get(userId);
        const guild = data.guild_id;


        if (this.speedLockMap.has(userId) && userName != '表情指令') {
            let lastSendTime = this.speedLockMap.get(userId) as number;
            if (Date.now() - lastSendTime <= 300) {
                const endLockTime = lastSendTime + 60000

                this.speedLockMap.set(userId, endLockTime)
                bot.sendText(fromChannel, `检测到消息太过频繁,请勿尝试使用脚本.冻结至:${new Date(endLockTime).toLocaleString()}`)
                return;
            }
        }
        this.speedLockMap.set(userId, Date.now())


        let content = data.content;
        if (content == '复读') {
            if (this.repeState.has(userId)) {
                content = lastContent || '复读';
            } else {
                this.repeState.set(userId, true)
            }
        } else {
            this.contentMap.set(userId, content)
            if (this.repeState.has(userId)) {
                this.repeState.delete(userId)
            }
        }

        let matchList = [] as { conf: any, match: number, key: string }[];
        let isFind = false;
        // 分析行为
        this.matchMap.forEach((conf, key) => {
            if (conf.match == matchType.all && content.toUpperCase() == key.toUpperCase() && !isFind) {
                isFind = true;
                new conf.action(userId, fromChannel, userIcon, content, key, userName, guild)
            } else if (conf.match == matchType.match && content.toUpperCase().includes(key.toUpperCase()) && !isFind) {
                isFind = true;
                new conf.action(userId, fromChannel, userIcon, content, key, userName, guild)
            }
            let match = common.xsd(key, content);
            if (!isFind) {

                if (typeof (conf.isShowMatch) != 'undefined' && !conf.isShowMatch) {
                    return;
                }

                matchList.push({ conf: conf, match: match, key: key })

            }
        });

        if (!isFind) {
            matchList.sort(function (A, B) {
                return B.match - A.match;
            });
            if (matchList[0].match == 0) {
                var arr = matchList
                arr.sort(() => {
                    return Math.random() - 0.5
                })
            }
            let temp = `┏┄═══<emoji:318>你想找什么?══━┄\n`;
            if (matchList[0].match == 0) {
                for (let index = 0; index < 15; index++) {
                    temp += `@${bot.getBot_name()}  ${matchList[index].key}\n`;
                }
            } else {
                for (let index = 0; index < 15; index++) {
                    if (matchList[index].match > 0) {
                        temp += `@${bot.getBot_name()}  ${matchList[index].key}\n`;
                    }
                }
            }

            temp += `┗┄━═════════━┄`

            await bot.sendText(data.channel_id, temp)
        }


    }
    // 客户端刷新单位：秒
    //    update() {
    //        log('update')
    //    }
}
