/**
 * 公共方法库
 */
class common {
    constructor(){

    }
    /**
     * 获取一个随机数
     */
    random(min:number,max:number){
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
}
export default new common();