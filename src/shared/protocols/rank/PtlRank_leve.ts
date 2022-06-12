/**
 * 等级排行榜
 */
export interface ReqRank_leve {
    userId: string
}

export interface ResRank_leve {
    /**
         * 排行列表
         */
    list: {
        val: number,
        name: string,
        icon?:string,
        id: string
    }[],
    /**
     * 我的排名
     */
    meIndex: number
}

// export const conf = {}