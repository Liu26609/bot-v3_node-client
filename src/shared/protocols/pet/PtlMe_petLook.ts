import { BASE_BODYS } from './../../game/body';
/**
 * 查看指定宠物
 */
export interface ReqMe_petLook {
    userId: string,
    index:number
}

export interface ResMe_petLook {
    base:BASE_BODYS
}

// export const conf = {}