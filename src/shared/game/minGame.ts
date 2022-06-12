/**
 * 猜数
 */
export interface lottery{
    round:number,
    endTime:number,
    min:number,
    max:number,
    guessCont:number,
    /**
     * 正确的数字，客户端只返回0
     */
    correct:number,
    /**
     * 累计奖励
     */
    addup:number,
    /**
     * 上轮赢家昵称
     */
    lastWin:string
}