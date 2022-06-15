import { payRes } from './../../game/prop';
/**
 * 捕捉当前位置怪物
 */
export interface ReqDocile {
    userId:string,
    index:number
}

export interface ResDocile {
    succress:boolean,//是否成功
    pay:payRes,//消耗精灵球
}

// export const conf = {}