import bot from "../../../unity/bot";

export class embed_style {
    private title: string;
    private icon: string;
    private tips: string;
    private list: { name: string }[]
    constructor() {
        this.title = '未命名';
        this.icon = '';
        this.tips = '未设置';
        this.list = new Array();
        return this;

    }
    setTitle(title: string) {
        this.title = title;
    }
    setIcon(url: string) {
        this.icon = url;
    }
    setTips(str: string) {
        this.tips = str;
    }
    addLine(str: string) {
        this.list.push({ name: str })
    }
    sendMsg(channelId: string) {
        let sendObj = {
            title: this.title,
            thumbnail: {
                url: this.icon
            },
            prompt: this.tips,
            fields: [...this.list]
        }
        bot.sendEmbed(channelId,sendObj)
    }
}