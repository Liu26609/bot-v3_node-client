export interface autoInfo {
    startTime: number,
    autoLeve: number
}
/**
 * 开始自动挂机
 */
export interface ReqstartAutoPlay {
    userId:string,
    autoLeve:number
}

export interface ResstartAutoPlay extends autoInfo {}
 
// export const conf = {}