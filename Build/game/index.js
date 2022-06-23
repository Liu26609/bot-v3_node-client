"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rank_hp_1 = require("./rank/rank_hp");
const rank_teamContribute_1 = require("./rank/rank_teamContribute");
const shop_rankscore_buy_1 = require("./shop/shop_rankscore_buy");
const rank_military_pet_1 = require("./rank/rank_military_pet");
const shop_icon_1 = require("./shop/shop_icon");
const soaringTask_1 = require("./me/task/soaringTask");
const challenge_box_1 = require("./challenge/challenge_box");
const rank_MinGame_lottery_cont_1 = require("./rank/rank_MinGame_lottery_cont");
const rank_MinGame_lottery_win_1 = require("./rank/rank_MinGame_lottery_win");
const challenge_image_1 = require("./challenge/challenge_image");
const rank_titleCont_1 = require("./rank/rank_titleCont");
const rank_titleAttr_1 = require("./rank/rank_titleAttr");
const rank_teamLv_1 = require("./rank/rank_teamLv");
const rank_petCont_1 = require("./rank/rank_petCont");
const rank_rankscore_1 = require("./rank/rank_rankscore");
const rank_sign_1 = require("./rank/rank_sign");
const shop_team_buy_1 = require("./shop/shop_team_buy");
const shop_team_1 = require("./shop/shop_team");
const creatorJoinCode_team_1 = require("./me/team/creatorJoinCode_team");
const userList_team_1 = require("./me/team/userList_team");
const dismiss_team_1 = require("./me/team/dismiss_team");
const creator_team_1 = require("./me/team/creator_team");
const me_team_1 = require("./me/team/me_team");
const pk_1 = require("./battle/pk");
const auction_look_1 = require("./shop/auction_look");
const fishing_1 = require("./map/fishing");
const shop_back_buy_1 = require("./shop/shop_back_buy");
const me_titleRandom_1 = require("./me/title/me_titleRandom");
const me_title_1 = require("./me/me_title");
const me_callPos_1 = require("./me/me_callPos");
const me_strengthen_1 = require("./me/me_strengthen");
const me_skill_1 = require("./me/me_skill");
const shop_skill_buy_1 = require("./shop/shop_skill_buy");
const shop_skill_1 = require("./shop/shop_skill");
const shop_equip_buy_1 = require("./shop/shop_equip_buy");
const shop_equip_1 = require("./shop/shop_equip");
const me_destroyBagEquip_1 = require("./me/me_destroyBagEquip");
const me_wearEquip_1 = require("./me/me_wearEquip");
const me_lookBag_1 = require("./me/me_lookBag");
const me_bag_1 = require("./me/me_bag");
const me_resLife_1 = require("./me/me_resLife");
const me_changeName_1 = require("./me/me_changeName");
const me_wallet_1 = require("./me/me_wallet");
const pos_attackPlayer_1 = require("./battle/pos_attackPlayer");
const me_move_1 = require("./me/me_move");
const update_1 = require("./sys/update");
const me_attribute_1 = require("./me/me_attribute");
const __1 = require("..");
const bot_1 = __importDefault(require("../unity/bot"));
const sever_1 = __importDefault(require("../unity/sever"));
const me_sign_1 = __importDefault(require("./me/me_sign"));
const me_pos_1 = require("./me/me_pos");
const pos_attackEnemy_1 = require("./battle/pos_attackEnemy");
const baseTaskMenu_1 = require("./sys/baseTaskMenu");
const openMapChestBox_1 = require("./map/openMapChestBox");
const common_1 = __importDefault(require("../shared/game/common"));
const setUp_1 = require("./sys/setUp");
const searchSkill_1 = require("./sys/searchSkill");
const me_destroyMeSkill_1 = require("./me/me_destroyMeSkill");
const me_openBlindBox_1 = require("./me/me_openBlindBox");
const me_equip_1 = require("./me/me_equip");
const me_titleChangeName_1 = require("./me/me_titleChangeName");
const shop_back_1 = require("./shop/shop_back");
const auction_1 = require("./shop/auction");
const auction_offer_1 = require("./shop/auction_offer");
const me_pet_1 = require("./me/pet/me_pet");
const me_lookPet_1 = require("./me/pet/me_lookPet");
const me_petChangeName_1 = require("./me/pet/me_petChangeName");
const me_petRm_1 = require("./me/pet/me_petRm");
const docile_1 = require("./map/docile");
const me_ancestry_1 = require("./me/ancestry/me_ancestry");
const randomAncestry_1 = require("./me/ancestry/randomAncestry");
const attackBoss_1 = require("./battle/attackBoss");
const addOneWrod_1 = require("./sys/addOneWrod");
const rank_1 = require("./battle/rank");
const changeName_team_1 = require("./me/team/changeName_team");
const join_team_1 = require("./me/team/join_team");
const out_team_1 = require("./me/team/out_team");
const Kickout_team_1 = require("./me/team/Kickout_team");
const everDayTask_1 = require("./me/task/everDayTask");
const rank_leve_1 = require("./rank/rank_leve");
const rank_menu_1 = require("./rank/rank_menu");
const rank_strengthen_1 = require("./rank/rank_strengthen");
const rank_petLeve_1 = require("./rank/rank_petLeve");
const lottery_1 = require("./minGame/lottery/lottery");
const rank_gold_1 = require("./rank/rank_gold");
const shop_icon_buy_1 = require("./shop/shop_icon_buy");
const rank_dnaLv_1 = require("./rank/rank_dnaLv");
const rank_ancestry_1 = require("./rank/rank_ancestry");
const rank_military_1 = require("./rank/rank_military");
const rank_evil_1 = require("./rank/rank_evil");
const rank_justice_1 = require("./rank/rank_justice");
const me_AutoPlay_1 = require("./me/autoPlay/me_AutoPlay");
const updateDev_1 = require("./sys/updateDev");
const me_Reread_1 = require("./me/autoPlay/me_Reread");
const rank_MagicAttack_1 = require("./rank/rank_MagicAttack");
const rank_MagicDefense_1 = require("./rank/rank_MagicDefense");
const rank_PhysicalAttacks_1 = require("./rank/rank_PhysicalAttacks");
const rank_PhysicalDefense_1 = require("./rank/rank_PhysicalDefense");
const shop_rankscore_1 = require("./shop/shop_rankscore");
const me_vip_1 = require("./me/me_vip");
var matchType;
(function (matchType) {
    /**
     * 文字完全匹配指令
     */
    matchType[matchType["all"] = 0] = "all";
    /**
     * 文字包含指令
     */
    matchType[matchType["match"] = 1] = "match";
})(matchType || (matchType = {}));
class game {
    constructor() {
        this.speedLockMap = new Map();
        this.devTipsMap = new Map();
        this.repeState = new Map();
        this.matchMap = new Map();
        this.contentMap = new Map();
        this.initKeyMap();
        this.start();
    }
    initKeyMap() {
        /**
        * 排行榜指令模块
        */
        //    emojiMenu
        this.matchMap.set(`赞助会员`, { action: me_vip_1.me_vip, match: matchType.all });
        this.matchMap.set(`工会贡献排行榜`, { action: rank_teamContribute_1.rank_teamContribute, match: matchType.all });
        this.matchMap.set(`生命排行榜`, { action: rank_hp_1.rank_hp, match: matchType.all });
        this.matchMap.set('复读', { action: me_Reread_1.me_Reread, match: matchType.all });
        this.matchMap.set('更新', { action: updateDev_1.sys_update_code, match: matchType.all });
        this.matchMap.set(`强化排行榜`, { action: rank_strengthen_1.rank_strengthen, match: matchType.all });
        this.matchMap.set(`魔攻排行榜`, { action: rank_MagicAttack_1.rank_MagicAttack, match: matchType.all });
        this.matchMap.set(`魔防排行榜`, { action: rank_MagicDefense_1.rank_MagicDefense, match: matchType.all });
        this.matchMap.set(`物攻排行榜`, { action: rank_PhysicalAttacks_1.rank_PhysicalAttacks, match: matchType.all });
        this.matchMap.set(`物防排行榜`, { action: rank_PhysicalDefense_1.rank_PhysicalDefense, match: matchType.all });
        this.matchMap.set(`签到排行榜`, { action: rank_sign_1.rank_sign, match: matchType.all });
        this.matchMap.set(`红名排行榜`, { action: rank_evil_1.rank_evil, match: matchType.all });
        this.matchMap.set(`正义排行榜`, { action: rank_justice_1.rank_justice, match: matchType.all });
        this.matchMap.set(`进化排行榜`, { action: rank_ancestry_1.rank_ancestry, match: matchType.all });
        this.matchMap.set(`战力排行榜`, { action: rank_military_1.rank_military, match: matchType.all });
        this.matchMap.set(`宠物战力排行榜`, { action: rank_military_pet_1.rank_military_pet, match: matchType.all });
        this.matchMap.set(`等级排行榜`, { action: rank_leve_1.rank_leve, match: matchType.all });
        this.matchMap.set(`基因锁排行榜`, { action: rank_dnaLv_1.rank_dnaLv, match: matchType.all });
        this.matchMap.set(`声望排行榜`, { action: rank_rankscore_1.rank_rankscore, match: matchType.all });
        this.matchMap.set(`金币排行榜`, { action: rank_gold_1.rank_gold, match: matchType.all });
        this.matchMap.set(`宠物数量排行榜`, { action: rank_petCont_1.rank_petCont, match: matchType.all });
        this.matchMap.set(`宠物等级排行榜`, { action: rank_petLeve_1.rank_petLeve, match: matchType.all });
        this.matchMap.set(`工会等级排行榜`, { action: rank_teamLv_1.rank_teamLv, match: matchType.all });
        this.matchMap.set(`称号属性排行榜`, { action: rank_titleAttr_1.rank_titleAttr, match: matchType.all });
        this.matchMap.set(`称号重置排行榜`, { action: rank_titleCont_1.rank_titleCont, match: matchType.all });
        this.matchMap.set(`猜数排行榜`, { action: rank_MinGame_lottery_cont_1.rank_MinGame_lottery_cont, match: matchType.all });
        this.matchMap.set(`猜数欧皇排行榜`, { action: rank_MinGame_lottery_win_1.rank_MinGame_lottery_win, match: matchType.all });
        this.matchMap.set(`排行榜`, { action: rank_menu_1.rank_menu, match: matchType.all });
        this.matchMap.set('拍卖行', { action: auction_look_1.auction_look, match: matchType.all });
        this.matchMap.set(`猜数`, { action: lottery_1.lottery, match: matchType.match });
        this.matchMap.set('镜像挑战', { action: challenge_image_1.challenge_image, match: matchType.match });
        this.matchMap.set('破壁计划', { action: challenge_box_1.challenge_box, match: matchType.match });
        this.matchMap.set('阶梯计划', { action: soaringTask_1.soaringTask, match: matchType.all });
        this.matchMap.set('挂机', { action: me_AutoPlay_1.me_AutoPlay, match: matchType.match });
        this.matchMap.set('攻击全部怪物', { action: pos_attackEnemy_1.pos_attackEnemy, match: matchType.match });
        this.matchMap.set('查看背包装备', { action: me_lookBag_1.me_lookBag, match: matchType.match });
        this.matchMap.set('分解全部装备', { action: me_destroyBagEquip_1.me_destroyBagEquip, match: matchType.all });
        this.matchMap.set('一言', { action: addOneWrod_1.addOneWord, match: matchType.match });
        this.matchMap.set('称号改名', { action: me_titleChangeName_1.me_titleChangeName, match: matchType.match });
        this.matchMap.set('更新日志', { action: update_1.sys_update, match: matchType.all });
        this.matchMap.set('攻击玩家', { action: pos_attackPlayer_1.pos_attackPlayer, match: matchType.match });
        this.matchMap.set('攻击怪物', { action: pos_attackEnemy_1.pos_attackEnemy, match: matchType.match });
        this.matchMap.set('基础指令', { action: baseTaskMenu_1.baseTaskMenu, match: matchType.match });
        this.matchMap.set('打开宝箱', { action: openMapChestBox_1.openMapChestBox, match: matchType.match });
        this.matchMap.set('打开盲盒', { action: me_openBlindBox_1.me_openBlindBox, match: matchType.match });
        this.matchMap.set('查询技能', { action: searchSkill_1.searchSkill, match: matchType.match });
        this.matchMap.set('我的装备', { action: me_equip_1.me_equip, match: matchType.all });
        this.matchMap.set('遗忘技能', { action: me_destroyMeSkill_1.me_destroyMeSkill, match: matchType.match });
        this.matchMap.set('分解装备', { action: me_destroyBagEquip_1.me_destroyBagEquip, match: matchType.match });
        this.matchMap.set('装备商店', { action: shop_equip_1.shop_equip, match: matchType.all });
        this.matchMap.set('购买装备', { action: shop_equip_buy_1.shop_equip_buy, match: matchType.all });
        this.matchMap.set('技能商店', { action: shop_skill_1.shop_skill, match: matchType.all });
        this.matchMap.set('我的称号', { action: me_title_1.me_title, match: matchType.match });
        this.matchMap.set('重置称号', { action: me_titleRandom_1.me_titleRandom, match: matchType.match });
        this.matchMap.set('购买技能', { action: shop_skill_buy_1.shop_skill_buy, match: matchType.all });
        this.matchMap.set('黑市购买', { action: shop_back_buy_1.shop_back_buy, match: matchType.all });
        this.matchMap.set('头像商店', { action: shop_icon_1.shop_icon, match: matchType.all });
        this.matchMap.set('购买头像', { action: shop_icon_buy_1.shop_icon_buy, match: matchType.all });
        // 
        this.matchMap.set('我的技能', { action: me_skill_1.me_skill, match: matchType.all });
        this.matchMap.set('我的宠物', { action: me_pet_1.me_pet, match: matchType.all });
        this.matchMap.set('查看宠物', { action: me_lookPet_1.me_lookPet, match: matchType.match });
        this.matchMap.set('宠物改名', { action: me_petChangeName_1.me_petChangeName, match: matchType.match });
        this.matchMap.set('放生宠物', { action: me_petRm_1.me_petRm, match: matchType.match });
        this.matchMap.set('我的进化', { action: me_ancestry_1.me_ancestry, match: matchType.match });
        this.matchMap.set('重置进化', { action: randomAncestry_1.randomAncestry, match: matchType.all });
        this.matchMap.set('华山论剑', { action: rank_1.rank, match: matchType.all });
        this.matchMap.set('我的工会', { action: me_team_1.me_team, match: matchType.all });
        this.matchMap.set('创建工会', { action: creator_team_1.creator_team, match: matchType.match });
        this.matchMap.set('解散工会', { action: dismiss_team_1.dismiss_team, match: matchType.all });
        this.matchMap.set('工会改名', { action: changeName_team_1.changeName_team, match: matchType.match });
        this.matchMap.set('成员列表', { action: userList_team_1.userList_team, match: matchType.all });
        this.matchMap.set('生成邀请码', { action: creatorJoinCode_team_1.creatorJoinCode_team, match: matchType.all });
        this.matchMap.set('加入工会', { action: join_team_1.join_team, match: matchType.match });
        this.matchMap.set('退出工会', { action: out_team_1.out_team, match: matchType.all });
        this.matchMap.set('踢出成员', { action: Kickout_team_1.kickout_team, match: matchType.match });
        this.matchMap.set('工会商店', { action: shop_team_1.shop_team, match: matchType.all });
        this.matchMap.set('每日任务', { action: everDayTask_1.everDayTask, match: matchType.all });
        this.matchMap.set('工会购买', { action: shop_team_buy_1.shop_team_buy, match: matchType.all });
        this.matchMap.set('PK', { action: pk_1.pk, match: matchType.match });
        this.matchMap.set('攻击boss', { action: attackBoss_1.attackBoss, match: matchType.match });
        this.matchMap.set('捕捉', { action: docile_1.docile, match: matchType.match });
        this.matchMap.set('拍卖行', { action: auction_look_1.auction_look, match: matchType.all });
        this.matchMap.set(`拍卖`, { action: auction_1.auction, match: matchType.match });
        this.matchMap.set(`出价`, { action: auction_offer_1.auction_offer, match: matchType.match });
        this.matchMap.set('穿装备', { action: me_wearEquip_1.me_wearEquip, match: matchType.match });
        this.matchMap.set('钓鱼', { action: fishing_1.fishing, match: matchType.all });
        this.matchMap.set('黑市商店', { action: shop_back_1.shop_back, match: matchType.all });
        this.matchMap.set('声望商店', { action: shop_rankscore_1.shop_rankscore, match: matchType.all });
        this.matchMap.set('声望购买', { action: shop_rankscore_buy_1.shop_rankscore_buy, match: matchType.all });
        this.matchMap.set('签到', { action: me_sign_1.default, match: matchType.all });
        this.matchMap.set('属性', { action: me_attribute_1.me_attribute, match: matchType.all });
        // this.matchMap.set('测试', { action: battleTest, match: matchType.all })
        this.matchMap.set('位置', { action: me_pos_1.me_pos, match: matchType.all });
        this.matchMap.set('改名', { action: me_changeName_1.me_changeName, match: matchType.match });
        this.matchMap.set('钱包', { action: me_wallet_1.me_wallet, match: matchType.match });
        this.matchMap.set('复活', { action: me_resLife_1.me_resLife, match: matchType.all });
        this.matchMap.set('治疗', { action: me_resLife_1.me_resLife, match: matchType.all });
        this.matchMap.set('背包', { action: me_bag_1.me_bag, match: matchType.all });
        // 设置相关
        this.matchMap.set('设置', { action: setUp_1.setUp, match: matchType.match, isShowMatch: true });
        this.matchMap.set('设置消息文本模式', { action: setUp_1.setUp, match: matchType.match, isShowMatch: false });
        this.matchMap.set('设置消息卡片模式', { action: setUp_1.setUp, match: matchType.match, isShowMatch: false });
        this.matchMap.set('设置不显示地图坐标', { action: setUp_1.setUp, match: matchType.match, isShowMatch: false });
        this.matchMap.set('设置显示地图坐标', { action: setUp_1.setUp, match: matchType.match, isShowMatch: false });
        this.matchMap.set('强化', { action: me_strengthen_1.me_strengthen, match: matchType.match });
        this.matchMap.set('传送', { action: me_callPos_1.me_callPos, match: matchType.match });
        this.matchMap.set('上', { action: me_move_1.me_move, match: matchType.all });
        this.matchMap.set('下', { action: me_move_1.me_move, match: matchType.all });
        this.matchMap.set('左', { action: me_move_1.me_move, match: matchType.all });
        this.matchMap.set('右', { action: me_move_1.me_move, match: matchType.all });
    }
    start() {
        bot_1.default.setOnMsg_at((data) => this.atBot(data));
        // this.updateCode()
    }
    /**
     * // 收到消息
     * 用户艾特机器人触发
     */
    atBot(data) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, __1.log)('收到消息', data.guild_id, data.author.username, data.content);
            // return
            if (!sever_1.default.isReady()) {
                let temp = ``;
                temp += `<emoji:147>有内鬼！服务器终止了通话,正在重新通话`;
                yield bot_1.default.sendText(data.channel_id, temp);
                yield sever_1.default.HelloWorld();
                return;
            }
            if (data.content == '频道ID') {
                yield bot_1.default.sendText(data.channel_id, data.channel_id);
                return;
            }
            if (data.content == '我的ID' || data.content == '我的id') {
                yield bot_1.default.sendText(data.channel_id, data.author.id);
                return;
            }
            if (data.content == '测试') {
                (0, __1.log)('测试');
                bot_1.default.test(data.guild_id, data.author.id);
                return;
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
            if (!this.devTipsMap.has(data.guild_id)) {
                bot_1.default.sendText(data.channel_id, `内测中不会保存任何数据,建议请前往官方频道[达尔文进化岛]测试体验,V1已运行7月24天感谢,你的陪伴，愿后会有期。`);
                this.devTipsMap.set(data.guild_id, true);
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
            if (this.speedLockMap.has(userId)) {
                let lastSendTime = this.speedLockMap.get(userId);
                if (Date.now() - lastSendTime <= 100) {
                    bot_1.default.sendText(guild, '消息太过频繁。');
                    return;
                }
            }
            else {
                this.speedLockMap.set(userId, Date.now());
            }
            let content = data.content;
            if (content == '复读') {
                if (this.repeState.has(userId)) {
                    content = lastContent || '复读';
                }
                else {
                    this.repeState.set(userId, true);
                }
            }
            else {
                this.contentMap.set(userId, content);
                if (this.repeState.has(userId)) {
                    this.repeState.delete(userId);
                }
            }
            let matchList = [];
            let isFind = false;
            // 分析行为
            this.matchMap.forEach((conf, key) => {
                if (conf.match == matchType.all && content.toUpperCase() == key.toUpperCase() && !isFind) {
                    isFind = true;
                    new conf.action(userId, fromChannel, userIcon, content, key, userName, guild);
                }
                else if (conf.match == matchType.match && content.toUpperCase().includes(key.toUpperCase()) && !isFind) {
                    isFind = true;
                    new conf.action(userId, fromChannel, userIcon, content, key, userName, guild);
                }
                let match = common_1.default.xsd(key, content);
                if (!isFind) {
                    if (typeof (conf.isShowMatch) != 'undefined' && !conf.isShowMatch) {
                        return;
                    }
                    matchList.push({ conf: conf, match: match, key: key });
                }
            });
            if (!isFind) {
                matchList.sort(function (A, B) {
                    return B.match - A.match;
                });
                if (matchList[0].match == 0) {
                    var arr = matchList;
                    arr.sort(() => {
                        return Math.random() - 0.5;
                    });
                }
                let temp = `┏┄════<emoji:318>你想找什么?══━┄\n`;
                if (matchList[0].match == 0) {
                    for (let index = 0; index < 10; index++) {
                        temp += `@${bot_1.default.getBot_name()}  ${matchList[index].key}\n`;
                    }
                }
                else {
                    for (let index = 0; index < 10; index++) {
                        if (matchList[index].match > 0) {
                            temp += `@${bot_1.default.getBot_name()}  ${matchList[index].key}\n`;
                        }
                    }
                }
                temp += `┗┄━══════════━┄`;
                yield bot_1.default.sendText(data.channel_id, temp);
            }
        });
    }
}
exports.default = game;
