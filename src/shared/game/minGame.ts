import { HORSE_STATE } from "../protocols/minGame/PtlHorse"

/**
 * 猜数
 */
export interface lottery {
    round: number,
    endTime: number,
    min: number,
    max: number,
    guessCont: number,
    /**
     * 正确的数字，客户端只返回0
     */
    correct: number,
    /**
     * 累计奖励
     */
    addup: number,
    /**
     * 上轮赢家昵称
     */
    lastWin: string
}
export interface horse {
    /**
     * 比赛回合数
     */
    round: number,
    /**
     * 第几个胜利
     */
    winEnd:number,
    /**
     * 参赛人员列表
     */
    EntryList: {
        /**
         * 用户id
         */
        id: string,
        /**
         * 用户头像
         */
        userIcon:string,
        /**
         * 参赛宠物昵称
         */
        petName:string,
        /**
         * 参赛宠物icon
         */
        petIcon:string,
        /**
         * 当前位置
         */
        nowCont:number,
        /**
         * 是否完成了比赛
         */
        isEnd:boolean,
        winEnd:number,
    }[],
    /**
     * 胜利路程
     */
    winCont:number,
    /**
     * 比赛状态
     */
    state:HORSE_STATE,
    /**
     * 上轮赢家
     */
    lastWin:string
}