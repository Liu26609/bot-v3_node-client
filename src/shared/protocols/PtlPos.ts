import {body, posV2,BASE_BODYS } from "../game/body";
import { chestBox } from "../game/prop";
/**
 * 当前位置接口
 */
export interface ReqPos {
    userId: string
}

export interface ResPos {
    // 当前地图名称
    pos_name:string,
    posTiledId:number,
    // 当前位置
    pos:posV2,
    // 是否能上移动
    isTop:boolean,
    // 是否能下移动
    isButtom:boolean,
    // 是否能右移动
    isRight:boolean,
    // 是否能左移动
    isLeft:boolean,
    // 当前位置的怪物
    enemy:BASE_BODYS[],
    // 当前位置其他玩家,注意列表会包含自己
    player:body[],
    // 宝箱
    chest:chestBox[],
    /**
     * 我的头像
     */
    meIcon:string,
}