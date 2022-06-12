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
import { me_titleRandom } from './me/me_titleRandom';
import { me_title } from './me/me_title';
import { me_callPos } from './me/me_callPos';
import { me_strengthen } from './me/me_strengthen';
import { me_skill } from './me/me_skill';
import { shop_skill_buy } from './shop/shop_skill_buy';
import { shop_skill } from './shop/shop_skill';
import { shop_equip_buy } from './shop/shop_equip_buy';
import { shop_equip } from './shop/shop_equip';
import { me_destroyBagEquip } from './me/me_destroyBagEquip';
import { me_wearEquip } from './me/me_wearEquip';
import { me_lookBag } from './me/me_lookBag';
import { me_bag } from './me/me_bag';
import { me_resLife } from './me/me_resLife';
import { me_changeName } from './me/me_changeName';
import { chainTask } from './sys/chainTask';
import { me_wallet } from './me/me_wallet';
import { pos_attackPlayer } from './battle/pos_attackPlayer';
import { me_move } from './me/me_move';
import { sys_update } from './sys/update';
import { battleTest } from './battle/battleTest';
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
import common from '../unity/common';
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
    matchMap: Map<string, { action: any, match: matchType }>
    constructor() {
        this.matchMap = new Map();

        this.initKeyMap();
        this.start();
    }
    private initKeyMap() {
        /**
        * 排行榜指令模块
        */
        this.matchMap.set(`强化排行榜`, { action: rank_strengthen, match: matchType.all })
        this.matchMap.set(`签到排行榜`, { action: rank_sign, match: matchType.all })
        this.matchMap.set(`进化排行榜`, { action: rank_ancestry, match: matchType.all })
        this.matchMap.set(`等级排行榜`, { action: rank_leve, match: matchType.all })
        this.matchMap.set(`基因锁排行榜`, { action: rank_dnaLv, match: matchType.all })
        this.matchMap.set(`声望排行榜`, { action: rank, match: matchType.all })
        this.matchMap.set(`金币排行榜`, { action: rank_gold, match: matchType.all })
        this.matchMap.set(`宠物数量排行榜`, { action: rank_petCont, match: matchType.all })
        this.matchMap.set(`宠物等级排行榜`, { action: rank_petLeve, match: matchType.all })
        this.matchMap.set(`工会等级排行榜`, { action: rank_teamLv, match: matchType.all })
        this.matchMap.set(`称号属性排行榜`, { action: rank_titleAttr, match: matchType.all })
        this.matchMap.set(`称号重置排行榜`, { action: rank_titleCont, match: matchType.all })
        this.matchMap.set(`猜数排行榜`, { action: rank_MinGame_lottery_cont, match: matchType.all })
        this.matchMap.set(`猜数欧皇排行榜`, { action: rank_MinGame_lottery_win, match: matchType.all })
        this.matchMap.set(`排行榜`, { action: rank_menu, match: matchType.all })
        this.matchMap.set('拍卖行', { action: auction_look, match: matchType.all })
        this.matchMap.set(`猜数`, { action: lottery, match: matchType.match })
        this.matchMap.set('镜像挑战', { action: challenge_image, match: matchType.match })
        this.matchMap.set('破壁计划', { action: challenge_box, match: matchType.match })
        this.matchMap.set('阶梯计划', { action: soaringTask, match: matchType.all })

        this.matchMap.set('攻击全部怪物', { action: pos_attackEnemy, match: matchType.match })
        this.matchMap.set('查看背包装备', { action: me_lookBag, match: matchType.match })
        this.matchMap.set('销毁全部装备', { action: me_destroyBagEquip, match: matchType.all })
        this.matchMap.set('一言', { action: addOneWord, match: matchType.match })
        this.matchMap.set('称号改名', { action: me_titleChangeName, match: matchType.match })
        this.matchMap.set('更新日志', { action: sys_update, match: matchType.all })
        this.matchMap.set('攻击玩家', { action: pos_attackPlayer, match: matchType.match })
        this.matchMap.set('攻击怪物', { action: pos_attackEnemy, match: matchType.match })
        this.matchMap.set('基础指令', { action: baseTaskMenu, match: matchType.match })
        this.matchMap.set('打开宝箱', { action: openMapChestBox, match: matchType.match })
        this.matchMap.set('打开盲盒', { action: me_openBlindBox, match: matchType.match })
        this.matchMap.set('查询技能', { action: searchSkill, match: matchType.match })
        this.matchMap.set('我的装备', { action: me_equip, match: matchType.all })
        this.matchMap.set('遗忘技能', { action: me_destroyMeSkill, match: matchType.match })
        this.matchMap.set('销毁装备', { action: me_destroyBagEquip, match: matchType.match })
        this.matchMap.set('装备商店', { action: shop_equip, match: matchType.all })
        this.matchMap.set('购买装备', { action: shop_equip_buy, match: matchType.all })
        this.matchMap.set('技能商店', { action: shop_skill, match: matchType.all })
        this.matchMap.set('链式指令', { action: chainTask, match: matchType.all })
        this.matchMap.set('我的称号', { action: me_title, match: matchType.match })
        this.matchMap.set('重置称号', { action: me_titleRandom, match: matchType.match })
        this.matchMap.set('购买技能', { action: shop_skill_buy, match: matchType.all })
        this.matchMap.set('黑市购买', { action: shop_back_buy, match: matchType.all })
        this.matchMap.set('头像商店', { action: shop_icon, match: matchType.all })
        this.matchMap.set('购买头像', { action: shop_icon_buy, match: matchType.all })

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
        this.matchMap.set('每日任务', { action: everDayTask, match: matchType.all })
        this.matchMap.set('工会购买', { action: shop_team_buy, match: matchType.all })
        this.matchMap.set('PK', { action: pk, match: matchType.match })
        this.matchMap.set('攻击boss', { action: attackBoss, match: matchType.match })
        this.matchMap.set('捕捉', { action: docile, match: matchType.match })
        this.matchMap.set('拍卖行', { action: auction_look, match: matchType.all })
        this.matchMap.set(`拍卖`, { action: auction, match: matchType.match })
        this.matchMap.set(`出价`, { action: auction_offer, match: matchType.match })



        this.matchMap.set('穿装备', { action: me_wearEquip, match: matchType.match })
        this.matchMap.set('钓鱼', { action: fishing, match: matchType.all })
        this.matchMap.set('黑市商店', { action: shop_back, match: matchType.all })
        this.matchMap.set('签到', { action: me_sign, match: matchType.all })
        this.matchMap.set('属性', { action: me_attribute, match: matchType.all })
        this.matchMap.set('测试', { action: battleTest, match: matchType.all })
        this.matchMap.set('位置', { action: me_pos, match: matchType.all })
        this.matchMap.set('改名', { action: me_changeName, match: matchType.match })
        this.matchMap.set('钱包', { action: me_wallet, match: matchType.match })
        this.matchMap.set('复活', { action: me_resLife, match: matchType.all })
        this.matchMap.set('治疗', { action: me_resLife, match: matchType.all })
        this.matchMap.set('背包', { action: me_bag, match: matchType.all })
        this.matchMap.set('设置', { action: setUp, match: matchType.match })
        this.matchMap.set('强化', { action: me_strengthen, match: matchType.match })
        this.matchMap.set('传送', { action: me_callPos, match: matchType.match })
        this.matchMap.set('上', { action: me_move, match: matchType.all })
        this.matchMap.set('下', { action: me_move, match: matchType.all })
        this.matchMap.set('左', { action: me_move, match: matchType.all })
        this.matchMap.set('右', { action: me_move, match: matchType.all })

    }
    start() {
        bot.setOnMsg_at((data: BOT_MSG_AT) => this.atBot(data))

    }
    /**
     * // 收到消息
     * 用户艾特机器人触发
     */
    async atBot(data: BOT_MSG_AT) {
        if (!sever.isReady()) {
            let temp = ``;
            temp += `┏┄════⚠️错误提示═══━┄\n`
            temp += `┣⛔︎错误代码:${common.random(0, 99999999999).toString(16)}\n`;
            temp += `┣🗂️错误类型:🔴服务器无响应\n`;
            temp += `┣┄════❌错误提示═══━┄\n`
            temp += `  🟢客户端:${bot.severId()}\n`;
            temp += `  🟡正在开始重新连接\n`;
            temp += `┗┄━═══════════━┄\n`;
            temp += `🧚‍♂️如不知如何发生的错误且长时间存在请截图反馈`;
            await bot.sendText(data.channel_id, temp);
            await sever.HelloWorld()
            return;
        }
        if (data.content == '频道ID') {
            await bot.sendText(data.channel_id, data.channel_id);
            return
        }

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
        log('收到消息', data.channel_id, data.author.username, data.content)

        // if(data.author.id != '14139673525601401123'){
        //     bot.sendText(data.channel_id,`本地测试中`)
        //     return;
        // }
        const userId = data.author.id;
        const userIcon = data.author.avatar;
        const fromChannel = data.channel_id;
        const content = data.content;
        const userName = data.author.username;

        let matchList = [] as { conf: any, match: number, key: string }[];
        let isFind = false;
        // 分析行为
        this.matchMap.forEach((conf, key) => {
            if (conf.match == matchType.all && data.content.toUpperCase() == key.toUpperCase() && !isFind) {
                isFind = true;
                new conf.action(userId, fromChannel, userIcon, content, key, userName)
            } else if (conf.match == matchType.match && data.content.toUpperCase().includes(key.toUpperCase()) && !isFind) {
                isFind = true;
                new conf.action(userId, fromChannel, userIcon, content, key, userName)
            }
            let match = common.xsd(key, data.content);
            if (!isFind) {
                matchList.push({ conf: conf, match: match, key: key })
            }
        });

        if (!isFind) {
            matchList.sort(function (A, B) {
                return B.match - A.match;
            });
            if (matchList[0].match == 0) {
                var arr = matchList
                arr.sort(()=> {
                    return Math.random() - 0.5
                })
            }
            let temp = `┏┄════<emoji:318>你想找什么?══━┄\n`;
            if (matchList[0].match == 0) {
                for (let index = 0; index < 10; index++) {
                    temp += `@${bot.getBot_name()}  ${matchList[index].key}\n`;
                }
            }else{
                for (let index = 0; index < 10; index++) {
                    if(matchList[index].match > 0){
                        temp += `@${bot.getBot_name()}  ${matchList[index].key}\n`;
                    }
                }
            }
            
            temp += `┗┄━══════════━┄`

            await bot.sendText(data.channel_id, temp)
        }


    }
    // 客户端刷新单位：秒
    //    update() {
    //        log('update')
    //    }
}
