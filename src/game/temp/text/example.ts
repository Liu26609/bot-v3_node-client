import bot from "../../../unity/bot";

export class text_example_style {
    private command:string
    private example:string;
    constructor(){
        this.example = `测试`
        this.command = '测试指令：测试 + 测试1';
    }
    /**
     * 改名 + 你的名字
     * <emoji:147>改名指令：改名 + 你的名字
     * @param str 
     * @returns 
     */
    setCommand(str:string){
        this.command = str;
        return this;
    }
    setExample(str:string){
        this.example = str;
        return this;
    }
    sendMsg(channelId: string) {
        let temp = `┏@${bot.getBot_name()},输入以下指令┄\n`;
        temp += `▶️${this.command}\n`
        temp += `🌰栗子:@${bot.getBot_name()} ${this.example}\n`
        temp += `┗┄━══════════━┄`
        bot.sendText(channelId,temp);
    }
}