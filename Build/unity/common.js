"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 公共方法库
 */
class common {
    constructor() {
    }
    /**
     * 获取一个随机数
     */
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
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
    * 装备属性转换
    * @param e
    * @param keys
    * @returns
    */
    converEquipattribute(e, keys) {
        let equipVal = e.base_attribute[keys];
        let val = equipVal + equipVal * Math.pow(e.leve, 1.05) * Math.pow(e.quality, 0.9);
        return val || 0;
    }
    xsd(x, y) {
        let z = 0;
        x = x.toUpperCase();
        y = y.toUpperCase();
        x = x.replace('_', '');
        y = y.replace('_', '');
        if (typeof x == "string") {
            x = x.split("");
            y = y.split("");
        }
        let s = x.length + y.length;
        x.sort();
        y.sort();
        let a = x.shift();
        let b = y.shift();
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
            return number;
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
}
exports.default = new common();
