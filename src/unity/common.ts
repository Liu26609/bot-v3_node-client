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
}
export default new common();