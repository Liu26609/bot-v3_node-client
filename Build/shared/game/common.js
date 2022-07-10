"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skill_1 = require("./skill");
const taskTemp_1 = require("./taskTemp");
/**
 * 公共方法库
 */
class common {
    constructor() {
        this.rankMap = new Map();
        this.rankMap.set(0, '🏆');
        this.rankMap.set(1, '🥈');
        this.rankMap.set(2, '🥉');
        this.rankMap.set(3, '4️⃣');
        this.rankMap.set(4, '5️⃣');
        this.rankMap.set(5, '6️⃣ ');
        this.rankMap.set(6, '7️⃣');
        this.rankMap.set(7, '8️⃣');
        this.rankMap.set(8, '9️⃣');
        this.rankMap.set(9, '🔟');
        this.rankMap.set(10, '⑪');
        this.rankMap.set(11, '⑫');
        this.rankMap.set(12, '⑬');
        this.rankMap.set(13, '⑭');
        this.rankMap.set(14, '⑮');
        this.rankMap.set(15, '⑯');
        this.rankMap.set(16, '⑰');
        this.rankMap.set(17, '⑱');
        this.rankMap.set(18, '⑲');
        this.rankMap.set(19, '⑳');
        this.leve_base_hp_max = 100;
        this.leve_base_MagicAttack = 10;
        this.leve_base_PhysicalAttacks = 10;
        this.leve_base_MagicDefense = 1;
        this.leve_base_PhysicalDefense = 1;
        this.leve_base_secondResHp = 0.01;
    }
    /**
      * 获取排行文字
      * @param index
      * @returns
      */
    getRankStr(index) {
        return this.rankMap.get(index) || `(${(index + 1).toString()})`;
    }
    /**
       *
       * @param number
       * @param decimalDigit 小数长度
       * @returns
       */
    BN(number, decimalDigit) {
        decimalDigit = decimalDigit == null ? 2 : decimalDigit;
        let integer = Math.floor(number);
        let digit = this._getDigit(integer);
        // ['个', '十', '百', '千', '万', '十万', '百万', '千万']; 
        let unit = [];
        if (digit > 3) {
            let multiple = Math.floor(digit / 8);
            if (multiple >= 1) {
                let tmp = Math.round(integer / Math.pow(10, 8 * multiple));
                unit.push(this._addWan(tmp, number, 8 * multiple, decimalDigit));
                for (let i = 0; i < multiple; i++) {
                    unit.push('亿');
                }
                return unit.join('');
            }
            else {
                return this._addWan(integer, number, 0, decimalDigit);
            }
        }
        else {
            return Math.ceil(number);
        }
    }
    _addWan(integer, number, mutiple, decimalDigit) {
        let me = this;
        let digit = me._getDigit(integer);
        if (digit > 3) {
            let remainder = digit % 8;
            if (remainder >= 5) { // ‘十万’、‘百万’、‘千万’显示为‘万’ 
                remainder = 4;
            }
            return Math.round(number / Math.pow(10, remainder + mutiple - decimalDigit)) / Math.pow(10, decimalDigit) + '万';
        }
        else {
            return Math.round(number / Math.pow(10, mutiple - decimalDigit)) / Math.pow(10, decimalDigit);
        }
    }
    _getDigit(integer) {
        let digit = -1;
        while (integer >= 1) {
            digit++;
            integer = integer / 10;
        }
        return digit;
    }
    /**
     * 获取一个随机数
     */
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getObjSize(obj) {
        let size = 0;
        for (const key in obj) {
            size += 1;
        }
        return size / 2;
    }
    /**
     * 字符串过滤数字无关的值
     * @param str
     * @returns
     */
    getNumber(str) {
        let numStr = str.replace(/[^0-9]/ig, "");
        return Number(numStr);
    }
    /**
      * 文字是否合法
      * @param str
      * @returns
      */
    islegal(str) {
        let reg = new RegExp("^[A-Za-z0-9\u4e00-\u9fa5]+$");
        if (reg.test(str)) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * 数组洗牌算法
     */
    randomArry(arr) {
        const newArr = [...arr];
        const length = newArr.length;
        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * length);
            let temp;
            temp = newArr[index];
            newArr[index] = newArr[i];
            newArr[i] = temp;
        }
        return newArr;
    }
    /**
     * 装备属性转换
     * @param e
     * @param keys
     * @returns
     */
    converEquipattribute(e, keys) {
        let equipVal = e.base_attribute[keys];
        let val = equipVal + equipVal * Math.pow(e.leve, 1.05) * Math.pow(e.quality + 1, 0.2);
        return Math.ceil(val) || 0;
    }
    coverTaskIdTips(id) {
        let str = ``;
        switch (id) {
            case taskTemp_1.TaskId.sign:
                str = `[签到]签什么到，钓鱼去！`;
                break;
            case taskTemp_1.TaskId.SkillShop_look:
                str = `[技能商店]查看技能商店`;
                break;
            case taskTemp_1.TaskId.BackShop_look:
                str = `[黑市商店]不正当的PY商店`;
                break;
            case taskTemp_1.TaskId.EquipShop_look:
                str = `[装备商店]查看装备商店`;
                break;
            case taskTemp_1.TaskId.PK:
                str = `[PK]频道PK点到为止`;
                break;
            case taskTemp_1.TaskId.catch:
                str = `[捕捉]废品收集器`;
                break;
            case taskTemp_1.TaskId.fishing:
                str = `[钓鱼]钓鱼佬绝不空军`;
                break;
            case taskTemp_1.TaskId.attackMonster:
                str = `[攻击怪物]闲的无聊打个怪`;
                break;
            case taskTemp_1.TaskId.attackBoss_partake:
                str = `[攻击boss]刮痧师傅在线刮痧`;
                break;
            case taskTemp_1.TaskId.rank:
                str = `[华山论剑]菜鸡互啄`;
                break;
            case taskTemp_1.TaskId.lottery_partake:
                str = `[猜数]中是不可能中的`;
                break;
            case taskTemp_1.TaskId.look_Horse:
                str = `[宠物马拉松]查看一次宠物马拉松`;
                break;
            case taskTemp_1.TaskId.challenge_hit:
                str = `[伤害挑战]最高爆发伤害挑战`;
                break;
            case taskTemp_1.TaskId.challenge_greed:
                str = `[贪婪洞窟]与欲望为敌`;
                break;
            default:
                str = `未收录任务id${id}`;
                break;
        }
        return str;
    }
    /**
     * 计算战力
     */
    converMilitary(attribute) {
        let military = 0;
        for (const key in attribute) {
            switch (key) {
                case 'MagicAttack':
                    military += Math.ceil(attribute[key]);
                    break;
                case 'hp_max':
                    military += Math.ceil(attribute[key] / this.leve_base_hp_max);
                    break;
                case 'PhysicalAttacks':
                    military += Math.ceil(attribute[key]);
                    break;
                case 'MagicDefense':
                    military += Math.ceil(attribute[key]);
                    break;
                case 'PhysicalDefense':
                    military += Math.ceil(attribute[key]);
                    break;
                case 'secondResHp':
                    break;
                default:
                    break;
            }
        }
        return military;
    }
    /**
    * 判定两个时间戳是否为同一天
    * @param t
    * @returns
    */
    isOneDay(t) {
        return new Date(t).toDateString() === new Date().toDateString();
    }
    /**
     * 判断两个时间戳相差多少天
     * @param startDate
     * @param enDate
     * @returns
     */
    getDaysBetween(startDate, enDate) {
        const sDate = startDate;
        const eDate = enDate;
        if (sDate === eDate) {
            return 0;
        }
        const days = (Math.abs(eDate - sDate)) / (1 * 24 * 60 * 60 * 1000);
        return Math.floor(days);
    }
    getSkDesc(info) {
        let temp = ``;
        switch (info.type) {
            case skill_1.SKILL_TYPE.miss:
                temp += `对空气造成了成吨的伤害`;
                break;
            case skill_1.SKILL_TYPE.attack_Magic_fixed:
                temp += `对一个单位造成固定${info.data[0]}的🔮魔法伤害`;
                break;
            case skill_1.SKILL_TYPE.attack_Physics_fixed:
                temp += `对一个单位造成固定${info.data[0]}的🔪物理伤害`;
                break;
            case skill_1.SKILL_TYPE.attack_Magic_rang:
                temp += `对一个单位造成${(info.data[0]).toFixed(2)}%的🔮魔法伤害`;
                break;
            case skill_1.SKILL_TYPE.attack_Physics_rang:
                temp += `对一个单位造成${(info.data[0]).toFixed(2)}%的🔪物理伤害`;
                break;
            case skill_1.SKILL_TYPE.creator_shadow:
                temp += `创造${info.data[1]}个镜像分身,分身有自身${(info.data[0]).toFixed(2)}%属性,但只会存在一回合`;
                break;
            case skill_1.SKILL_TYPE.continuity_Physics:
                // 连续攻击N次，每次攻击为魔法攻击的百分比属性 参数1:攻击次数 参数2:每次攻击最小的伤害 参数3:每次攻击最大的伤害
                temp += `连续攻击${info.data[0]}次，每次攻击为物理攻击的百分比[${info.data[1]}%-${info.data[2]}]%`;
                break;
            case skill_1.SKILL_TYPE.continuity_Magic:
                // 连续攻击N次，每次攻击为魔法攻击的百分比属性 参数1:攻击次数 参数2:每次攻击最小的伤害 参数3:每次攻击最大的伤害
                temp += `连续攻击${info.data[0]}次，每次攻击为魔法攻击的百分比[${info.data[1]}%-${info.data[2]}]%`;
                break;
            case skill_1.SKILL_TYPE.forever_steal_skill:
                // 有N概率永久复制对方技能
                temp += `有${info.data[0]}%概率永久复制对方技能`;
                break;
            case skill_1.SKILL_TYPE.upMagicDefense_fixed:
                // 每触发一次提高N点物理防御
                temp += `每触发一次提高${info.data[0]}点魔法防御`;
                break;
            case skill_1.SKILL_TYPE.upPhysicalDefense_fixed:
                // 每触发一次提高N点物理防御
                temp += `每触发一次提高${info.data[0]}点物理防御`;
                break;
            case skill_1.SKILL_TYPE.upAll:
                // 每触发一次提高N点物理防御
                temp += `每次触发提高${info.data[0]}%全属性,可无限叠加最高可到一亿亿亿亿亿亿亿亿亿亿`;
                break;
            case skill_1.SKILL_TYPE.resHp_fixed:
                // 每触发一次提高N点物理防御
                temp += `每次触发回复${info.data[0]}生命`;
                break;
            case skill_1.SKILL_TYPE.enemy_all_Magic:
                // 每触发一次提高N点物理防御
                temp += `对敌方全部单位造成${info.data[0]}%百分比魔法伤害`;
                break;
            case skill_1.SKILL_TYPE.enemy_all_Physics:
                temp += `对敌方全部单位造成${info.data[0]}%百分比物理伤害`;
                break;
            case skill_1.SKILL_TYPE.random_Physics_fixed:
                temp += `随机造成${info.data[0]}-${info.data[1]}物理伤害`;
                break;
            case skill_1.SKILL_TYPE.random_Magic_fixed:
                temp += `随机造成${info.data[0]}-${info.data[1]}魔法伤害`;
                break;
            case skill_1.SKILL_TYPE.random_Physics:
                temp += `随机造成${info.data[0]}%-${info.data[1]}%物理伤害`;
                break;
            case skill_1.SKILL_TYPE.random_Magic:
                temp += `随机造成${info.data[0]}%-${info.data[1]}%魔法伤害`;
                break;
            case skill_1.SKILL_TYPE.random_Skill:
                temp += `游戏所有技能中随机一个技能释放`;
                break;
            case skill_1.SKILL_TYPE.stop_attack:
                temp += `让一个敌人${info.data[0]}回合不能释放任何技能`;
                break;
            case skill_1.SKILL_TYPE.up_Magic_fixed:
                temp += `每次触发提高${info.data[0]}魔法攻击`;
                break;
            case skill_1.SKILL_TYPE.up_Physics_fixed:
                temp += `每次触发提高${info.data[0]}物理攻击`;
                break;
            case skill_1.SKILL_TYPE.stop_attack_all:
                temp += `让一个敌人全体${info.data[0]}回合不能释放任何技能`;
                break;
            default:
                temp += `这个技能好像还没有收录到系统`;
                break;
        }
        return temp;
    }
    /**
     * 字符串相识度算法
     * @param x
     * @param y
     * @returns
     */
    xsd(x, y) {
        var z = 0;
        x = x.toUpperCase();
        y = y.toUpperCase();
        x = x.replace('_', '');
        y = y.replace('_', '');
        if (typeof x == "string") {
            x = x.split("");
            y = y.split("");
        }
        var s = x.length + y.length;
        x.sort();
        y.sort();
        var a = x.shift();
        var b = y.shift();
        while (a !== undefined && b != undefined) {
            if (a === b) {
                z++;
                a = x.shift();
                b = y.shift();
            }
            else if (a < b) {
                a = x.shift();
            }
            else if (a > b) {
                b = y.shift();
            }
        }
        return z / s * 200;
    }
}
exports.default = new common();
