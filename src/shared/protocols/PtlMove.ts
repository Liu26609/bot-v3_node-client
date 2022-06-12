import { body, posV2 } from "../game/body"
/**
 * 移动
 */
export interface ReqMove {
    userId: string,
    direction: moveDirection
}
export enum moveDirection {
    top,
    right,
    buttom,
    left
}
export interface ResMove {
    // 当前地图名称
    pos_name:string,
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
    // enemy:body[],
    // 当前位置其他玩家,注意列表会包含自己
    player:body[],
    // 宝箱
    // chest:any[]
}