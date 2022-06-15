import { taskTemp } from '../../game/taskTemp';
/**
 * 查看每日任务
 */
export interface ReqEverDayTask {
    userId: string
}

export interface ResEverDayTask extends taskTemp {}

// export const conf = {}