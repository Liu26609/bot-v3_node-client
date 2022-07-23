import {  ResStrengthen_wearEquip } from "./PtlStrengthen_wearEquip";

export interface ReqStrengthen_bagEquip {
    userId:string,
    bagIndex:number,
}

export interface ResStrengthen_bagEquip extends ResStrengthen_wearEquip {}

// export const conf = {}