export class text_length {
    str: string;
    constructor() {
        this.str = '';
    }
    countBanJiao(str:string) {
        let len = this.countArr(str.match(/[\u0000-\u00ff]/g));
        this.str = str.replace((/[\u0000-\u00ff]/g), "");
        return len;
    }

    countQuanJiao(str:string) {
        return this.countArr(str.match(/[\uff00-\uffff]/g));
    }

    countHanZi(str:string) {
        return this.countArr(str.match(/[\u4e00-\u9fa5]/g));
    }

    emoji_str(str:string) {
        let len = this.countArr(str.match(/\<emoji:.*?\>/g));
        this.str = this.str.replace((/\<emoji:.*?\>/g), "");
        return len;
        // return this.countArr(str.match(/[\u4e00-\u9fa5]/g));
    }
    emoji(str:string) {
        let regStr = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g
        let len = this.countArr(str.match(regStr));

        this.str = this.str.replace(regStr, "");
        return len

    }
    /**
     * 是否合法
     * @param str 
     * @returns 
     */
    islegal(str:string){
       let reg = new RegExp("^[A-Za-z0-9\u4e00-\u9fa5]+$");
       if(reg.test(str)){
           return true;
       }else{
           return false
       }
    }
    isNull(str:string){
        if(str.length == 0){
            return true;
        }
        if(str == ''){
            return true;
        }
        return false;
    }

    getlength(str:string) {
        this.str = str;
        
        let emoji_str = this.emoji_str(this.str);
        let emoji = this.emoji(this.str);
        let banjiao = this.countBanJiao(this.str);
        let quanjiao = this.countQuanJiao(this.str);
        let hanzi = this.countHanZi(this.str);
        let allLen = banjiao + (quanjiao + hanzi) + emoji + emoji_str;

        // let allLen = this.emoji(str);
        return allLen
    }
    countArr(arr:any):number {
        return arr == null ? 0 : arr.length;
    }
}