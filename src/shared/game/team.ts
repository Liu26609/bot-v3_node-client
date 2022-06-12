import { base_attribute } from "./body";

export interface team_info{
    name:string,
    id:string,
    leve:number,
    exp:number,
    maxExp:number,
    userCont:number,
    maxUserCont:number,
    /**
     * 工会贡献
     */
    contribution:number,
    /**
     * 工会增益
     */
    gain:base_attribute,
}
export enum teamLeve{
    creator,//创建者
    teamMember,//成员
}
export enum teamLeve_CN{
    creator = '会长',//创建者
    teamMember = '成员',//成员
}