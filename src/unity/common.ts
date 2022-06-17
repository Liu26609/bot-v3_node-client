import { equip } from "../shared/game/equip";
import { SKILL_ACTIVE, SKILL_TYPE } from "../shared/game/skill";

/**
 * 公共方法库
 */
class common {
    private rankMap: Map<number, string>
    constructor() {
        this.rankMap = new Map();
        this.rankMap.set(0, '🏆')
        this.rankMap.set(1, '🥈')
        this.rankMap.set(2, '🥉')
        this.rankMap.set(3, '4️⃣')
        this.rankMap.set(4, '5️⃣')
        this.rankMap.set(5, '6️⃣ ')
        this.rankMap.set(6, '7️⃣')
        this.rankMap.set(7, '8️⃣')
        this.rankMap.set(8, '9️⃣')
        this.rankMap.set(9, '🔟')
        this.rankMap.set(10, '⑪')
        this.rankMap.set(11, '⑫')
        this.rankMap.set(12, '⑬')
        this.rankMap.set(13, '⑭')
        this.rankMap.set(14, '⑮')
        this.rankMap.set(15, '⑯')
        this.rankMap.set(16, '⑰')
        this.rankMap.set(17, '⑱')
        this.rankMap.set(18, '⑲')
        this.rankMap.set(19, '⑳')
    }
    /**
     * 获取排行文字
     * @param index 
     * @returns 
     */
    getRankStr(index: number) {
        return this.rankMap.get(index) || `(${(index + 1).toString()})`
    }
    /**
     * 获取一个随机数
     */
    random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min
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
        } else {
            return false
        }
    }
    getSkDesc(info: SKILL_ACTIVE) {
        let temp = ``;
        switch (info.type) {
            case SKILL_TYPE.miss:
                temp += `对空气造成了成吨的伤害`
                break;
            case SKILL_TYPE.attack_Magic_fixed:
                temp += `对一个单位造成固定${info.data[0]}的🔮魔法伤害`
                break;
            case SKILL_TYPE.attack_Physics_fixed:
                temp += `对一个单位造成固定${info.data[0]}的🔪物理伤害`
                break;
            case SKILL_TYPE.attack_Magic_rang:
                temp += `对一个单位造成${(info.data[0]).toFixed(2)}%的🔮魔法伤害`
                break;
            default:
                temp += `这个技能好像还没有收录到系统`;
                break;
        }
        return temp;
    }
    /**
    * 装备属性转换
    * @param e 
    * @param keys 
    * @returns 
    */
    converEquipattribute(e: equip, keys: string) {
        let equipVal = e.base_attribute[keys] as number;
        let val = equipVal + equipVal * Math.pow(e.leve, 1.05) * Math.pow(e.quality + 1, 0.2);
        return val || 0
    }
    /**
     * 数组洗牌算法
     */
    randomArry(arr) {
        const newArr = [...arr]
        const length = newArr.length
        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * length);
            let temp;
            temp = newArr[index]
            newArr[index] = newArr[i]
            newArr[i] = temp
        }
        return newArr
    }
    /**
     * 字符串过滤数字无关的值
     * @param str 
     * @returns 
     */
    getNumber(str: string) {
        let numStr = str.replace(/[^0-9]/ig, "");
        return Number(numStr);
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
            } else if (a < b) {
                a = x.shift();
            } else if (a > b) {
                b = y.shift();
            }
        }
        return z / s * 200;
    }
    /**
     * 
     * @param number 
     * @param decimalDigit 小数长度
     * @returns 
     */
    BN(number: any, decimalDigit?: any) {
        decimalDigit = decimalDigit == null ? 2 : decimalDigit;
        let integer = Math.floor(number);
        let digit = this._getDigit(integer);
        // ['个', '十', '百', '千', '万', '十万', '百万', '千万']; 
        let unit: string[] = [];
        if (digit > 3) {
            let multiple = Math.floor(digit / 8);
            if (multiple >= 1) {
                let tmp = Math.round(integer / Math.pow(10, 8 * multiple));
                unit.push(this._addWan(tmp, number, 8 * multiple, decimalDigit) as any);
                for (let i = 0; i < multiple; i++) {
                    unit.push('亿');
                }
                return unit.join('');
            } else {
                return this._addWan(integer, number, 0, decimalDigit);
            }
        } else {
            return Math.ceil(number);
        }
    }
    toolNumber(num_str) {
        num_str = num_str.toString();
        if (num_str.indexOf("+") != -1) {
            num_str = num_str.replace("+", "");
        }
        if (num_str.indexOf("E") != -1 || num_str.indexOf("e") != -1) {
            let resValue;
            let power;
            let result;
            let dotIndex = 0;
            let resArr:any[] = [];
            let sym;
            var numStr = num_str.toString();
            if (numStr[0] == "-") {
                // 如果为负数，转成正数处理，先去掉‘-’号，并保存‘-’.
                numStr = numStr.substr(1);
                sym = "-";
            }
            if (numStr.indexOf("E") != -1 || numStr.indexOf("e") != -1) {
                var regExp = new RegExp(
                    "^(((\\d+.?\\d+)|(\\d+))[Ee]{1}((-(\\d+))|(\\d+)))$",
                    "ig"
                );
                result = regExp.exec(numStr);
                if (result != null) {
                    resValue = result[2];
                    power = result[5];
                    result = null;
                }
                if (!resValue && !power) {
                    return false;
                }
                dotIndex = resValue.indexOf(".") == -1 ? 0 : resValue.indexOf(".");
                resValue = resValue.replace(".", "");
                resArr = resValue.split("");
                if (Number(power) >= 0) {
                    var subres = resValue.substr(dotIndex);
                    power = Number(power);
                    //幂数大于小数点后面的数字位数时，后面加0
                    for (var i = 0; i <= power - subres.length; i++) {
                        resArr.push("0");
                    }
                    if (power - subres.length < 0) {
                        resArr.splice(dotIndex + power, 0, ".");
                    }
                } else {
                    power = power.replace("-", "");
                    power = Number(power);
                    //幂数大于等于 小数点的index位置, 前面加0
                    for (var i = 0; i < power - dotIndex; i++) {
                        resArr.unshift("0");
                    }
                    var n = power - dotIndex >= 0 ? 1 : -(power - dotIndex);
                    resArr.splice(n, 0, ".");
                }
            }
            resValue = resArr.join("");

            return sym + resValue;
        } else {
            return num_str;
        }
    }
    private _addWan(integer: any, number: any, mutiple: any, decimalDigit: any) {
        let me = this;
        let digit = me._getDigit(integer);
        if (digit > 3) {
            let remainder = digit % 8;
            if (remainder >= 5) { // ‘十万’、‘百万’、‘千万’显示为‘万’ 
                remainder = 4;
            }
            return Math.round(number / Math.pow(10, remainder + mutiple - decimalDigit)) / Math.pow(10, decimalDigit) + '万';
        } else {
            return Math.round(number / Math.pow(10, mutiple - decimalDigit)) / Math.pow(10, decimalDigit);
        }
    }
    private _getDigit(integer: any) {
        let digit = -1;
        while (integer >= 1) {
            digit++;
            integer = integer / 10;
        }
        return digit;
    }
}
export default new common();