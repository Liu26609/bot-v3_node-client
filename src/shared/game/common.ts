import { log } from 'console';
import { equip } from "./equip";
import { SKILL_ACTIVE, SKILL_TYPE } from './skill';

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
   /**
    * 获取一个随机数
    */
   random(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min
   }
   getObjSize(obj: any) {
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
   getNumber(str: string) {
      let numStr = str.replace(/[^0-9]/ig, "");
      return Number(numStr);
   }
   /**
     * 文字是否合法
     * @param str 
     * @returns 
     */
   islegal(str: string) {
      let reg = new RegExp("^[A-Za-z0-9\u4e00-\u9fa5]+$");
      if (reg.test(str)) {
         return true;
      } else {
         return false
      }
   }
   /**
    * 数组洗牌算法
    */
   randomArry(arr: number[]) {
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
   * 判定两个时间戳是否为同一天
   * @param t 
   * @returns 
   */
   isOneDay(t: number) {
      return new Date(t).toDateString() === new Date().toDateString();
   }
   /**
    * 判断两个时间戳相差多少天
    * @param startDate 
    * @param enDate 
    * @returns 
    */
   getDaysBetween(startDate: number, enDate: number) {
      const sDate = startDate
      const eDate = enDate
      if (sDate === eDate) {
         return 0
      }
      const days = (Math.abs(eDate - sDate)) / (1 * 24 * 60 * 60 * 1000)
      return Math.floor(days)
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
         case SKILL_TYPE.attack_Physics_rang:
            temp += `对一个单位造成${(info.data[0]).toFixed(2)}%的🔪物理伤害`
            break;
         case SKILL_TYPE.creator_shadow:
            temp += `创造${info.data[1]}个镜像分身,分身有自身${(info.data[0]).toFixed(2)}%属性,但只会存在一回合`
            break;
         case SKILL_TYPE.continuity_Physics:
            // 连续攻击N次，每次攻击为魔法攻击的百分比属性 参数1:攻击次数 参数2:每次攻击最小的伤害 参数3:每次攻击最大的伤害
            temp += `连续攻击${info.data[0]}次，每次攻击为物理攻击的百分比[${info.data[1]}%-${info.data[2]}]%`
            break;
         case SKILL_TYPE.continuity_Magic:
            // 连续攻击N次，每次攻击为魔法攻击的百分比属性 参数1:攻击次数 参数2:每次攻击最小的伤害 参数3:每次攻击最大的伤害
            temp += `连续攻击${info.data[0]}次，每次攻击为魔法攻击的百分比[${info.data[1]}%-${info.data[2]}]%`
            break;
         case SKILL_TYPE.forever_steal_skill:
            // 有N概率永久复制对方技能
            temp += `有${info.data[0]}%概率永久复制对方技能`
            break;
         case SKILL_TYPE.upMagicDefense_fixed:
            // 每触发一次提高N点物理防御
            temp += `每触发一次提高${info.data[0]}点魔法防御`
            break;
         case SKILL_TYPE.upPhysicalDefense_fixed:
            // 每触发一次提高N点物理防御
            temp += `每触发一次提高${info.data[0]}点物理防御`
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
   xsd(x: any, y: any) {
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
}
export default new common();