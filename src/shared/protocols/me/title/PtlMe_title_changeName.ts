import { payRes } from "../../../game/prop";
/**
 * 称号改名
 */
export interface ReqMe_title_changeName {
    /**
     * 修改的名称
     */
    changeName:string,
    userId:string
}

export interface ResMe_title_changeName {
    pay:payRes,
}

// export const conf = {}