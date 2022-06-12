/**
 * 复活治疗接口
 * 正常情况下死亡会在下一次请求任意API时复活
 */
export interface ReqResLife {
    userId: string
}

export interface ResResLife {}

// export const conf = {}