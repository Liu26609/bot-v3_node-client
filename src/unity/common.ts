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
    BN(value) {
        const newValue = ['', '', '']
        let fr = 1000
        let num = 3;
        let text1 = ''
        let fm = 1
        value = Math.ceil(value)
        while (value / fr >= 1) {
            fr *= 10
            num += 1
            // console.log('数字', value / fr, 'num:', num)
        }
        if (num <= 4) { // 千
            newValue[0] = parseInt(value / 1000) + ''
            newValue[1] = '千'
        } else if (num <= 8) { // 万
            text1 = parseInt(num - 4) / 3 > 1 ? '千万' : '万'
            // tslint:disable-next-line:no-shadowed-variable
            fm = text1 === '万' ? 10000 : 10000000
            if (value % fm === 0) {
                newValue[0] = parseInt(value / fm) + ''
            } else {
                newValue[0] = parseFloat(value / fm).toFixed(2) + ''
            }
            newValue[1] = text1
        } else if (num <= 16) { // 亿
            text1 = (num - 8) / 3 > 1 ? '千亿' : '亿'
            text1 = (num - 8) / 4 > 1 ? '万亿' : text1
            text1 = (num - 8) / 7 > 1 ? '千万亿' : text1
            // tslint:disable-next-line:no-shadowed-variable
            fm = 1
            if (text1 === '亿') {
                fm = 100000000
            } else if (text1 === '千亿') {
                fm = 100000000000
            } else if (text1 === '万亿') {
                fm = 1000000000000
            } else if (text1 === '千万亿') {
                fm = 1000000000000000
            }
            if (value % fm === 0) {
                newValue[0] = parseInt(value / fm) + ''
            } else {
                newValue[0] = parseFloat(value / fm).toFixed(2) + ''
            }
            newValue[1] = text1
        }
        if (value < 1000) {
            newValue[0] = value + ''
            newValue[1] = ''
        }
        return newValue.join('')
    }
}
export default new common();