import { taskTemp } from "../../game/taskTemp";

/**
 * 阶梯任务
 */
export interface ReqsoaringTask {
    userId: string
}

export interface RessoaringTask extends taskTemp {taskLeve:number}

// export const conf = {}