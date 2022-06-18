"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skill_1 = require("./skill");
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
        return val || 0;
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
                temp += `对一个单位造成${(info.data[0]).toFixed(2)}%的🔪魔法伤害`;
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