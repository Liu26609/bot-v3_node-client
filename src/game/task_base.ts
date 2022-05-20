/**
 * 指令基类
 */
export class task_base{
    /**
     * 用户ID
     */
    userId: string;
    /**
     * 用户频道来源
     */
    channel_id: string;
    /**
     * 用户头像
     */
    userIcon:string;
    constructor(...args){
        this.userId = args[0];
        this.channel_id = args[1];
        this.userIcon = args[2];
    }

}