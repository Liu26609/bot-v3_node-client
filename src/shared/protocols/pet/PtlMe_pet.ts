import { BASE_BODYS } from "../../game/body"
/**
 * 我的宠物
 */
export interface ReqMe_pet {
    userId: string
}

export interface ResMe_pet {
    petList:BASE_BODYS[]
}

// export const conf = {}