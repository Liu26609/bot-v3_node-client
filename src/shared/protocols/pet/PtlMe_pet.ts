import { BASE_BODYS } from "../../game/body"

export interface ReqMe_pet {
    userId: string
}

export interface ResMe_pet {
    petList:BASE_BODYS[]
}

// export const conf = {}