import { SKILL_ACTIVE } from './skill';
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
    base_attribute: base_attribute
    /**
     * 附带技能
     */
    skill_active_id?:number
    outSkillData?:SKILL_ACTIVE
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
    S,//="神器"
    SS,//="上古"
    SSS,//="作者专属"
    SSSS,
    R,
    SR,
    SSR,
    SSSR,
    SSSSR
}
export enum EQUIP_QUALITY_COLOR {
    G='#FFFFFF',//="破烂"
    F='#F8F8FF',//="战损"
    E='#BBFFFF',//="普通"
    D='#00C5CD',//="精良"
    C='#00F5FF',//="稀有"
    B='#1E90FF',//="史诗"
    A='#8470FF',//="传说"
    S='#A020F0',//="神器"
    SS='#FF00FF',//="上古"
    SSS='#F5DEB3',//="作者专属"
    SSSS='#FFFF00',//="作者专属"
    R='#CD5555',
    SR='#EE6363',
    SSR='#FF6A6A',
    SSSR='#FF69B4',
    SSSSR='#FF3030',
}
export enum EQUIP_TYPE {
    /**
     * 武器
     */
    weapons,
    /**
     * 副武器
     */
    subWeapon,
    /**
     * 衣服
     */
    clothes,
    /**
     * 饰品
     */
    necklace,
    /**
     * 帽子
     */
    hat,
    /**
     * 勋章
     */
    medal
}
export enum EQUIP_TYPE_ICON {
    /**
     * 武器
     */
    weapons='🗡️',
    subWeapon='🛡️',
    clothes='👕',
    necklace='🎄',
    /**
     * 帽子
     */
    hat='🎩',
    medal='🏅'
}
export enum EQUIP_TYPE_CN {
    /**
     * 武器
     */
    weapons='主武器',
    subWeapon='副武器',
    clothes='衣服',
    necklace='饰品',
    /**
     * 帽子
     */
    hat='帽子',
    medal='勋章'
}