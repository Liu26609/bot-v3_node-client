import { ServiceProto } from 'tsrpc-proto';
import { ReqMe_Ancestry, ResMe_Ancestry } from './ancestry/PtlMe_Ancestry';
import { ReqMe_randomAncestry, ResMe_randomAncestry } from './ancestry/PtlMe_randomAncestry';
import { ReqAuction_look, ResAuction_look } from './auction/PtlAuction_look';
import { ReqAuction_offer, ResAuction_offer } from './auction/PtlAuction_offer';
import { ReqAuction, ResAuction } from './auction/PtlAuction';
import { ReqAttackBoss, ResAttackBoss } from './battle/PtlAttackBoss';
import { ReqChallenge_box, ResChallenge_box } from './battle/PtlChallenge_box';
import { ReqChallenge_image, ResChallenge_image } from './battle/PtlChallenge_image';
import { ReqPkRank, ResPkRank } from './battle/PtlPkRank';
import { ReqPosAttackEnemy, ResPosAttackEnemy } from './battle/PtlPosAttackEnemy';
import { ReqPosAttackPlayer, ResPosAttackPlayer } from './battle/PtlPosAttackPlayer';
import { ReqRank, ResRank } from './battle/PtlRank';
import { ReqDocile, ResDocile } from './map/PtlDocile';
import { Reqfishing, Resfishing } from './map/Ptlfishing';
import { ReqOpenMapChestBox, ResOpenMapChestBox } from './map/PtlOpenMapChestBox';
import { ReqMe_title_changeName, ResMe_title_changeName } from './me/title/PtlMe_title_changeName';
import { ReqMe_titleRandom, ResMe_titleRandom } from './me/title/PtlMe_titleRandom';
import { ReqMinGame_lottery, ResMinGame_lottery } from './minGame/PtlMinGame_lottery';
import { MsgCallAll } from './MsgCallAll';
import { MsgCallAppoint } from './MsgCallAppoint';
import { ReqMe_pet, ResMe_pet } from './pet/PtlMe_pet';
import { ReqMe_petChangeName, ResMe_petChangeName } from './pet/PtlMe_petChangeName';
import { ReqMe_petLook, ResMe_petLook } from './pet/PtlMe_petLook';
import { ReqMe_petRm, ResMe_petRm } from './pet/PtlMe_petRm';
import { ReqAddOneWord, ResAddOneWord } from './PtlAddOneWord';
import { ReqBag, ResBag } from './PtlBag';
import { ReqBattle, ResBattle } from './PtlBattle';
import { ReqGetUserSetUp, ResGetUserSetUp } from './PtlGetUserSetUp';
import { ReqHello, ResHello } from './PtlHello';
import { ReqMe_Attribute, ResMe_Attribute } from './PtlMe_Attribute';
import { ReqMe_callPos, ResMe_callPos } from './PtlMe_callPos';
import { ReqMe_changeName, ResMe_changeName } from './PtlMe_changeName';
import { ReqMe_destroyBagEquip, ResMe_destroyBagEquip } from './PtlMe_destroyBagEquip';
import { ReqMe_destroyMeSkill, ResMe_destroyMeSkill } from './PtlMe_destroyMeSkill';
import { ReqMe_equip, ResMe_equip } from './PtlMe_equip';
import { ReqMe_lookBag, ResMe_lookBag } from './PtlMe_lookBag';
import { ReqMe_openBlindBox, ResMe_openBlindBox } from './PtlMe_openBlindBox';
import { ReqMe_setUp, ResMe_setUp } from './PtlMe_setUp';
import { ReqMe_skill, ResMe_skill } from './PtlMe_skill';
import { ReqMe_strengthen, ResMe_strengthen } from './PtlMe_strengthen';
import { ReqMe_title, ResMe_title } from './PtlMe_title';
import { ReqMe_wallet, ResMe_wallet } from './PtlMe_wallet';
import { ReqMe_wearEquip, ResMe_wearEquip } from './PtlMe_wearEquip';
import { ReqMove, ResMove } from './PtlMove';
import { ReqPos, ResPos } from './PtlPos';
import { ReqResLife, ResResLife } from './PtlResLife';
import { ReqSearchSkill, ResSearchSkill } from './PtlSearchSkill';
import { ReqSign, ResSign } from './PtlSign';
import { ReqRank_ancestry, ResRank_ancestry } from './rank/PtlRank_ancestry';
import { ReqRank_dnaLv, ResRank_dnaLv } from './rank/PtlRank_dnaLv';
import { ReqRank_gold, ResRank_gold } from './rank/PtlRank_gold';
import { ReqRank_leve, ResRank_leve } from './rank/PtlRank_leve';
import { ReqRank_military_pet, ResRank_military_pet } from './rank/PtlRank_military_pet';
import { ReqRank_military, ResRank_military } from './rank/PtlRank_military';
import { ReqRank_minGame_lottery_cont, ResRank_minGame_lottery_cont } from './rank/PtlRank_minGame_lottery_cont';
import { ReqRank_minGame_lottery_win, ResRank_minGame_lottery_win } from './rank/PtlRank_minGame_lottery_win';
import { ReqRank_petCont, ResRank_petCont } from './rank/PtlRank_petCont';
import { ReqRank_petLv, ResRank_petLv } from './rank/PtlRank_petLv';
import { ReqRank_rankscore, ResRank_rankscore } from './rank/PtlRank_rankscore';
import { ReqRank_sign, ResRank_sign } from './rank/PtlRank_sign';
import { ReqRank_strengthen, ResRank_strengthen } from './rank/PtlRank_strengthen';
import { ReqRank_team, ResRank_team } from './rank/PtlRank_team';
import { ReqRank_titleAttr, ResRank_titleAttr } from './rank/PtlRank_titleAttr';
import { ReqRank_titleCont, ResRank_titleCont } from './rank/PtlRank_titleCont';
import { ReqShop_back_buy, ResShop_back_buy } from './shop/PtlShop_back_buy';
import { ReqShop_back, ResShop_back } from './shop/PtlShop_back';
import { ReqShop_equip_buy, ResShop_equip_buy } from './shop/PtlShop_equip_buy';
import { ReqShop_equip, ResShop_equip } from './shop/PtlShop_equip';
import { ReqShop_icon_buy, ResShop_icon_buy } from './shop/PtlShop_icon_buy';
import { ReqShop_icon, ResShop_icon } from './shop/PtlShop_icon';
import { ReqShop_skill_buy, ResShop_skill_buy } from './shop/PtlShop_skill_buy';
import { ReqShop_skill, ResShop_skill } from './shop/PtlShop_skill';
import { ReqShop_team_buy, ResShop_team_buy } from './shop/PtlShop_team_buy';
import { ReqShop_team, ResShop_team } from './shop/PtlShop_team';
import { ReqEverDayTask, ResEverDayTask } from './task/PtlEverDayTask';
import { ReqsoaringTask, RessoaringTask } from './task/PtlsoaringTask';
import { ReqChangeName_team, ResChangeName_team } from './team/PtlChangeName_team';
import { ReqCreator_team, ResCreator_team } from './team/PtlCreator_team';
import { ReqCreatorJoinCode_team, ResCreatorJoinCode_team } from './team/PtlCreatorJoinCode_team';
import { ReqDismiss_team, ResDismiss_team } from './team/PtlDismiss_team';
import { ReqJoin_team, ResJoin_team } from './team/PtlJoin_team';
import { ReqKicOut_team, ResKicOut_team } from './team/PtlKicOut_team';
import { ReqMe_team, ResMe_team } from './team/PtlMe_team';
import { ReqOut_team, ResOut_team } from './team/PtlOut_team';
import { ReqUserList, ResUserList } from './team/PtlUserList';

export interface ServiceType {
    api: {
        "ancestry/Me_Ancestry": {
            req: ReqMe_Ancestry,
            res: ResMe_Ancestry
        },
        "ancestry/Me_randomAncestry": {
            req: ReqMe_randomAncestry,
            res: ResMe_randomAncestry
        },
        "auction/Auction_look": {
            req: ReqAuction_look,
            res: ResAuction_look
        },
        "auction/Auction_offer": {
            req: ReqAuction_offer,
            res: ResAuction_offer
        },
        "auction/Auction": {
            req: ReqAuction,
            res: ResAuction
        },
        "battle/AttackBoss": {
            req: ReqAttackBoss,
            res: ResAttackBoss
        },
        "battle/Challenge_box": {
            req: ReqChallenge_box,
            res: ResChallenge_box
        },
        "battle/Challenge_image": {
            req: ReqChallenge_image,
            res: ResChallenge_image
        },
        "battle/PkRank": {
            req: ReqPkRank,
            res: ResPkRank
        },
        "battle/PosAttackEnemy": {
            req: ReqPosAttackEnemy,
            res: ResPosAttackEnemy
        },
        "battle/PosAttackPlayer": {
            req: ReqPosAttackPlayer,
            res: ResPosAttackPlayer
        },
        "battle/Rank": {
            req: ReqRank,
            res: ResRank
        },
        "map/Docile": {
            req: ReqDocile,
            res: ResDocile
        },
        "map/fishing": {
            req: Reqfishing,
            res: Resfishing
        },
        "map/OpenMapChestBox": {
            req: ReqOpenMapChestBox,
            res: ResOpenMapChestBox
        },
        "me/title/Me_title_changeName": {
            req: ReqMe_title_changeName,
            res: ResMe_title_changeName
        },
        "me/title/Me_titleRandom": {
            req: ReqMe_titleRandom,
            res: ResMe_titleRandom
        },
        "minGame/MinGame_lottery": {
            req: ReqMinGame_lottery,
            res: ResMinGame_lottery
        },
        "pet/Me_pet": {
            req: ReqMe_pet,
            res: ResMe_pet
        },
        "pet/Me_petChangeName": {
            req: ReqMe_petChangeName,
            res: ResMe_petChangeName
        },
        "pet/Me_petLook": {
            req: ReqMe_petLook,
            res: ResMe_petLook
        },
        "pet/Me_petRm": {
            req: ReqMe_petRm,
            res: ResMe_petRm
        },
        "AddOneWord": {
            req: ReqAddOneWord,
            res: ResAddOneWord
        },
        "Bag": {
            req: ReqBag,
            res: ResBag
        },
        "Battle": {
            req: ReqBattle,
            res: ResBattle
        },
        "GetUserSetUp": {
            req: ReqGetUserSetUp,
            res: ResGetUserSetUp
        },
        "Hello": {
            req: ReqHello,
            res: ResHello
        },
        "Me_Attribute": {
            req: ReqMe_Attribute,
            res: ResMe_Attribute
        },
        "Me_callPos": {
            req: ReqMe_callPos,
            res: ResMe_callPos
        },
        "Me_changeName": {
            req: ReqMe_changeName,
            res: ResMe_changeName
        },
        "Me_destroyBagEquip": {
            req: ReqMe_destroyBagEquip,
            res: ResMe_destroyBagEquip
        },
        "Me_destroyMeSkill": {
            req: ReqMe_destroyMeSkill,
            res: ResMe_destroyMeSkill
        },
        "Me_equip": {
            req: ReqMe_equip,
            res: ResMe_equip
        },
        "Me_lookBag": {
            req: ReqMe_lookBag,
            res: ResMe_lookBag
        },
        "Me_openBlindBox": {
            req: ReqMe_openBlindBox,
            res: ResMe_openBlindBox
        },
        "Me_setUp": {
            req: ReqMe_setUp,
            res: ResMe_setUp
        },
        "Me_skill": {
            req: ReqMe_skill,
            res: ResMe_skill
        },
        "Me_strengthen": {
            req: ReqMe_strengthen,
            res: ResMe_strengthen
        },
        "Me_title": {
            req: ReqMe_title,
            res: ResMe_title
        },
        "Me_wallet": {
            req: ReqMe_wallet,
            res: ResMe_wallet
        },
        "Me_wearEquip": {
            req: ReqMe_wearEquip,
            res: ResMe_wearEquip
        },
        "Move": {
            req: ReqMove,
            res: ResMove
        },
        "Pos": {
            req: ReqPos,
            res: ResPos
        },
        "ResLife": {
            req: ReqResLife,
            res: ResResLife
        },
        "SearchSkill": {
            req: ReqSearchSkill,
            res: ResSearchSkill
        },
        "Sign": {
            req: ReqSign,
            res: ResSign
        },
        "rank/Rank_ancestry": {
            req: ReqRank_ancestry,
            res: ResRank_ancestry
        },
        "rank/Rank_dnaLv": {
            req: ReqRank_dnaLv,
            res: ResRank_dnaLv
        },
        "rank/Rank_gold": {
            req: ReqRank_gold,
            res: ResRank_gold
        },
        "rank/Rank_leve": {
            req: ReqRank_leve,
            res: ResRank_leve
        },
        "rank/Rank_military_pet": {
            req: ReqRank_military_pet,
            res: ResRank_military_pet
        },
        "rank/Rank_military": {
            req: ReqRank_military,
            res: ResRank_military
        },
        "rank/Rank_minGame_lottery_cont": {
            req: ReqRank_minGame_lottery_cont,
            res: ResRank_minGame_lottery_cont
        },
        "rank/Rank_minGame_lottery_win": {
            req: ReqRank_minGame_lottery_win,
            res: ResRank_minGame_lottery_win
        },
        "rank/Rank_petCont": {
            req: ReqRank_petCont,
            res: ResRank_petCont
        },
        "rank/Rank_petLv": {
            req: ReqRank_petLv,
            res: ResRank_petLv
        },
        "rank/Rank_rankscore": {
            req: ReqRank_rankscore,
            res: ResRank_rankscore
        },
        "rank/Rank_sign": {
            req: ReqRank_sign,
            res: ResRank_sign
        },
        "rank/Rank_strengthen": {
            req: ReqRank_strengthen,
            res: ResRank_strengthen
        },
        "rank/Rank_team": {
            req: ReqRank_team,
            res: ResRank_team
        },
        "rank/Rank_titleAttr": {
            req: ReqRank_titleAttr,
            res: ResRank_titleAttr
        },
        "rank/Rank_titleCont": {
            req: ReqRank_titleCont,
            res: ResRank_titleCont
        },
        "shop/Shop_back_buy": {
            req: ReqShop_back_buy,
            res: ResShop_back_buy
        },
        "shop/Shop_back": {
            req: ReqShop_back,
            res: ResShop_back
        },
        "shop/Shop_equip_buy": {
            req: ReqShop_equip_buy,
            res: ResShop_equip_buy
        },
        "shop/Shop_equip": {
            req: ReqShop_equip,
            res: ResShop_equip
        },
        "shop/Shop_icon_buy": {
            req: ReqShop_icon_buy,
            res: ResShop_icon_buy
        },
        "shop/Shop_icon": {
            req: ReqShop_icon,
            res: ResShop_icon
        },
        "shop/Shop_skill_buy": {
            req: ReqShop_skill_buy,
            res: ResShop_skill_buy
        },
        "shop/Shop_skill": {
            req: ReqShop_skill,
            res: ResShop_skill
        },
        "shop/Shop_team_buy": {
            req: ReqShop_team_buy,
            res: ResShop_team_buy
        },
        "shop/Shop_team": {
            req: ReqShop_team,
            res: ResShop_team
        },
        "task/EverDayTask": {
            req: ReqEverDayTask,
            res: ResEverDayTask
        },
        "task/soaringTask": {
            req: ReqsoaringTask,
            res: RessoaringTask
        },
        "team/ChangeName_team": {
            req: ReqChangeName_team,
            res: ResChangeName_team
        },
        "team/Creator_team": {
            req: ReqCreator_team,
            res: ResCreator_team
        },
        "team/CreatorJoinCode_team": {
            req: ReqCreatorJoinCode_team,
            res: ResCreatorJoinCode_team
        },
        "team/Dismiss_team": {
            req: ReqDismiss_team,
            res: ResDismiss_team
        },
        "team/Join_team": {
            req: ReqJoin_team,
            res: ResJoin_team
        },
        "team/KicOut_team": {
            req: ReqKicOut_team,
            res: ResKicOut_team
        },
        "team/Me_team": {
            req: ReqMe_team,
            res: ResMe_team
        },
        "team/Out_team": {
            req: ReqOut_team,
            res: ResOut_team
        },
        "team/UserList": {
            req: ReqUserList,
            res: ResUserList
        }
    },
    msg: {
        "CallAll": MsgCallAll,
        "CallAppoint": MsgCallAppoint
    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 28,
    "services": [
        {
            "id": 0,
            "name": "ancestry/Me_Ancestry",
            "type": "api"
        },
        {
            "id": 1,
            "name": "ancestry/Me_randomAncestry",
            "type": "api"
        },
        {
            "id": 2,
            "name": "auction/Auction_look",
            "type": "api"
        },
        {
            "id": 3,
            "name": "auction/Auction_offer",
            "type": "api"
        },
        {
            "id": 4,
            "name": "auction/Auction",
            "type": "api"
        },
        {
            "id": 5,
            "name": "battle/AttackBoss",
            "type": "api"
        },
        {
            "id": 83,
            "name": "battle/Challenge_box",
            "type": "api"
        },
        {
            "id": 80,
            "name": "battle/Challenge_image",
            "type": "api"
        },
        {
            "id": 61,
            "name": "battle/PkRank",
            "type": "api"
        },
        {
            "id": 49,
            "name": "battle/PosAttackEnemy",
            "type": "api"
        },
        {
            "id": 84,
            "name": "battle/PosAttackPlayer",
            "type": "api"
        },
        {
            "id": 50,
            "name": "battle/Rank",
            "type": "api"
        },
        {
            "id": 6,
            "name": "map/Docile",
            "type": "api"
        },
        {
            "id": 7,
            "name": "map/fishing",
            "type": "api"
        },
        {
            "id": 8,
            "name": "map/OpenMapChestBox",
            "type": "api"
        },
        {
            "id": 90,
            "name": "me/title/Me_title_changeName",
            "type": "api"
        },
        {
            "id": 93,
            "name": "me/title/Me_titleRandom",
            "type": "api"
        },
        {
            "id": 73,
            "name": "minGame/MinGame_lottery",
            "type": "api"
        },
        {
            "id": 9,
            "name": "CallAll",
            "type": "msg"
        },
        {
            "id": 10,
            "name": "CallAppoint",
            "type": "msg"
        },
        {
            "id": 11,
            "name": "pet/Me_pet",
            "type": "api"
        },
        {
            "id": 12,
            "name": "pet/Me_petChangeName",
            "type": "api"
        },
        {
            "id": 13,
            "name": "pet/Me_petLook",
            "type": "api"
        },
        {
            "id": 14,
            "name": "pet/Me_petRm",
            "type": "api"
        },
        {
            "id": 15,
            "name": "AddOneWord",
            "type": "api"
        },
        {
            "id": 16,
            "name": "Bag",
            "type": "api"
        },
        {
            "id": 17,
            "name": "Battle",
            "type": "api"
        },
        {
            "id": 18,
            "name": "GetUserSetUp",
            "type": "api"
        },
        {
            "id": 19,
            "name": "Hello",
            "type": "api"
        },
        {
            "id": 20,
            "name": "Me_Attribute",
            "type": "api"
        },
        {
            "id": 21,
            "name": "Me_callPos",
            "type": "api"
        },
        {
            "id": 22,
            "name": "Me_changeName",
            "type": "api"
        },
        {
            "id": 23,
            "name": "Me_destroyBagEquip",
            "type": "api"
        },
        {
            "id": 24,
            "name": "Me_destroyMeSkill",
            "type": "api"
        },
        {
            "id": 25,
            "name": "Me_equip",
            "type": "api"
        },
        {
            "id": 26,
            "name": "Me_lookBag",
            "type": "api"
        },
        {
            "id": 27,
            "name": "Me_openBlindBox",
            "type": "api"
        },
        {
            "id": 28,
            "name": "Me_setUp",
            "type": "api"
        },
        {
            "id": 29,
            "name": "Me_skill",
            "type": "api"
        },
        {
            "id": 30,
            "name": "Me_strengthen",
            "type": "api"
        },
        {
            "id": 32,
            "name": "Me_title",
            "type": "api"
        },
        {
            "id": 34,
            "name": "Me_wallet",
            "type": "api"
        },
        {
            "id": 35,
            "name": "Me_wearEquip",
            "type": "api"
        },
        {
            "id": 36,
            "name": "Move",
            "type": "api"
        },
        {
            "id": 37,
            "name": "Pos",
            "type": "api"
        },
        {
            "id": 40,
            "name": "ResLife",
            "type": "api"
        },
        {
            "id": 41,
            "name": "SearchSkill",
            "type": "api"
        },
        {
            "id": 48,
            "name": "Sign",
            "type": "api"
        },
        {
            "id": 91,
            "name": "rank/Rank_ancestry",
            "type": "api"
        },
        {
            "id": 92,
            "name": "rank/Rank_dnaLv",
            "type": "api"
        },
        {
            "id": 85,
            "name": "rank/Rank_gold",
            "type": "api"
        },
        {
            "id": 70,
            "name": "rank/Rank_leve",
            "type": "api"
        },
        {
            "id": 94,
            "name": "rank/Rank_military_pet",
            "type": "api"
        },
        {
            "id": 95,
            "name": "rank/Rank_military",
            "type": "api"
        },
        {
            "id": 81,
            "name": "rank/Rank_minGame_lottery_cont",
            "type": "api"
        },
        {
            "id": 82,
            "name": "rank/Rank_minGame_lottery_win",
            "type": "api"
        },
        {
            "id": 74,
            "name": "rank/Rank_petCont",
            "type": "api"
        },
        {
            "id": 75,
            "name": "rank/Rank_petLv",
            "type": "api"
        },
        {
            "id": 76,
            "name": "rank/Rank_rankscore",
            "type": "api"
        },
        {
            "id": 71,
            "name": "rank/Rank_sign",
            "type": "api"
        },
        {
            "id": 72,
            "name": "rank/Rank_strengthen",
            "type": "api"
        },
        {
            "id": 77,
            "name": "rank/Rank_team",
            "type": "api"
        },
        {
            "id": 78,
            "name": "rank/Rank_titleAttr",
            "type": "api"
        },
        {
            "id": 79,
            "name": "rank/Rank_titleCont",
            "type": "api"
        },
        {
            "id": 63,
            "name": "shop/Shop_back_buy",
            "type": "api"
        },
        {
            "id": 64,
            "name": "shop/Shop_back",
            "type": "api"
        },
        {
            "id": 65,
            "name": "shop/Shop_equip_buy",
            "type": "api"
        },
        {
            "id": 66,
            "name": "shop/Shop_equip",
            "type": "api"
        },
        {
            "id": 89,
            "name": "shop/Shop_icon_buy",
            "type": "api"
        },
        {
            "id": 88,
            "name": "shop/Shop_icon",
            "type": "api"
        },
        {
            "id": 67,
            "name": "shop/Shop_skill_buy",
            "type": "api"
        },
        {
            "id": 68,
            "name": "shop/Shop_skill",
            "type": "api"
        },
        {
            "id": 69,
            "name": "shop/Shop_team_buy",
            "type": "api"
        },
        {
            "id": 60,
            "name": "shop/Shop_team",
            "type": "api"
        },
        {
            "id": 86,
            "name": "task/EverDayTask",
            "type": "api"
        },
        {
            "id": 87,
            "name": "task/soaringTask",
            "type": "api"
        },
        {
            "id": 53,
            "name": "team/ChangeName_team",
            "type": "api"
        },
        {
            "id": 52,
            "name": "team/Creator_team",
            "type": "api"
        },
        {
            "id": 54,
            "name": "team/CreatorJoinCode_team",
            "type": "api"
        },
        {
            "id": 55,
            "name": "team/Dismiss_team",
            "type": "api"
        },
        {
            "id": 57,
            "name": "team/Join_team",
            "type": "api"
        },
        {
            "id": 58,
            "name": "team/KicOut_team",
            "type": "api"
        },
        {
            "id": 51,
            "name": "team/Me_team",
            "type": "api"
        },
        {
            "id": 59,
            "name": "team/Out_team",
            "type": "api"
        },
        {
            "id": 56,
            "name": "team/UserList",
            "type": "api"
        }
    ],
    "types": {
        "ancestry/PtlMe_Ancestry/ReqMe_Ancestry": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "ancestry/PtlMe_Ancestry/ResMe_Ancestry": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "ancestry",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/ancestry"
                    }
                },
                {
                    "id": 1,
                    "name": "SK",
                    "type": {
                        "type": "Reference",
                        "target": "../game/skill/SKILL_ACTIVE"
                    }
                },
                {
                    "id": 2,
                    "name": "info",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "id",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "leve",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 2,
                                "name": "exp",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 3,
                                "name": "exp_max",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "../game/body/ancestry": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "from",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "title",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "leve",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/ancestryLeve"
                    }
                },
                {
                    "id": 3,
                    "name": "base",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/base_attribute"
                    }
                },
                {
                    "id": 4,
                    "name": "skill",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/body/ancestryLeve": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                },
                {
                    "id": 4,
                    "value": 4
                },
                {
                    "id": 5,
                    "value": 5
                },
                {
                    "id": 6,
                    "value": 6
                },
                {
                    "id": 7,
                    "value": 7
                },
                {
                    "id": 8,
                    "value": 8
                },
                {
                    "id": 9,
                    "value": 9
                }
            ]
        },
        "../game/body/base_attribute": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "hp_max",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "MagicAttack",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "PhysicalAttacks",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "MagicDefense",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "PhysicalDefense",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "secondResHp",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/skill/SKILL_ACTIVE": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "tips",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "story",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "type",
                    "type": {
                        "type": "Reference",
                        "target": "../game/skill/SKILL_TYPE"
                    }
                },
                {
                    "id": 5,
                    "name": "speed",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                }
            ]
        },
        "../game/skill/SKILL_TYPE": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                }
            ]
        },
        "ancestry/PtlMe_randomAncestry/ReqMe_randomAncestry": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "ancestry/PtlMe_randomAncestry/ResMe_randomAncestry": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "ancestry",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/ancestry"
                    }
                },
                {
                    "id": 1,
                    "name": "SK",
                    "type": {
                        "type": "Reference",
                        "target": "../game/skill/SKILL_ACTIVE"
                    }
                },
                {
                    "id": 2,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                }
            ]
        },
        "../game/prop/payRes": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "state",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 1,
                    "name": "condition",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "key",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/user/walletKey"
                                }
                            },
                            {
                                "id": 1,
                                "name": "val",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 2,
                    "name": "now",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/user/walletKey": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                },
                {
                    "id": 4,
                    "value": 4
                },
                {
                    "id": 5,
                    "value": 5
                },
                {
                    "id": 6,
                    "value": 6
                },
                {
                    "id": 7,
                    "value": 7
                },
                {
                    "id": 8,
                    "value": 8
                },
                {
                    "id": 9,
                    "value": 9
                },
                {
                    "id": 10,
                    "value": 10
                },
                {
                    "id": 11,
                    "value": 11
                }
            ]
        },
        "auction/PtlAuction_look/ReqAuction_look": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "auction/PtlAuction_look/ResAuction_look": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "info",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/auction"
                    }
                },
                {
                    "id": 1,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "../game/prop/auction": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "index",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "endTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "auction",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "type",
                                            "type": {
                                                "type": "Reference",
                                                "target": "../game/prop/autionType"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "data",
                                            "type": {
                                                "type": "Any"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": false
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 3,
                    "name": "offer_Cont",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "offer_val",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "offer_lastId",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": false
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 6,
                    "name": "offer_name",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": false
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 7,
                    "name": "look_cont",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "min_offer",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 9,
                    "name": "sell_id",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": false
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 10,
                    "name": "sell_name",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": false
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "../game/prop/autionType": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                }
            ]
        },
        "../game/setUp/userSetUpCfg": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "textStyle",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/textStyle"
                    }
                }
            ]
        },
        "../game/setUp/textStyle": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                }
            ]
        },
        "auction/PtlAuction_offer/ReqAuction_offer": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "addNum",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "auction/PtlAuction_offer/ResAuction_offer": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "auction/PtlAuction/ReqAuction": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "key",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "type",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/autionType"
                    }
                },
                {
                    "id": 3,
                    "name": "cont",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "auction/PtlAuction/ResAuction": {
            "type": "Interface"
        },
        "battle/PtlAttackBoss/ReqAttackBoss": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "battle/PtlAttackBoss/ResAttackBoss": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "PtlBattle/ResBattle"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "isWin",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 1,
                    "name": "hp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "hurt",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "hp_max",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlBattle/ResBattle": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "battleRound",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "log",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 4,
                                    "name": "icon",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 0,
                                    "name": "id",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "name",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "group",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "list",
                                    "type": {
                                        "type": "Array",
                                        "elementType": {
                                            "type": "Reference",
                                            "target": "../game/skill/SKILL_RES"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 2,
                    "name": "kill_log",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "round",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "body",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../game/body/BASE_BODYS"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "die_body",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../game/body/BASE_BODYS"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 3,
                    "name": "reward",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "key",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../game/prop/rewardKey"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "val",
                                    "type": {
                                        "type": "Number"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "../game/skill/SKILL_RES": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "type",
                    "type": {
                        "type": "Reference",
                        "target": "../game/skill/SKILL_ACTIVE_RES_TYPE"
                    }
                },
                {
                    "id": 3,
                    "name": "val",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "tag",
                    "type": {
                        "type": "Reference",
                        "target": "../game/skill/SKILL_ACTIVE_RES_TAG"
                    }
                },
                {
                    "id": 5,
                    "name": "unit",
                    "type": {
                        "type": "Reference",
                        "target": "../game/skill/SKILL_UNITY"
                    }
                }
            ]
        },
        "../game/skill/SKILL_ACTIVE_RES_TYPE": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                }
            ]
        },
        "../game/skill/SKILL_ACTIVE_RES_TAG": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                },
                {
                    "id": 4,
                    "value": 4
                },
                {
                    "id": 5,
                    "value": 5
                },
                {
                    "id": 6,
                    "value": 6
                },
                {
                    "id": 7,
                    "value": 7
                },
                {
                    "id": 8,
                    "value": 8
                },
                {
                    "id": 9,
                    "value": 9
                },
                {
                    "id": 10,
                    "value": 10
                },
                {
                    "id": 11,
                    "value": 11
                },
                {
                    "id": 12,
                    "value": 12
                }
            ]
        },
        "../game/skill/SKILL_UNITY": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                }
            ]
        },
        "../game/body/BASE_BODYS": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 12,
                    "name": "military",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 10,
                    "name": "icon",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "type",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/bodyType"
                    }
                },
                {
                    "id": 2,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "leve",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "hp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "active_skill",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 6,
                    "name": "out_attribute",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/base_attribute"
                    }
                },
                {
                    "id": 7,
                    "name": "pos",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/posV2"
                    }
                },
                {
                    "id": 8,
                    "name": "exp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 9,
                    "name": "exp_max",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 11,
                    "name": "lastResHpTime",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/body/bodyType": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                }
            ]
        },
        "../game/body/posV2": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "x",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "y",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/prop/rewardKey": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                },
                {
                    "id": 4,
                    "value": 4
                },
                {
                    "id": 5,
                    "value": 5
                },
                {
                    "id": 6,
                    "value": 6
                },
                {
                    "id": 7,
                    "value": 7
                },
                {
                    "id": 8,
                    "value": 8
                },
                {
                    "id": 9,
                    "value": 9
                },
                {
                    "id": 10,
                    "value": 10
                },
                {
                    "id": 11,
                    "value": 11
                },
                {
                    "id": 12,
                    "value": 12
                },
                {
                    "id": 13,
                    "value": 13
                },
                {
                    "id": 14,
                    "value": 14
                },
                {
                    "id": 15,
                    "value": 15
                },
                {
                    "id": 16,
                    "value": 16
                }
            ]
        },
        "battle/PtlChallenge_box/ReqChallenge_box": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "type",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "battle/PtlChallenge_box/ResChallenge_box": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "battle",
                    "type": {
                        "type": "Reference",
                        "target": "PtlBattle/ResBattle"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "openlimit",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/DNA_Leve"
                    }
                },
                {
                    "id": 2,
                    "name": "win",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "fail",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "../game/body/DNA_Leve": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                },
                {
                    "id": 4,
                    "value": 4
                },
                {
                    "id": 5,
                    "value": 5
                },
                {
                    "id": 6,
                    "value": 6
                },
                {
                    "id": 7,
                    "value": 7
                },
                {
                    "id": 8,
                    "value": 8
                },
                {
                    "id": 9,
                    "value": 9
                },
                {
                    "id": 10,
                    "value": 10
                },
                {
                    "id": 11,
                    "value": 11
                },
                {
                    "id": 12,
                    "value": 12
                },
                {
                    "id": 13,
                    "value": 13
                },
                {
                    "id": 14,
                    "value": 14
                },
                {
                    "id": 15,
                    "value": 15
                },
                {
                    "id": 16,
                    "value": 16
                },
                {
                    "id": 17,
                    "value": 17
                },
                {
                    "id": 18,
                    "value": 18
                },
                {
                    "id": 19,
                    "value": 19
                }
            ]
        },
        "battle/PtlChallenge_image/ReqChallenge_image": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "isStart",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "battle/PtlChallenge_image/ResChallenge_image": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "battle",
                    "type": {
                        "type": "Reference",
                        "target": "PtlBattle/ResBattle"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "isMax",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 2,
                    "name": "nextDNA",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/DNA_Leve"
                    }
                },
                {
                    "id": 3,
                    "name": "imageLeve",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "imageDNALeve",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/DNA_Leve"
                    }
                },
                {
                    "id": 5,
                    "name": "winAdd",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "failDel",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "battle/PtlPkRank/ReqPkRank": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "attackId",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    }
                }
            ]
        },
        "battle/PtlPkRank/ResPkRank": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "PtlBattle/ResBattle"
                    }
                }
            ]
        },
        "battle/PtlPosAttackEnemy/ReqPosAttackEnemy": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "attackId",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "battle/PtlPosAttackEnemy/ResPosAttackEnemy": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "PtlBattle/ResBattle"
                    }
                }
            ]
        },
        "battle/PtlPosAttackPlayer/ReqPosAttackPlayer": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "attackId",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "battle/PtlPosAttackPlayer/ResPosAttackPlayer": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "PtlBattle/ResBattle"
                    }
                }
            ]
        },
        "battle/PtlRank/ReqRank": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "battle/PtlRank/ResRank": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "PtlBattle/ResBattle"
                    }
                }
            ]
        },
        "map/PtlDocile/ReqDocile": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "index",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "map/PtlDocile/ResDocile": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "succress",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 1,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                }
            ]
        },
        "map/Ptlfishing/Reqfishing": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "map/Ptlfishing/Resfishing": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 1,
                    "name": "jin",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "fish",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "reward",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "map/PtlOpenMapChestBox/ReqOpenMapChestBox": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "openIndex",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "map/PtlOpenMapChestBox/ResOpenMapChestBox": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "reward",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "key",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../game/prop/rewardKey"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "val",
                                    "type": {
                                        "type": "Number"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "me/title/PtlMe_title_changeName/ReqMe_title_changeName": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "changeName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "me/title/PtlMe_title_changeName/ResMe_title_changeName": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 1,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                }
            ]
        },
        "me/title/PtlMe_titleRandom/ReqMe_titleRandom": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "randomCont",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "me/title/PtlMe_titleRandom/ResMe_titleRandom": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 1,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 2,
                    "name": "bf",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/base_attribute"
                    }
                },
                {
                    "id": 3,
                    "name": "now",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/base_attribute"
                    }
                }
            ]
        },
        "minGame/PtlMinGame_lottery/ReqMinGame_lottery": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "guessNum",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "minGame/PtlMinGame_lottery/ResMinGame_lottery": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "info",
                    "type": {
                        "type": "Reference",
                        "target": "../game/minGame/lottery"
                    }
                },
                {
                    "id": 1,
                    "name": "guessJude",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 2,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 3,
                    "name": "reward",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/minGame/lottery": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "round",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "endTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "min",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "max",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "guessCont",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "correct",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "addup",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "lastWin",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "MsgCallAll/MsgCallAll": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "MsgCallAppoint/MsgCallAppoint": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "callUserId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "pet/PtlMe_pet/ReqMe_pet": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "pet/PtlMe_pet/ResMe_pet": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "petList",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/body/BASE_BODYS"
                        }
                    }
                }
            ]
        },
        "pet/PtlMe_petChangeName/ReqMe_petChangeName": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "index",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "pet/PtlMe_petChangeName/ResMe_petChangeName": {
            "type": "Interface"
        },
        "pet/PtlMe_petLook/ReqMe_petLook": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "index",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "pet/PtlMe_petLook/ResMe_petLook": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "base",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/BASE_BODYS"
                    }
                }
            ]
        },
        "pet/PtlMe_petRm/ReqMe_petRm": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "index",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "pet/PtlMe_petRm/ResMe_petRm": {
            "type": "Interface"
        },
        "PtlAddOneWord/ReqAddOneWord": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "text",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddOneWord/ResAddOneWord": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "creatorId",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlBag/ReqBag": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlBag/ResBag": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "bag",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/equip/equip"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "../game/equip/equip": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "icon",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "story",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "quality",
                    "type": {
                        "type": "Reference",
                        "target": "../game/equip/EQUIP_QUALITY"
                    }
                },
                {
                    "id": 4,
                    "name": "type",
                    "type": {
                        "type": "Reference",
                        "target": "../game/equip/EQUIP_TYPE"
                    }
                },
                {
                    "id": 5,
                    "name": "leve",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "base_attribute",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/base_attribute"
                    }
                }
            ]
        },
        "../game/equip/EQUIP_QUALITY": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                },
                {
                    "id": 4,
                    "value": 4
                },
                {
                    "id": 5,
                    "value": 5
                },
                {
                    "id": 6,
                    "value": 6
                },
                {
                    "id": 7,
                    "value": 7
                },
                {
                    "id": 8,
                    "value": 8
                },
                {
                    "id": 9,
                    "value": 9
                }
            ]
        },
        "../game/equip/EQUIP_TYPE": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                }
            ]
        },
        "PtlBattle/ReqBattle": {
            "type": "Interface"
        },
        "PtlGetUserSetUp/ReqGetUserSetUp": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetUserSetUp/ResGetUserSetUp": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "PtlHello/ReqHello": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlHello/ResHello": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "reply",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlMe_Attribute/ReqMe_Attribute": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlMe_Attribute/ResMe_Attribute": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "body",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/body"
                    }
                },
                {
                    "id": 1,
                    "name": "ancestry",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/ancestry"
                    }
                },
                {
                    "id": 2,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "../game/body/body": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/BASE_BODYS"
                    }
                }
            ],
            "properties": [
                {
                    "id": 10,
                    "name": "rankscore",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 0,
                    "name": "sys",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "creator_time",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 1,
                    "name": "equip",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "weapons",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/equip/equip"
                                },
                                "optional": true
                            },
                            {
                                "id": 1,
                                "name": "subWeapon",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/equip/equip"
                                },
                                "optional": true
                            }
                        ]
                    }
                },
                {
                    "id": 2,
                    "name": "title",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "name",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "leve",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 2,
                                "name": "exp",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 5,
                                "name": "exp_max",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 6,
                                "name": "todayGetExp",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 7,
                                "name": "updateExpTime",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 3,
                                "name": "randomCont",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 4,
                                "name": "attribute",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/body/base_attribute"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 12,
                    "name": "dnaLock",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/DNA_Leve"
                    }
                },
                {
                    "id": 3,
                    "name": "add",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/base_attribute"
                    }
                },
                {
                    "id": 4,
                    "name": "sign",
                    "type": {
                        "type": "Reference",
                        "target": "../game/user/USER_SIGN"
                    }
                },
                {
                    "id": 14,
                    "name": "task",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "ladderLeve",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 5,
                    "name": "wallet",
                    "type": {
                        "type": "Reference",
                        "target": "../game/user/USER_wallet"
                    }
                },
                {
                    "id": 6,
                    "name": "bag",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/equip/equip"
                        }
                    }
                },
                {
                    "id": 7,
                    "name": "setUp",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 8,
                    "name": "pet",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/body/BASE_BODYS"
                        }
                    }
                },
                {
                    "id": 9,
                    "name": "ancestry",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "id",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "leve",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 2,
                                "name": "exp",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 3,
                                "name": "exp_max",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 11,
                    "name": "team",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "id",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "leve",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/team/teamLeve"
                                }
                            },
                            {
                                "id": 2,
                                "name": "contribute",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 13,
                    "name": "minGameLog",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/minGame"
                    }
                }
            ]
        },
        "../game/user/USER_SIGN": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "cont",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "lastSignTime",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/user/USER_wallet": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "gold",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "titleCard",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "BlindBox",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "changeNameCard",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "skillCard",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "transferCard",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "resLife",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "driedFish",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "spiritBall",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 9,
                    "name": "evolveCard",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 10,
                    "name": "justice",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 11,
                    "name": "evil",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/team/teamLeve": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                }
            ]
        },
        "../game/body/minGame": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "lottery",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "partake",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "win",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "PtlMe_callPos/ReqMe_callPos": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "x",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "y",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlMe_callPos/ResMe_callPos": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "mapName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "callPos",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "x",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "name": "y",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 2,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 3,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                }
            ]
        },
        "PtlMe_changeName/ReqMe_changeName": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "changeName",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlMe_changeName/ResMe_changeName": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 1,
                    "name": "lastName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "newName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "PtlMe_destroyBagEquip/ReqMe_destroyBagEquip": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "destroyIndex",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlMe_destroyBagEquip/ResMe_destroyBagEquip": {
            "type": "Interface"
        },
        "PtlMe_destroyMeSkill/ReqMe_destroyMeSkill": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "destroyIndex",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlMe_destroyMeSkill/ResMe_destroyMeSkill": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "PtlMe_equip/ReqMe_equip": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlMe_equip/ResMe_equip": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 1,
                    "name": "equipList",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/equip/equip"
                        }
                    }
                }
            ]
        },
        "PtlMe_lookBag/ReqMe_lookBag": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "lookId",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlMe_lookBag/ResMe_lookBag": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/equip/equip"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "PtlMe_openBlindBox/ReqMe_openBlindBox": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "openNum",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlMe_openBlindBox/ResMe_openBlindBox": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "reward",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "key",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../game/prop/rewardKey"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "val",
                                    "type": {
                                        "type": "Number"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 2,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "PtlMe_setUp/ReqMe_setUp": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "setKey",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "setVal",
                    "type": {
                        "type": "Any"
                    }
                }
            ]
        },
        "PtlMe_setUp/ResMe_setUp": {
            "type": "Interface"
        },
        "PtlMe_skill/ReqMe_skill": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlMe_skill/ResMe_skill": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 1,
                    "name": "skillList",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    }
                }
            ]
        },
        "PtlMe_strengthen/ReqMe_strengthen": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "strengthenType",
                    "type": {
                        "type": "Reference",
                        "target": "../game/equip/EQUIP_TYPE"
                    }
                }
            ]
        },
        "PtlMe_strengthen/ResMe_strengthen": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 1,
                    "name": "bfEquip",
                    "type": {
                        "type": "Reference",
                        "target": "../game/equip/equip"
                    }
                },
                {
                    "id": 2,
                    "name": "nowEquip",
                    "type": {
                        "type": "Reference",
                        "target": "../game/equip/equip"
                    }
                },
                {
                    "id": 3,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 4,
                    "name": "rate",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "isSuccress",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "PtlMe_title/ReqMe_title": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlMe_title/ResMe_title": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 1,
                    "name": "title",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "name",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "leve",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 2,
                                "name": "exp",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 5,
                                "name": "todayGetExp",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 6,
                                "name": "updateExpTime",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 7,
                                "name": "exp_max",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 3,
                                "name": "randomCont",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 4,
                                "name": "attribute",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/body/base_attribute"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "PtlMe_wallet/ReqMe_wallet": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlMe_wallet/ResMe_wallet": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/user/USER_wallet"
                    }
                }
            ]
        },
        "PtlMe_wearEquip/ReqMe_wearEquip": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "wearIndex",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlMe_wearEquip/ResMe_wearEquip": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "PtlMove/ReqMove": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "direction",
                    "type": {
                        "type": "Reference",
                        "target": "PtlMove/moveDirection"
                    }
                }
            ]
        },
        "PtlMove/moveDirection": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                }
            ]
        },
        "PtlMove/ResMove": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "pos_name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "pos",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/posV2"
                    }
                },
                {
                    "id": 2,
                    "name": "isTop",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 3,
                    "name": "isButtom",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 4,
                    "name": "isRight",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 5,
                    "name": "isLeft",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 6,
                    "name": "player",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/body/body"
                        }
                    }
                }
            ]
        },
        "PtlPos/ReqPos": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlPos/ResPos": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "pos_name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "posTiledId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "pos",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/posV2"
                    }
                },
                {
                    "id": 3,
                    "name": "isTop",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 4,
                    "name": "isButtom",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 5,
                    "name": "isRight",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 6,
                    "name": "isLeft",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 7,
                    "name": "enemy",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/body/BASE_BODYS"
                        }
                    }
                },
                {
                    "id": 8,
                    "name": "player",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/body/body"
                        }
                    }
                },
                {
                    "id": 9,
                    "name": "chest",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/prop/chestBox"
                        }
                    }
                },
                {
                    "id": 10,
                    "name": "meIcon",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "../game/prop/chestBox": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "leve",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/chestBoxLv"
                    }
                },
                {
                    "id": 1,
                    "name": "isOpen",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "../game/prop/chestBoxLv": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                },
                {
                    "id": 4,
                    "value": 4
                },
                {
                    "id": 5,
                    "value": 5
                },
                {
                    "id": 6,
                    "value": 6
                },
                {
                    "id": 7,
                    "value": 7
                },
                {
                    "id": 8,
                    "value": 8
                },
                {
                    "id": 9,
                    "value": 9
                }
            ]
        },
        "PtlResLife/ReqResLife": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlResLife/ResResLife": {
            "type": "Interface"
        },
        "PtlSearchSkill/ReqSearchSkill": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "skillName",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlSearchSkill/ResSearchSkill": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "skill",
                    "type": {
                        "type": "Reference",
                        "target": "../game/skill/SKILL_ACTIVE"
                    }
                },
                {
                    "id": 1,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 2,
                    "name": "match",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlSign/ReqSign": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlSign/ResSign": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "isRepeat",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 1,
                    "name": "cont",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "oneWord",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "lastSignTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 5,
                    "name": "reward",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "key",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../game/prop/rewardKey"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "val",
                                    "type": {
                                        "type": "Number"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "rank/PtlRank_ancestry/ReqRank_ancestry": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "rank/PtlRank_ancestry/ResRank_ancestry": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "rank/PtlRank_leve/ResRank_leve"
                    }
                }
            ]
        },
        "rank/PtlRank_leve/ResRank_leve": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "val",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "name",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "icon",
                                    "type": {
                                        "type": "String"
                                    },
                                    "optional": true
                                },
                                {
                                    "id": 2,
                                    "name": "id",
                                    "type": {
                                        "type": "String"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "meIndex",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "rank/PtlRank_dnaLv/ReqRank_dnaLv": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "rank/PtlRank_dnaLv/ResRank_dnaLv": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "rank/PtlRank_leve/ResRank_leve"
                    }
                }
            ]
        },
        "rank/PtlRank_gold/ReqRank_gold": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "rank/PtlRank_gold/ResRank_gold": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "rank/PtlRank_leve/ResRank_leve"
                    }
                }
            ]
        },
        "rank/PtlRank_leve/ReqRank_leve": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "rank/PtlRank_military_pet/ReqRank_military_pet": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "rank/PtlRank_military_pet/ResRank_military_pet": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "rank/PtlRank_leve/ResRank_leve"
                    }
                }
            ]
        },
        "rank/PtlRank_military/ReqRank_military": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "rank/PtlRank_military/ResRank_military": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "rank/PtlRank_leve/ResRank_leve"
                    }
                }
            ]
        },
        "rank/PtlRank_minGame_lottery_cont/ReqRank_minGame_lottery_cont": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "rank/PtlRank_minGame_lottery_cont/ResRank_minGame_lottery_cont": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "rank/PtlRank_leve/ResRank_leve"
                    }
                }
            ]
        },
        "rank/PtlRank_minGame_lottery_win/ReqRank_minGame_lottery_win": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "rank/PtlRank_minGame_lottery_win/ResRank_minGame_lottery_win": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "rank/PtlRank_leve/ResRank_leve"
                    }
                }
            ]
        },
        "rank/PtlRank_petCont/ReqRank_petCont": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "rank/PtlRank_petCont/ResRank_petCont": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "rank/PtlRank_leve/ResRank_leve"
                    }
                }
            ]
        },
        "rank/PtlRank_petLv/ReqRank_petLv": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "rank/PtlRank_petLv/ResRank_petLv": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "rank/PtlRank_leve/ResRank_leve"
                    }
                }
            ]
        },
        "rank/PtlRank_rankscore/ReqRank_rankscore": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "rank/PtlRank_rankscore/ResRank_rankscore": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "rank/PtlRank_leve/ResRank_leve"
                    }
                }
            ]
        },
        "rank/PtlRank_sign/ReqRank_sign": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "rank/PtlRank_sign/ResRank_sign": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "rank/PtlRank_leve/ResRank_leve"
                    }
                }
            ]
        },
        "rank/PtlRank_strengthen/ReqRank_strengthen": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "rank/PtlRank_strengthen/ResRank_strengthen": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "rank/PtlRank_leve/ResRank_leve"
                    }
                }
            ]
        },
        "rank/PtlRank_team/ReqRank_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "rank/PtlRank_team/ResRank_team": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "rank/PtlRank_leve/ResRank_leve"
                    }
                }
            ]
        },
        "rank/PtlRank_titleAttr/ReqRank_titleAttr": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "rank/PtlRank_titleAttr/ResRank_titleAttr": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "rank/PtlRank_leve/ResRank_leve"
                    }
                }
            ]
        },
        "rank/PtlRank_titleCont/ReqRank_titleCont": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "rank/PtlRank_titleCont/ResRank_titleCont": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "rank/PtlRank_leve/ResRank_leve"
                    }
                }
            ]
        },
        "shop/PtlShop_back_buy/ReqShop_back_buy": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "shop/PtlShop_back_buy/ResShop_back_buy": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 1,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                }
            ]
        },
        "shop/PtlShop_back/ReqShop_back": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "shop/PtlShop_back/ResShop_back": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/store_back"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "../game/prop/store_back": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "sell_temp",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/storeBackTemp"
                    }
                },
                {
                    "id": 1,
                    "name": "creatorTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "nextUpdateTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "sellNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "buyCondition",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "key",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/user/walletKey"
                                }
                            },
                            {
                                "id": 1,
                                "name": "val",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 5,
                    "name": "stock",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "updateNum",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/prop/storeBackTemp": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                }
            ]
        },
        "shop/PtlShop_equip_buy/ReqShop_equip_buy": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "shop/PtlShop_equip_buy/ResShop_equip_buy": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 1,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "shop/PtlShop_equip/ReqShop_equip": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "shop/PtlShop_equip/ResShop_equip": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/store_equip"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "../game/prop/store_equip": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "sell_temp",
                    "type": {
                        "type": "Reference",
                        "target": "../game/equip/equip"
                    }
                },
                {
                    "id": 1,
                    "name": "creatorTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "nextUpdateTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "sellNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "buyCondition",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "key",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/user/walletKey"
                                }
                            },
                            {
                                "id": 1,
                                "name": "val",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 5,
                    "name": "stock",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "updateNum",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "shop/PtlShop_icon_buy/ReqShop_icon_buy": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "shop/PtlShop_icon_buy/ResShop_icon_buy": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 1,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "shop/PtlShop_icon/ReqShop_icon": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "shop/PtlShop_icon/ResShop_icon": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/store_icon"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "../game/prop/store_icon": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "sell_temp",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "creatorTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "nextUpdateTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "sellNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "buyCondition",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "key",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/user/walletKey"
                                }
                            },
                            {
                                "id": 1,
                                "name": "val",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 5,
                    "name": "stock",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "updateNum",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "shop/PtlShop_skill_buy/ReqShop_skill_buy": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "shop/PtlShop_skill_buy/ResShop_skill_buy": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 1,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "shop/PtlShop_skill/ReqShop_skill": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "shop/PtlShop_skill/ResShop_skill": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/store_skill"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "../game/prop/store_skill": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "sell_temp",
                    "type": {
                        "type": "Reference",
                        "target": "../game/skill/SKILL_ACTIVE"
                    }
                },
                {
                    "id": 1,
                    "name": "creatorTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "nextUpdateTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "sellNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "buyCondition",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "key",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/user/walletKey"
                                }
                            },
                            {
                                "id": 1,
                                "name": "val",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 5,
                    "name": "stock",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "updateNum",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "shop/PtlShop_team_buy/ReqShop_team_buy": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "shop/PtlShop_team_buy/ResShop_team_buy": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 1,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "shop/PtlShop_team/ReqShop_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "shop/PtlShop_team/ResShop_team": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/store_team"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "../game/prop/store_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "sell_temp",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/storeTeamTemp"
                    }
                },
                {
                    "id": 1,
                    "name": "creatorTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "nextUpdateTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "sellNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "buyCondition",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "key",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/user/walletKey"
                                }
                            },
                            {
                                "id": 1,
                                "name": "val",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 5,
                    "name": "stock",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "updateNum",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/prop/storeTeamTemp": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                }
            ]
        },
        "task/PtlEverDayTask/ReqEverDayTask": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "task/PtlEverDayTask/ResEverDayTask": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/taskTemp/taskTemp"
                    }
                }
            ]
        },
        "../game/taskTemp/taskTemp": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "isEnd",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 1,
                    "name": "lastUpdate",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "isReward",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 3,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/taskTemp/everDayTask_Item"
                        }
                    }
                },
                {
                    "id": 4,
                    "name": "updateDay",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/taskTemp/everDayTask_Item": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Reference",
                        "target": "../game/taskTemp/TaskId"
                    }
                },
                {
                    "id": 1,
                    "name": "now",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "target",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/taskTemp/TaskId": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                },
                {
                    "id": 4,
                    "value": 4
                },
                {
                    "id": 5,
                    "value": 5
                },
                {
                    "id": 6,
                    "value": 6
                },
                {
                    "id": 7,
                    "value": 7
                },
                {
                    "id": 8,
                    "value": 8
                },
                {
                    "id": 9,
                    "value": 9
                },
                {
                    "id": 10,
                    "value": 10
                },
                {
                    "id": 11,
                    "value": 11
                },
                {
                    "id": 12,
                    "value": 12
                }
            ]
        },
        "task/PtlsoaringTask/ReqsoaringTask": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "task/PtlsoaringTask/RessoaringTask": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/taskTemp/taskTemp"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "taskLeve",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "team/PtlChangeName_team/ReqChangeName_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "team/PtlChangeName_team/ResChangeName_team": {
            "type": "Interface"
        },
        "team/PtlCreator_team/ReqCreator_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "team/PtlCreator_team/ResCreator_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 1,
                    "name": "team",
                    "type": {
                        "type": "Reference",
                        "target": "../game/team/team_info"
                    }
                }
            ]
        },
        "../game/team/team_info": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "leve",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "exp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "maxExp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "userCont",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "maxUserCont",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "contribution",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "gain",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/base_attribute"
                    }
                }
            ]
        },
        "team/PtlCreatorJoinCode_team/ReqCreatorJoinCode_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "team/PtlCreatorJoinCode_team/ResCreatorJoinCode_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "code",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "team/PtlDismiss_team/ReqDismiss_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "team/PtlDismiss_team/ResDismiss_team": {
            "type": "Interface"
        },
        "team/PtlJoin_team/ReqJoin_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "code",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "team/PtlJoin_team/ResJoin_team": {
            "type": "Interface"
        },
        "team/PtlKicOut_team/ReqKicOut_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "index",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "team/PtlKicOut_team/ResKicOut_team": {
            "type": "Interface"
        },
        "team/PtlMe_team/ReqMe_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "team/PtlMe_team/ResMe_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "info",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/team/team_info"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 1,
                    "name": "myLeve",
                    "type": {
                        "type": "Reference",
                        "target": "../game/team/teamLeve"
                    }
                },
                {
                    "id": 2,
                    "name": "myContribute",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "team/PtlOut_team/ReqOut_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "team/PtlOut_team/ResOut_team": {
            "type": "Interface"
        },
        "team/PtlUserList/ReqUserList": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "team/PtlUserList/ResUserList": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "name",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "leve",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "pos",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../game/body/posV2"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        }
    }
};