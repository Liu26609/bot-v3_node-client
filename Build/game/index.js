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
const auction_look_1 = require("./shop/auction_look");
const fishing_1 = require("./map/fishing");
const shop_back_buy_1 = require("./shop/shop_back_buy");
const me_titleRandom_1 = require("./me/me_titleRandom");
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
const chainTask_1 = require("./sys/chainTask");
const me_wallet_1 = require("./me/me_wallet");
const pos_attackPlayer_1 = require("./battle/pos_attackPlayer");
const me_move_1 = require("./me/me_move");
const update_1 = require("./sys/update");
const battleTest_1 = require("./battle/battleTest");
const me_attribute_1 = require("./me/me_attribute");
const __1 = require("..");
const bot_1 = __importDefault(require("../unity/bot"));
const sever_1 = __importDefault(require("../unity/sever"));
const me_sign_1 = __importDefault(require("./me/me_sign"));
const me_pos_1 = require("./me/me_pos");
const addOneWrod_1 = require("./sys/addOneWrod");
const pos_attackEnemy_1 = require("./battle/pos_attackEnemy");
const baseTaskMenu_1 = require("./sys/baseTaskMenu");
const openMapChestBox_1 = require("./map/openMapChestBox");
const common_1 = __importDefault(require("../unity/common"));
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
        this.matchMap = new Map();
        this.initKeyMap();
        this.start();
    }
    initKeyMap() {
        this.matchMap.set('攻击全部怪物', { action: pos_attackEnemy_1.pos_attackEnemy, match: matchType.match });
        this.matchMap.set('查看背包装备', { action: me_lookBag_1.me_lookBag, match: matchType.match });
        this.matchMap.set('销毁全部装备', { action: me_destroyBagEquip_1.me_destroyBagEquip, match: matchType.all });
        this.matchMap.set('addOneWrod', { action: addOneWrod_1.addOneWrod, match: matchType.match });
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
        this.matchMap.set('销毁装备', { action: me_destroyBagEquip_1.me_destroyBagEquip, match: matchType.match });
        this.matchMap.set('装备商店', { action: shop_equip_1.shop_equip, match: matchType.all });
        this.matchMap.set('购买装备', { action: shop_equip_buy_1.shop_equip_buy, match: matchType.all });
        this.matchMap.set('技能商店', { action: shop_skill_1.shop_skill, match: matchType.all });
        this.matchMap.set('链式指令', { action: chainTask_1.chainTask, match: matchType.all });
        this.matchMap.set('我的称号', { action: me_title_1.me_title, match: matchType.match });
        this.matchMap.set('重置称号', { action: me_titleRandom_1.me_titleRandom, match: matchType.match });
        this.matchMap.set('购买技能', { action: shop_skill_buy_1.shop_skill_buy, match: matchType.all });
        this.matchMap.set('黑市购买', { action: shop_back_buy_1.shop_back_buy, match: matchType.all });
        this.matchMap.set('我的技能', { action: me_skill_1.me_skill, match: matchType.all });
        this.matchMap.set('我的宠物', { action: me_pet_1.me_pet, match: matchType.all });
        this.matchMap.set('查看宠物', { action: me_lookPet_1.me_lookPet, match: matchType.match });
        this.matchMap.set('宠物改名', { action: me_petChangeName_1.me_petChangeName, match: matchType.match });
        this.matchMap.set('放生宠物', { action: me_petRm_1.me_petRm, match: matchType.match });
        this.matchMap.set('捕捉', { action: docile_1.docile, match: matchType.match });
        this.matchMap.set('拍卖行', { action: auction_look_1.auction_look, match: matchType.all });
        this.matchMap.set(`拍卖`, { action: auction_1.auction, match: matchType.match });
        this.matchMap.set(`出价`, { action: auction_offer_1.auction_offer, match: matchType.match });
        this.matchMap.set('穿装备', { action: me_wearEquip_1.me_wearEquip, match: matchType.match });
        this.matchMap.set('钓鱼', { action: fishing_1.fishing, match: matchType.all });
        this.matchMap.set('黑市', { action: shop_back_1.shop_back, match: matchType.all });
        this.matchMap.set('签到', { action: me_sign_1.default, match: matchType.all });
        this.matchMap.set('属性', { action: me_attribute_1.me_attribute, match: matchType.all });
        this.matchMap.set('测试', { action: battleTest_1.battleTest, match: matchType.all });
        this.matchMap.set('位置', { action: me_pos_1.me_pos, match: matchType.all });
        this.matchMap.set('改名', { action: me_changeName_1.me_changeName, match: matchType.match });
        this.matchMap.set('钱包', { action: me_wallet_1.me_wallet, match: matchType.match });
        this.matchMap.set('复活', { action: me_resLife_1.me_resLife, match: matchType.all });
        this.matchMap.set('治疗', { action: me_resLife_1.me_resLife, match: matchType.all });
        this.matchMap.set('背包', { action: me_bag_1.me_bag, match: matchType.all });
        this.matchMap.set('设置', { action: setUp_1.setUp, match: matchType.match });
        this.matchMap.set('强化', { action: me_strengthen_1.me_strengthen, match: matchType.match });
        this.matchMap.set('传送', { action: me_callPos_1.me_callPos, match: matchType.match });
        this.matchMap.set('上', { action: me_move_1.me_move, match: matchType.all });
        this.matchMap.set('下', { action: me_move_1.me_move, match: matchType.all });
        this.matchMap.set('左', { action: me_move_1.me_move, match: matchType.all });
        this.matchMap.set('右', { action: me_move_1.me_move, match: matchType.all });
    }
    start() {
        bot_1.default.setOnMsg_at((data) => this.atBot(data));
    }
    /**
     * // 收到消息
     * 用户艾特机器人触发
     */
    atBot(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!sever_1.default.isReady()) {
                let temp = ``;
                temp += `┏┄════⚠️错误提示═══━┄\n`;
                temp += `┣⛔︎错误代码:${common_1.default.random(0, 99999999999).toString(16)}\n`;
                temp += `┣🗂️错误类型:🔴服务器无响应\n`;
                temp += `┣┄════❌错误提示═══━┄\n`;
                temp += `  🟢客户端:${bot_1.default.severId()}\n`;
                temp += `  🟡正在开始重新连接\n`;
                temp += `┗┄━═══════════━┄\n`;
                temp += `🧚‍♂️如不知如何发生的错误且长时间存在请截图反馈`;
                bot_1.default.sendText(data.channel_id, temp);
                sever_1.default.HelloWorld();
                return;
            }
            if (data.content == '频道ID') {
                bot_1.default.sendText(data.channel_id, data.channel_id);
                return;
            }
            if (data.channel_id != '1933444') {
                return;
            }
            // if(data.author.id != '14139673525601401123'){
            //     return;
            // }
            (0, __1.log)('收到艾特消息', data.content);
            const userId = data.author.id;
            const userIcon = data.author.avatar;
            const fromChannel = data.channel_id;
            const content = data.content;
            const userName = data.author.username;
            let matchList = [];
            let isFind = false;
            // 分析行为
            this.matchMap.forEach((conf, key) => {
                if (conf.match == matchType.all && data.content == key && !isFind) {
                    isFind = true;
                    new conf.action(userId, fromChannel, userIcon, content, key, userName);
                }
                else if (conf.match == matchType.match && data.content.includes(key) && !isFind) {
                    isFind = true;
                    new conf.action(userId, fromChannel, userIcon, content, key, userName);
                }
                let match = common_1.default.xsd(key, data.content);
                if (!isFind) {
                    matchList.push({ conf: conf, match: match, key: key });
                }
            });
            if (!isFind) {
                matchList.sort(function (A, B) {
                    return B.match - A.match;
                });
                let temp = `┏┄════🔎你想找什么?══━┄\n`;
                for (let index = 0; index < 5; index++) {
                    temp += `@${bot_1.default.getBot_name()}  ${matchList[index].key}\n`;
                }
                temp += `┗┄━══════════━┄`;
                bot_1.default.sendText(data.channel_id, temp);
            }
        });
    }
    // 客户端刷新单位：秒
    update() {
        (0, __1.log)('update');
    }
}
exports.default = game;
