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
import { strengthen_wearEquip } from './me/equip/strengthen_wearEquip';
import { me_skill } from './me/me_skill';
import { shop_skill_buy } from './shop/shop_skill_buy';
import { shop_skill } from './shop/shop_skill';
import { shop_equip_buy } from './shop/shop_equip_buy';
import { shop_equip } from './shop/shop_equip';
import { me_destroyBagEquip } from './me/equip/me_destroyBagEquip';
import { me_wearEquip } from './me/equip/me_wearEquip';
import { me_lookBag } from './me/equip/me_lookBag';
import { me_bag } from './me/equip/me_bag';
import { me_resLife } from './me/me_resLife';
import { me_changeName } from './me/me_changeName';
import { me_wallet } from './me/me_wallet';
import { pos_attackPlayer } from './battle/pos_attackPlayer';
import { me_move } from './map/me_move';
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
import { me_equip } from './me/equip/me_equip';
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
import { rank_MinGame_horse_die } from './rank/rank_MinGame_horse_die';
import { challenge_infinite } from './challenge/challenge_infinite';
import { rank_Challenge_infinite } from './rank/rank_Challenge_infinite';
import { challenge_greed } from './challenge/challenge_greed';
import { me_saveUser } from './me/me_saveUser';
import botCfg from '../botCfg';
import { strengthen_bagEquip } from './me/equip/strengthen_bagEquip';
import { down_wearEquip } from './me/equip/down_wearEquip';
import { sendImage } from '../unity/sendLocaImage';
import { title_randomStyle } from './me/title/title_randomStyle';
import { shop_showStyle } from './shop/shop_showStyle';
import { shop_showStyle_buy } from './shop/shop_showStyle_buy';
import { randomSkill_wearEquip } from './me/equip/randomSkill_wearEquip';


enum matchType {
    /**
     * ????????????????????????
     */
    all,
    /**
     * ??????????????????
     */
    match
}


export default class game {
    /**
     * ???????????????????????????
     */

    matchMap: Map<string, {
        /**
         * ??????
         */
        action: any,
        /**
         * ????????????
         */
        match: matchType,
        /**
         * ??????????????????????????????
         */
        isShowMatch?: boolean
    }>
    /**
     * ????????????????????????
     */
    contentMap: Map<string, string>
    /**
     * ????????????
     */
    repeState: Map<string, boolean>


    /**
         * speedLock Map
         * ??????????????????
         */
    speedLockMap: Map<string, number>
    constructor() {
        this.speedLockMap = new Map();
        this.repeState = new Map();
        this.matchMap = new Map();
        this.contentMap = new Map()
        this.initRankKey();
        this.initKeyMap();
        this.start();
        setTimeout(() => {
            process.exit()
        }, 10800000);
    }
    private initRankKey() {
        this.matchMap.set(`???????????????`, { action: rank_strengthen, match: matchType.all })
        this.matchMap.set(`???????????????`, { action: rank_MagicAttack, match: matchType.all })
        this.matchMap.set(`???????????????`, { action: rank_MagicDefense, match: matchType.all })
        this.matchMap.set(`???????????????`, { action: rank_PhysicalAttacks, match: matchType.all })
        this.matchMap.set(`???????????????`, { action: rank_PhysicalDefense, match: matchType.all })
        this.matchMap.set(`???????????????`, { action: rank_sign, match: matchType.all })
        this.matchMap.set(`???????????????`, { action: rank_evil, match: matchType.all })
        this.matchMap.set(`???????????????`, { action: rank_justice, match: matchType.all })
        this.matchMap.set(`???????????????`, { action: rank_ancestry, match: matchType.all })
        this.matchMap.set(`???????????????`, { action: rank_military, match: matchType.all })
        this.matchMap.set(`?????????????????????`, { action: rank_military_pet, match: matchType.all })
        this.matchMap.set(`????????????????????????`, { action: rank_MinGame_horse_die, match: matchType.all })
        this.matchMap.set(`???????????????`, { action: rank_leve, match: matchType.all })
        this.matchMap.set(`??????????????????`, { action: rank_dnaLv, match: matchType.all })
        this.matchMap.set(`???????????????`, { action: rank_rankscore, match: matchType.all })
        this.matchMap.set(`???????????????`, { action: rank_gold, match: matchType.all })
        this.matchMap.set(`?????????????????????`, { action: rank_petCont, match: matchType.all })
        this.matchMap.set(`?????????????????????`, { action: rank_petLeve, match: matchType.all })
        this.matchMap.set(`?????????????????????`, { action: rank_teamLv, match: matchType.all })
        this.matchMap.set(`?????????????????????`, { action: rank_titleAttr, match: matchType.all })
        this.matchMap.set(`?????????????????????`, { action: rank_titleCont, match: matchType.all })
        this.matchMap.set(`???????????????`, { action: rank_MinGame_lottery_cont, match: matchType.all })
        this.matchMap.set(`?????????????????????`, { action: rank_MinGame_lottery_win, match: matchType.all })
        this.matchMap.set(`????????????????????????`, { action: rank_MinGame_horse_win, match: matchType.all })
        this.matchMap.set(`????????????????????????`, { action: rank_MinGame_horse_cont, match: matchType.all })
        this.matchMap.set(`?????????????????????`, { action: rank_teamContribute, match: matchType.all })
        this.matchMap.set(`???????????????`, { action: rank_hp, match: matchType.all })
        this.matchMap.set(`?????????????????????`, { action: rank_Challenge_infinite, match: matchType.all })

    }
    private initKeyMap() {
        /**
        * ?????????????????????
        */
        //    emojiMenu
        this.matchMap.set('??????', { action: randomSkill_wearEquip, match: matchType.match })
        this.matchMap.set(`??????????????????`, { action: title_randomStyle, match: matchType.match })
        this.matchMap.set(`????????????`, { action: challenge_greed, match: matchType.match })
        this.matchMap.set(`???????????????`, { action: horse_look, match: matchType.all })
        this.matchMap.set(`??????`, { action: horse_join, match: matchType.match })
        this.matchMap.set(`????????????`, { action: me_vip, match: matchType.all })
        this.matchMap.set('??????', { action: me_Reread, match: matchType.all })
        this.matchMap.set('??????', { action: sys_update_code, match: matchType.all })

        this.matchMap.set(`?????????`, { action: rank_menu, match: matchType.all })
        this.matchMap.set('?????????', { action: auction_look, match: matchType.all })
        this.matchMap.set(`??????`, { action: lottery, match: matchType.match })
        this.matchMap.set('????????????', { action: challenge_image, match: matchType.match })
        this.matchMap.set('????????????', { action: challenge_hit, match: matchType.match })
        this.matchMap.set('????????????', { action: challenge_power, match: matchType.match })
        this.matchMap.set('????????????', { action: challenge_infinite, match: matchType.match })
        this.matchMap.set('????????????', { action: challenge_downUser, match: matchType.match })
        this.matchMap.set('????????????', { action: challenge_box, match: matchType.match })
        this.matchMap.set('????????????', { action: soaringTask, match: matchType.all })
        this.matchMap.set('????????????', { action: everDayTask, match: matchType.all })
        this.matchMap.set('????????????', { action: newUserTask, match: matchType.all })
        this.matchMap.set('??????', { action: me_AutoPlay, match: matchType.match })
        this.matchMap.set('??????????????????', { action: pos_attackEnemy, match: matchType.match })
        this.matchMap.set('??????????????????', { action: me_lookBag, match: matchType.match })
        this.matchMap.set('??????????????????', { action: strengthen_bagEquip, match: matchType.match })
        this.matchMap.set('??????????????????', { action: me_destroyBagEquip, match: matchType.all })
        this.matchMap.set('??????', { action: addOneWord, match: matchType.match })
        this.matchMap.set('????????????', { action: pos_attackPlayer, match: matchType.match })
        this.matchMap.set('????????????', { action: pos_attackEnemy, match: matchType.match })
        this.matchMap.set('????????????', { action: baseTaskMenu, match: matchType.match })
        this.matchMap.set('????????????', { action: openMapChestBox, match: matchType.match })
        this.matchMap.set('??????????????????', { action: openMapChestBox_all, match: matchType.all })
        this.matchMap.set('????????????', { action: me_openBlindBox, match: matchType.match })
        this.matchMap.set('????????????', { action: searchSkill, match: matchType.match })
        this.matchMap.set('????????????', { action: me_equip, match: matchType.all })
        this.matchMap.set('????????????', { action: me_destroyMeSkill, match: matchType.match })
        this.matchMap.set('????????????', { action: me_destroyBagEquip, match: matchType.match })
        this.matchMap.set('????????????', { action: shop_equip, match: matchType.all })
        this.matchMap.set('????????????', { action: shop_equip_buy, match: matchType.all })
        this.matchMap.set('????????????', { action: shop_skill, match: matchType.all })
        this.matchMap.set('????????????', { action: me_title, match: matchType.match })
        this.matchMap.set('????????????', { action: me_titleRandom, match: matchType.match })
        this.matchMap.set('????????????', { action: shop_skill_buy, match: matchType.all })
        this.matchMap.set('????????????', { action: shop_back_buy, match: matchType.all })
        this.matchMap.set('????????????', { action: shop_icon, match: matchType.all })
        this.matchMap.set('????????????', { action: shop_icon_buy, match: matchType.all })
        this.matchMap.set('????????????', { action: emojiMenu, match: matchType.all })
        this.matchMap.set('????????????', { action: shop_showStyle, match: matchType.all })
        this.matchMap.set('????????????', { action: shop_showStyle_buy, match: matchType.all })

        this.matchMap.set('????????????', { action: me_skill, match: matchType.all })
        this.matchMap.set('????????????', { action: me_pet, match: matchType.all })
        this.matchMap.set('????????????', { action: me_lookPet, match: matchType.match })
        this.matchMap.set('????????????', { action: me_petChangeName, match: matchType.match })
        this.matchMap.set('????????????', { action: me_petRm, match: matchType.match })
        this.matchMap.set('????????????', { action: me_ancestry, match: matchType.match })
        this.matchMap.set('????????????', { action: randomAncestry, match: matchType.all })
        this.matchMap.set('????????????', { action: rank, match: matchType.all })
        this.matchMap.set('????????????', { action: me_team, match: matchType.all })
        this.matchMap.set('????????????', { action: creator_team, match: matchType.match })
        this.matchMap.set('????????????', { action: dismiss_team, match: matchType.all })
        this.matchMap.set('????????????', { action: changeName_team, match: matchType.match })
        this.matchMap.set('????????????', { action: userList_team, match: matchType.all })
        this.matchMap.set('???????????????', { action: creatorJoinCode_team, match: matchType.all })
        this.matchMap.set('????????????', { action: join_team, match: matchType.match })
        this.matchMap.set('????????????', { action: out_team, match: matchType.all })
        this.matchMap.set('????????????', { action: kickout_team, match: matchType.match })
        this.matchMap.set('????????????', { action: shop_team, match: matchType.all })
        this.matchMap.set('????????????', { action: shop_team_buy, match: matchType.all })
        this.matchMap.set('PK', { action: pk, match: matchType.match })
        this.matchMap.set('??????boss', { action: attackBoss, match: matchType.match })
        this.matchMap.set('??????', { action: docile, match: matchType.match })
        this.matchMap.set('?????????', { action: auction_look, match: matchType.all })
        this.matchMap.set(`??????`, { action: auction, match: matchType.match })
        this.matchMap.set(`??????`, { action: auction_offer, match: matchType.match })
        this.matchMap.set('??????', { action: store_look, match: matchType.all })
        this.matchMap.set('???', { action: store_get, match: matchType.match })
        this.matchMap.set('?????????', { action: store_save_equip, match: matchType.match })
        this.matchMap.set('?????????', { action: me_wearEquip, match: matchType.match })
        this.matchMap.set('??????', { action: fishing, match: matchType.all })
        this.matchMap.set('????????????', { action: shop_back, match: matchType.all })
        this.matchMap.set('????????????', { action: shop_rankscore, match: matchType.all })
        this.matchMap.set('????????????', { action: shop_rankscore_buy, match: matchType.all })
        this.matchMap.set('??????', { action: me_sign, match: matchType.all })
        this.matchMap.set('??????', { action: me_attribute, match: matchType.all })
        // this.matchMap.set('??????', { action: battleTest, match: matchType.all })
        this.matchMap.set('??????', { action: me_pos, match: matchType.all })
        this.matchMap.set('??????', { action: me_changeName, match: matchType.match })
        this.matchMap.set('??????', { action: me_wallet, match: matchType.match })
        this.matchMap.set('??????', { action: me_resLife, match: matchType.all })
        this.matchMap.set('??????', { action: me_resLife, match: matchType.all })
        this.matchMap.set('??????', { action: me_bag, match: matchType.all })
        this.matchMap.set('??????', { action: down_wearEquip, match: matchType.match })
        // ????????????
        this.matchMap.set('??????', { action: setUp, match: matchType.match, isShowMatch: true })
        this.matchMap.set('????????????????????????', { action: setUp, match: matchType.match, isShowMatch: false })
        this.matchMap.set('????????????????????????', { action: setUp, match: matchType.match, isShowMatch: false })
        this.matchMap.set('???????????????????????????', { action: setUp, match: matchType.match, isShowMatch: false })
        this.matchMap.set('????????????????????????', { action: setUp, match: matchType.match, isShowMatch: false })
        this.matchMap.set('????????????????????????', { action: setUp, match: matchType.match, isShowMatch: false })
        this.matchMap.set('???????????????????????????', { action: setUp, match: matchType.match, isShowMatch: false })
        this.matchMap.set('????????????????????????', { action: setUp, match: matchType.match, isShowMatch: false })
        this.matchMap.set('???????????????????????????', { action: setUp, match: matchType.match, isShowMatch: false })
        this.matchMap.set('??????', { action: me_saveUser, match: matchType.all })
        this.matchMap.set('??????', { action: strengthen_wearEquip, match: matchType.match })
        this.matchMap.set('??????', { action: me_callPos, match: matchType.match })
        this.matchMap.set('???', { action: me_move, match: matchType.all })
        this.matchMap.set('???', { action: me_move, match: matchType.all })
        this.matchMap.set('???', { action: me_move, match: matchType.all })
        this.matchMap.set('???', { action: me_move, match: matchType.all })

    }
    start() {
        bot.setOnMsg_at((data: BOT_MSG_AT) => this.atBot(data))
        // this.updateCode()

    }
    /**
     * // ????????????
     * ???????????????????????????
     */
    async atBot(data: BOT_MSG_AT) {
        // return
        if (!sever.isReady()) {
            let temp = ``;
            temp += `<emoji:147>????????????????????????????????????,??????????????????`
            await bot.sendText(data.channel_id, temp);
            await sever.HelloWorld()
            return;
        }
        if (data.content == '???') {
            await bot.sendText(data.channel_id, data.guild_id);
            return
        }
        if (data.content == '??????ID') {
            await bot.sendText(data.channel_id, data.channel_id);
            return
        }
        if (data.content == '??????ID' || data.content == '??????id') {
            await bot.sendText(data.channel_id, data.author.id)
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
            let lastSendTime = this.speedLockMap.get(userId) as number;
            if (Date.now() - lastSendTime <= 300) {

                bot.sendText(fromChannel, `???????????????????????????,?????????2???`)
                return;
            }
        }
        this.speedLockMap.set(userId, Date.now())

        let content = data.content;
        if (content == '??????') {
            if (this.repeState.has(userId)) {
                content = lastContent || '??????';
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
        // ????????????
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
            let temp = `???????????????<emoji:318>????????????????????????????\n`;
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

            temp += `??????????????????????????????????????????`

            await bot.sendText(data.channel_id, temp)
        }


    }
    // ???????????????????????????
    //    update() {
    //        log('update')
    //    }
}
