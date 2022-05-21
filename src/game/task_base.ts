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
    /**
     * 用户艾特内容
     */
    content: string;
    /**
     * 触发指令
     */
    matchKey: string;
    userName:string;
    args:any[]
    constructor(...args){
        this.args = args;
        this.userId = args[0];
        this.channel_id = args[1];
        this.userIcon = args[2];
        this.content = args[3];
        this.matchKey = args[4];
        this.userName = args[5];
    }

}