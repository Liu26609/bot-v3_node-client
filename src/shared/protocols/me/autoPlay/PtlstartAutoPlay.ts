export interface autoInfo {
    startTime: number,
    channel_id:string,
    id:string,
}
/**
 * 开始自动挂机
 */
export interface ReqstartAutoPlay {
    userId:string,
    channel_id:string
}

export interface ResstartAutoPlay extends autoInfo {}
 
// export const conf = {}