import bot from "../../../unity/bot";
let titleSize = new Map();

export class text_style {
    private title: string;
    private list: string[]
    private end: string;
    constructor() {
        this.title = '未命名';
        this.list = new Array();
        this.end = `┗┄━═════════━┄`
        return this;

    }
    setTitle(title: string) {
        let before = '┏┄';
        let later = ''
        let safeLength = 16;
        let surplus = Math.ceil((safeLength - title.length)/2) > 0 ? Math.ceil((safeLength - title.length)/2):2;
        for (let index = 0; index < Math.ceil(surplus / 3); index++) {
            before += `═`;
            later += `═`;
        }
        later += `━┄`;
        this.title = `${before}${title}${later}`
    }
    setEnd(end: string) {
        this.end = end;
    }
    addLine(str: string) {
        this.list.push(str)
    }
    sendMsg(channelId: string,triggerKey?:string) {
        let temp = `${this.title}\n`;
        for (let index = 0; index < this.list.length; index++) {
            const item = this.list[index];
            temp += item + '\n';
        }
        temp += this.end;
        return bot.sendText(channelId, temp,triggerKey)
    }
}