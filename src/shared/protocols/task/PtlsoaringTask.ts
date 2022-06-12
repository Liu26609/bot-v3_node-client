import { taskTemp } from "../../game/taskTemp";

/**
 * 阶梯计划
 */
export interface ReqsoaringTask {
    userId: string
}

export interface RessoaringTask extends taskTemp {taskLeve:number}

// export const conf = {}