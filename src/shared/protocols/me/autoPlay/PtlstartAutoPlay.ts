export interface autoInfo {
    startTime: number
}
/**
 * 开始自动挂机
 */
export interface ReqstartAutoPlay {
    userId:string,
}

export interface ResstartAutoPlay extends autoInfo {}
 
// export const conf = {}