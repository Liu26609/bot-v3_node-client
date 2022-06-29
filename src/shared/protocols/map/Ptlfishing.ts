/**
 * 在当前位置钓鱼
 */
export interface Reqfishing {
    userId:string,
}

export interface Resfishing {
    jin:number,
    fish: string,
    reward:number,
    tips:string | undefined
}

// export const conf = {}