import { DNA_Leve } from './../../game/body';
import { ResBattle } from "../PtlBattle";

export interface ReqChallenge_image {
    userId:string,
    isStart:boolean
}

export interface ResChallenge_image {
    battle?:ResBattle,
    isMax:boolean,
    /**
     * 下一级基因锁
     */
    nextDNA:DNA_Leve,
    /**
     * 镜像等级
     */
    imageLeve:number,
    /**
     * 镜像基因锁
     */
    imageDNALeve:DNA_Leve,
    /**
     * 挑战胜利将增幅属性
     */
    winAdd:number,
    /**
     * 失败将扣除等级
     */
    failDel:number,
}

// export const conf = {}