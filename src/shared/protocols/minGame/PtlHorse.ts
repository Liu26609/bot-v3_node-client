import { walletKey } from "../../game/user"

export interface ReqHorse {
    userId: string,
    type:HORSE_TYPE,
    joinPetIndex?:number,
    
}
export enum HORSE_TYPE{
    look,
    join,
    update
}
export enum HORSE_STATE{
    /**
     * 等待中
     */
    wait,
    /**
     * 比赛中
     */
    play
}
export interface ResHorse {
    state:HORSE_STATE,
    /**
     * 第几次赛事
     */
    round:number,
    /**
     * 当前参赛人数
     */
    nowCont:number,
    /**
     * 最大参赛人数
     */
    maxCont:number,
    /**
     * 赛事总共奖励
     */
    allGift:number,
    /**
     * 参赛价格
     */
    buyCondition:{ key: walletKey, val: number }
}

// export const conf = {}