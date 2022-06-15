import { autoInfo } from "./PtlstartAutoPlay";
/**
 * 结束自动挂机
 */
export interface ReqendAutoPlay {
    userId:string
}

export interface ResendAutoPlay  extends autoInfo {}

// export const conf = {}