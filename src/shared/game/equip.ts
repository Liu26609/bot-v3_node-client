import { base_attribute } from "./body";

export interface equip {
    icon:string,
    /**
     * 装备名称
     */
    name: string,
    story:string,
    /**
     * 品质
     */
    quality:EQUIP_QUALITY,

    /**
     * 装备类型
     */
    type: EQUIP_TYPE,
    /**
     * 强化等级
     */
    leve:number,
    /**
     * 基础属性
     */
    base_attribute: base_attribute,
    effect?:{type:EQUIP_EFFECT,val:number,trigger:number}[],
}
export enum EQUIP_EFFECT{
    /**
     * 每次攻击增加val点经验
     */
    attack_addExp
}
/**
 * 装备品质
 */
export enum EQUIP_QUALITY {
    G,//="破烂"
    F,//="战损"
    E,//="普通"
    D,//="精良"
    C,//="稀有"
    B,//="史诗"
    A,//="传说"
    s,//="神器"
    ss,//="上古"
    sss//="作者专属"
}
export enum EQUIP_QUALITY_CN {
    G="破烂",
    F="战损",
    E="普通",
    D="精良",
    C="稀有",
    B="史诗",
    A="传说",
    s="神器",
    ss="上古",
    sss="作者专属"
}
export enum EQUIP_TYPE {
    /**
     * 武器
     */
    weapons
}
export enum EQUIP_TYPE_CN {
    /**
     * 武器
     */
    weapons='武器'
}