import bot from "../../../unity/bot";

export class text_style {
    private title: string;
    private list: string[]
    private end: string;
    constructor() {
        this.title = '未命名';
        this.list = new Array();
        this.end = `┗┄━══════════━┄`
        return this;

    }
    setTitle(title: string) {
        this.title = title;
    }
    setEnd(end: string) {
        this.end = end;
    }
    addLine(str: string) {
        this.list.push(str)
    }
    sendMsg(channelId: string,triggerKey?) {
        let temp = `${this.title}\n`;
        for (let index = 0; index < this.list.length; index++) {
            const item = this.list[index];
            temp += item + '\n';
        }
        temp += this.end;
        return bot.sendText(channelId, temp,triggerKey)
    }
}