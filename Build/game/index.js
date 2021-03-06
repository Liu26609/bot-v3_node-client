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
const rank_MinGame_horse_cont_1 = require("./rank/rank_MinGame_horse_cont");
const rank_MinGame_horse_win_1 = require("./rank/rank_MinGame_horse_win");
const horse_look_1 = require("./minGame/horse/horse_look");
const horse_join_1 = require("./minGame/horse/horse_join");
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
const strengthen_wearEquip_1 = require("./me/equip/strengthen_wearEquip");
const me_skill_1 = require("./me/me_skill");
const shop_skill_buy_1 = require("./shop/shop_skill_buy");
const shop_skill_1 = require("./shop/shop_skill");
const shop_equip_buy_1 = require("./shop/shop_equip_buy");
const shop_equip_1 = require("./shop/shop_equip");
const me_destroyBagEquip_1 = require("./me/equip/me_destroyBagEquip");
const me_wearEquip_1 = require("./me/equip/me_wearEquip");
const me_lookBag_1 = require("./me/equip/me_lookBag");
const me_bag_1 = require("./me/equip/me_bag");
const me_resLife_1 = require("./me/me_resLife");
const me_changeName_1 = require("./me/me_changeName");
const me_wallet_1 = require("./me/me_wallet");
const pos_attackPlayer_1 = require("./battle/pos_attackPlayer");
const me_move_1 = require("./map/me_move");
const me_attribute_1 = require("./me/me_attribute");
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
const me_equip_1 = require("./me/equip/me_equip");
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
const emojiMenu_1 = require("./sys/emojiMenu");
const openMapChestBox_all_1 = require("./map/openMapChestBox_all");
const store_save_equip_1 = require("./me/store/store_save_equip");
const store_look_1 = require("./me/store/store_look");
const store_get_1 = require("./me/store/store_get");
const newUserTask_1 = require("./me/task/newUserTask");
const challenge_hit_1 = require("./challenge/challenge_hit");
const challenge_power_1 = require("./challenge/challenge_power");
const challenge_downUser_1 = require("./challenge/challenge_downUser");
const rank_MinGame_horse_die_1 = require("./rank/rank_MinGame_horse_die");
const challenge_infinite_1 = require("./challenge/challenge_infinite");
const rank_Challenge_infinite_1 = require("./rank/rank_Challenge_infinite");
const challenge_greed_1 = require("./challenge/challenge_greed");
const me_saveUser_1 = require("./me/me_saveUser");
const strengthen_bagEquip_1 = require("./me/equip/strengthen_bagEquip");
const down_wearEquip_1 = require("./me/equip/down_wearEquip");
const title_randomStyle_1 = require("./me/title/title_randomStyle");
const shop_showStyle_1 = require("./shop/shop_showStyle");
const shop_showStyle_buy_1 = require("./shop/shop_showStyle_buy");
const randomSkill_wearEquip_1 = require("./me/equip/randomSkill_wearEquip");
var matchType;
(function (matchType) {
    /**
     * ????????????????????????
     */
    matchType[matchType["all"] = 0] = "all";
    /**
     * ??????????????????
     */
    matchType[matchType["match"] = 1] = "match";
})(matchType || (matchType = {}));
class game {
    constructor() {
        this.speedLockMap = new Map();
        this.repeState = new Map();
        this.matchMap = new Map();
        this.contentMap = new Map();
        this.initRankKey();
        this.initKeyMap();
        this.start();
        setTimeout(() => {
            process.exit();
        }, 10800000);
    }
    initRankKey() {
        this.matchMap.set(`???????????????`, { action: rank_strengthen_1.rank_strengthen, match: matchType.all });
        this.matchMap.set(`???????????????`, { action: rank_MagicAttack_1.rank_MagicAttack, match: matchType.all });
        this.matchMap.set(`???????????????`, { action: rank_MagicDefense_1.rank_MagicDefense, match: matchType.all });
        this.matchMap.set(`???????????????`, { action: rank_PhysicalAttacks_1.rank_PhysicalAttacks, match: matchType.all });
        this.matchMap.set(`???????????????`, { action: rank_PhysicalDefense_1.rank_PhysicalDefense, match: matchType.all });
        this.matchMap.set(`???????????????`, { action: rank_sign_1.rank_sign, match: matchType.all });
        this.matchMap.set(`???????????????`, { action: rank_evil_1.rank_evil, match: matchType.all });
        this.matchMap.set(`???????????????`, { action: rank_justice_1.rank_justice, match: matchType.all });
        this.matchMap.set(`???????????????`, { action: rank_ancestry_1.rank_ancestry, match: matchType.all });
        this.matchMap.set(`???????????????`, { action: rank_military_1.rank_military, match: matchType.all });
        this.matchMap.set(`?????????????????????`, { action: rank_military_pet_1.rank_military_pet, match: matchType.all });
        this.matchMap.set(`????????????????????????`, { action: rank_MinGame_horse_die_1.rank_MinGame_horse_die, match: matchType.all });
        this.matchMap.set(`???????????????`, { action: rank_leve_1.rank_leve, match: matchType.all });
        this.matchMap.set(`??????????????????`, { action: rank_dnaLv_1.rank_dnaLv, match: matchType.all });
        this.matchMap.set(`???????????????`, { action: rank_rankscore_1.rank_rankscore, match: matchType.all });
        this.matchMap.set(`???????????????`, { action: rank_gold_1.rank_gold, match: matchType.all });
        this.matchMap.set(`?????????????????????`, { action: rank_petCont_1.rank_petCont, match: matchType.all });
        this.matchMap.set(`?????????????????????`, { action: rank_petLeve_1.rank_petLeve, match: matchType.all });
        this.matchMap.set(`?????????????????????`, { action: rank_teamLv_1.rank_teamLv, match: matchType.all });
        this.matchMap.set(`?????????????????????`, { action: rank_titleAttr_1.rank_titleAttr, match: matchType.all });
        this.matchMap.set(`?????????????????????`, { action: rank_titleCont_1.rank_titleCont, match: matchType.all });
        this.matchMap.set(`???????????????`, { action: rank_MinGame_lottery_cont_1.rank_MinGame_lottery_cont, match: matchType.all });
        this.matchMap.set(`?????????????????????`, { action: rank_MinGame_lottery_win_1.rank_MinGame_lottery_win, match: matchType.all });
        this.matchMap.set(`????????????????????????`, { action: rank_MinGame_horse_win_1.rank_MinGame_horse_win, match: matchType.all });
        this.matchMap.set(`????????????????????????`, { action: rank_MinGame_horse_cont_1.rank_MinGame_horse_cont, match: matchType.all });
        this.matchMap.set(`?????????????????????`, { action: rank_teamContribute_1.rank_teamContribute, match: matchType.all });
        this.matchMap.set(`???????????????`, { action: rank_hp_1.rank_hp, match: matchType.all });
        this.matchMap.set(`?????????????????????`, { action: rank_Challenge_infinite_1.rank_Challenge_infinite, match: matchType.all });
    }
    initKeyMap() {
        /**
        * ?????????????????????
        */
        //    emojiMenu
        this.matchMap.set('??????', { action: randomSkill_wearEquip_1.randomSkill_wearEquip, match: matchType.match });
        this.matchMap.set(`??????????????????`, { action: title_randomStyle_1.title_randomStyle, match: matchType.match });
        this.matchMap.set(`????????????`, { action: challenge_greed_1.challenge_greed, match: matchType.match });
        this.matchMap.set(`???????????????`, { action: horse_look_1.horse_look, match: matchType.all });
        this.matchMap.set(`??????`, { action: horse_join_1.horse_join, match: matchType.match });
        this.matchMap.set(`????????????`, { action: me_vip_1.me_vip, match: matchType.all });
        this.matchMap.set('??????', { action: me_Reread_1.me_Reread, match: matchType.all });
        this.matchMap.set('??????', { action: updateDev_1.sys_update_code, match: matchType.all });
        this.matchMap.set(`?????????`, { action: rank_menu_1.rank_menu, match: matchType.all });
        this.matchMap.set('?????????', { action: auction_look_1.auction_look, match: matchType.all });
        this.matchMap.set(`??????`, { action: lottery_1.lottery, match: matchType.match });
        this.matchMap.set('????????????', { action: challenge_image_1.challenge_image, match: matchType.match });
        this.matchMap.set('????????????', { action: challenge_hit_1.challenge_hit, match: matchType.match });
        this.matchMap.set('????????????', { action: challenge_power_1.challenge_power, match: matchType.match });
        this.matchMap.set('????????????', { action: challenge_infinite_1.challenge_infinite, match: matchType.match });
        this.matchMap.set('????????????', { action: challenge_downUser_1.challenge_downUser, match: matchType.match });
        this.matchMap.set('????????????', { action: challenge_box_1.challenge_box, match: matchType.match });
        this.matchMap.set('????????????', { action: soaringTask_1.soaringTask, match: matchType.all });
        this.matchMap.set('????????????', { action: everDayTask_1.everDayTask, match: matchType.all });
        this.matchMap.set('????????????', { action: newUserTask_1.newUserTask, match: matchType.all });
        this.matchMap.set('??????', { action: me_AutoPlay_1.me_AutoPlay, match: matchType.match });
        this.matchMap.set('??????????????????', { action: pos_attackEnemy_1.pos_attackEnemy, match: matchType.match });
        this.matchMap.set('??????????????????', { action: me_lookBag_1.me_lookBag, match: matchType.match });
        this.matchMap.set('??????????????????', { action: strengthen_bagEquip_1.strengthen_bagEquip, match: matchType.match });
        this.matchMap.set('??????????????????', { action: me_destroyBagEquip_1.me_destroyBagEquip, match: matchType.all });
        this.matchMap.set('??????', { action: addOneWrod_1.addOneWord, match: matchType.match });
        this.matchMap.set('????????????', { action: pos_attackPlayer_1.pos_attackPlayer, match: matchType.match });
        this.matchMap.set('????????????', { action: pos_attackEnemy_1.pos_attackEnemy, match: matchType.match });
        this.matchMap.set('????????????', { action: baseTaskMenu_1.baseTaskMenu, match: matchType.match });
        this.matchMap.set('????????????', { action: openMapChestBox_1.openMapChestBox, match: matchType.match });
        this.matchMap.set('??????????????????', { action: openMapChestBox_all_1.openMapChestBox_all, match: matchType.all });
        this.matchMap.set('????????????', { action: me_openBlindBox_1.me_openBlindBox, match: matchType.match });
        this.matchMap.set('????????????', { action: searchSkill_1.searchSkill, match: matchType.match });
        this.matchMap.set('????????????', { action: me_equip_1.me_equip, match: matchType.all });
        this.matchMap.set('????????????', { action: me_destroyMeSkill_1.me_destroyMeSkill, match: matchType.match });
        this.matchMap.set('????????????', { action: me_destroyBagEquip_1.me_destroyBagEquip, match: matchType.match });
        this.matchMap.set('????????????', { action: shop_equip_1.shop_equip, match: matchType.all });
        this.matchMap.set('????????????', { action: shop_equip_buy_1.shop_equip_buy, match: matchType.all });
        this.matchMap.set('????????????', { action: shop_skill_1.shop_skill, match: matchType.all });
        this.matchMap.set('????????????', { action: me_title_1.me_title, match: matchType.match });
        this.matchMap.set('????????????', { action: me_titleRandom_1.me_titleRandom, match: matchType.match });
        this.matchMap.set('????????????', { action: shop_skill_buy_1.shop_skill_buy, match: matchType.all });
        this.matchMap.set('????????????', { action: shop_back_buy_1.shop_back_buy, match: matchType.all });
        this.matchMap.set('????????????', { action: shop_icon_1.shop_icon, match: matchType.all });
        this.matchMap.set('????????????', { action: shop_icon_buy_1.shop_icon_buy, match: matchType.all });
        this.matchMap.set('????????????', { action: emojiMenu_1.emojiMenu, match: matchType.all });
        this.matchMap.set('????????????', { action: shop_showStyle_1.shop_showStyle, match: matchType.all });
        this.matchMap.set('????????????', { action: shop_showStyle_buy_1.shop_showStyle_buy, match: matchType.all });
        this.matchMap.set('????????????', { action: me_skill_1.me_skill, match: matchType.all });
        this.matchMap.set('????????????', { action: me_pet_1.me_pet, match: matchType.all });
        this.matchMap.set('????????????', { action: me_lookPet_1.me_lookPet, match: matchType.match });
        this.matchMap.set('????????????', { action: me_petChangeName_1.me_petChangeName, match: matchType.match });
        this.matchMap.set('????????????', { action: me_petRm_1.me_petRm, match: matchType.match });
        this.matchMap.set('????????????', { action: me_ancestry_1.me_ancestry, match: matchType.match });
        this.matchMap.set('????????????', { action: randomAncestry_1.randomAncestry, match: matchType.all });
        this.matchMap.set('????????????', { action: rank_1.rank, match: matchType.all });
        this.matchMap.set('????????????', { action: me_team_1.me_team, match: matchType.all });
        this.matchMap.set('????????????', { action: creator_team_1.creator_team, match: matchType.match });
        this.matchMap.set('????????????', { action: dismiss_team_1.dismiss_team, match: matchType.all });
        this.matchMap.set('????????????', { action: changeName_team_1.changeName_team, match: matchType.match });
        this.matchMap.set('????????????', { action: userList_team_1.userList_team, match: matchType.all });
        this.matchMap.set('???????????????', { action: creatorJoinCode_team_1.creatorJoinCode_team, match: matchType.all });
        this.matchMap.set('????????????', { action: join_team_1.join_team, match: matchType.match });
        this.matchMap.set('????????????', { action: out_team_1.out_team, match: matchType.all });
        this.matchMap.set('????????????', { action: Kickout_team_1.kickout_team, match: matchType.match });
        this.matchMap.set('????????????', { action: shop_team_1.shop_team, match: matchType.all });
        this.matchMap.set('????????????', { action: shop_team_buy_1.shop_team_buy, match: matchType.all });
        this.matchMap.set('PK', { action: pk_1.pk, match: matchType.match });
        this.matchMap.set('??????boss', { action: attackBoss_1.attackBoss, match: matchType.match });
        this.matchMap.set('??????', { action: docile_1.docile, match: matchType.match });
        this.matchMap.set('?????????', { action: auction_look_1.auction_look, match: matchType.all });
        this.matchMap.set(`??????`, { action: auction_1.auction, match: matchType.match });
        this.matchMap.set(`??????`, { action: auction_offer_1.auction_offer, match: matchType.match });
        this.matchMap.set('??????', { action: store_look_1.store_look, match: matchType.all });
        this.matchMap.set('???', { action: store_get_1.store_get, match: matchType.match });
        this.matchMap.set('?????????', { action: store_save_equip_1.store_save_equip, match: matchType.match });
        this.matchMap.set('?????????', { action: me_wearEquip_1.me_wearEquip, match: matchType.match });
        this.matchMap.set('??????', { action: fishing_1.fishing, match: matchType.all });
        this.matchMap.set('????????????', { action: shop_back_1.shop_back, match: matchType.all });
        this.matchMap.set('????????????', { action: shop_rankscore_1.shop_rankscore, match: matchType.all });
        this.matchMap.set('????????????', { action: shop_rankscore_buy_1.shop_rankscore_buy, match: matchType.all });
        this.matchMap.set('??????', { action: me_sign_1.default, match: matchType.all });
        this.matchMap.set('??????', { action: me_attribute_1.me_attribute, match: matchType.all });
        // this.matchMap.set('??????', { action: battleTest, match: matchType.all })
        this.matchMap.set('??????', { action: me_pos_1.me_pos, match: matchType.all });
        this.matchMap.set('??????', { action: me_changeName_1.me_changeName, match: matchType.match });
        this.matchMap.set('??????', { action: me_wallet_1.me_wallet, match: matchType.match });
        this.matchMap.set('??????', { action: me_resLife_1.me_resLife, match: matchType.all });
        this.matchMap.set('??????', { action: me_resLife_1.me_resLife, match: matchType.all });
        this.matchMap.set('??????', { action: me_bag_1.me_bag, match: matchType.all });
        this.matchMap.set('??????', { action: down_wearEquip_1.down_wearEquip, match: matchType.match });
        // ????????????
        this.matchMap.set('??????', { action: setUp_1.setUp, match: matchType.match, isShowMatch: true });
        this.matchMap.set('????????????????????????', { action: setUp_1.setUp, match: matchType.match, isShowMatch: false });
        this.matchMap.set('????????????????????????', { action: setUp_1.setUp, match: matchType.match, isShowMatch: false });
        this.matchMap.set('???????????????????????????', { action: setUp_1.setUp, match: matchType.match, isShowMatch: false });
        this.matchMap.set('????????????????????????', { action: setUp_1.setUp, match: matchType.match, isShowMatch: false });
        this.matchMap.set('????????????????????????', { action: setUp_1.setUp, match: matchType.match, isShowMatch: false });
        this.matchMap.set('???????????????????????????', { action: setUp_1.setUp, match: matchType.match, isShowMatch: false });
        this.matchMap.set('????????????????????????', { action: setUp_1.setUp, match: matchType.match, isShowMatch: false });
        this.matchMap.set('???????????????????????????', { action: setUp_1.setUp, match: matchType.match, isShowMatch: false });
        this.matchMap.set('??????', { action: me_saveUser_1.me_saveUser, match: matchType.all });
        this.matchMap.set('??????', { action: strengthen_wearEquip_1.strengthen_wearEquip, match: matchType.match });
        this.matchMap.set('??????', { action: me_callPos_1.me_callPos, match: matchType.match });
        this.matchMap.set('???', { action: me_move_1.me_move, match: matchType.all });
        this.matchMap.set('???', { action: me_move_1.me_move, match: matchType.all });
        this.matchMap.set('???', { action: me_move_1.me_move, match: matchType.all });
        this.matchMap.set('???', { action: me_move_1.me_move, match: matchType.all });
    }
    start() {
        bot_1.default.setOnMsg_at((data) => this.atBot(data));
        // this.updateCode()
    }
    /**
     * // ????????????
     * ???????????????????????????
     */
    atBot(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // return
            if (!sever_1.default.isReady()) {
                let temp = ``;
                temp += `<emoji:147>????????????????????????????????????,??????????????????`;
                yield bot_1.default.sendText(data.channel_id, temp);
                yield sever_1.default.HelloWorld();
                return;
            }
            if (data.content == '???') {
                yield bot_1.default.sendText(data.channel_id, data.guild_id);
                return;
            }
            if (data.content == '??????ID') {
                yield bot_1.default.sendText(data.channel_id, data.channel_id);
                return;
            }
            if (data.content == '??????ID' || data.content == '??????id') {
                yield bot_1.default.sendText(data.channel_id, data.author.id);
                return;
            }
            if (data.channel_id == '9128934') {
                return;
            }
            // if (data.content) {
            //     log('??????')
            //     for (let index = 0; index < 20; index++) {
            //         await bot.sendText(data.channel_id, `??????/??????`)
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
            // if (data.guild_id != '9398930356848575724') {
            //     bot.sendText(data.channel_id, `???????????????????????????????????????`)
            //     return;
            // }
            const userId = data.author.id;
            const userIcon = data.author.avatar;
            const fromChannel = data.channel_id;
            const userName = data.author.username;
            const lastContent = this.contentMap.get(userId);
            const guild = data.guild_id;
            if (this.speedLockMap.has(userId)) {
                let lastSendTime = this.speedLockMap.get(userId);
                if (Date.now() - lastSendTime <= 300) {
                    bot_1.default.sendText(fromChannel, `???????????????????????????,?????????2???`);
                    return;
                }
            }
            this.speedLockMap.set(userId, Date.now());
            let content = data.content;
            if (content == '??????') {
                if (this.repeState.has(userId)) {
                    content = lastContent || '??????';
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
            // ????????????
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
                let temp = `???????????????<emoji:318>????????????????????????????\n`;
                if (matchList[0].match == 0) {
                    for (let index = 0; index < 15; index++) {
                        temp += `@${bot_1.default.getBot_name()}  ${matchList[index].key}\n`;
                    }
                }
                else {
                    for (let index = 0; index < 15; index++) {
                        if (matchList[index].match > 0) {
                            temp += `@${bot_1.default.getBot_name()}  ${matchList[index].key}\n`;
                        }
                    }
                }
                temp += `??????????????????????????????????????????`;
                yield bot_1.default.sendText(data.channel_id, temp);
            }
        });
    }
}
exports.default = game;
