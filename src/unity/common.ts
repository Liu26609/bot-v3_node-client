import { equip } from "../shared/game/equip";

/**
 * 公共方法库
 */
class common {
    constructor() {

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
    /**
    * 装备属性转换
    * @param e 
    * @param keys 
    * @returns 
    */
    converEquipattribute(e: equip, keys: string) {
        let equipVal = e.base_attribute[keys] as number;
        let val = equipVal + equipVal * Math.pow(e.leve, 1.05) * Math.pow(e.quality, 0.9);
        return val || 0
    }
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
            } else if (a < b) {
                a = x.shift();
            } else if (a > b) {
                b = y.shift();
            }
        }
        return z / s * 200;
    }
    BN(num:number) {
        let strLength = num.toString().length;
        let str = num.toString();
        const units = ['千', '万', '亿', '兆', '千兆', '亿兆', '京', '千京', '亿京', '垓', '千垓', '千垓', '秭'];
        if (strLength <= 3) {

            return str;

        } else if (strLength > 42) {

            return 999 + 'max';

        } else {

            const unitIndex = Math.ceil(strLength / 3) - 2

            const unit = units[unitIndex]

            const leftLength = strLength - (3 * (Math.ceil(strLength / 3) - 1))

            return str.substring(0, leftLength) + '.' + str.substring(leftLength, leftLength + 2) + unit

        }
    }
}
export default new common();