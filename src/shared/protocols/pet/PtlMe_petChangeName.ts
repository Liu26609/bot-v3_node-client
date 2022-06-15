import { payRes } from './../../game/prop';
/**
 * 宠物改名
 */
export interface ReqMe_petChangeName {
    userId: string,
    index:number,
    name:string
}

export interface ResMe_petChangeName {
    pay:payRes
}

// export const conf = {}