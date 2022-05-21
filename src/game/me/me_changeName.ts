import { embed_style } from './../temp/embed/embed';
import { TsrpcErrorType } from 'tsrpc';
import bot from '../../unity/bot';
import common from '../../unity/common';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class me_changeName extends task_base {
    constructor(...a) {
        super(...a)
        this.render()
    }
    async render() {
        let changeName = this.content.replace(this.matchKey, '');
        if (changeName.length <= 0) {
            this.sendErr({
                message: '要修改的名字不能为空',
                type: TsrpcErrorType.ApiError
            })
            return;
        }
        if(changeName.length > 10){
            this.sendErr({
                message: '要修改的名字太长辣！',
                type: TsrpcErrorType.ApiError
            })
            return;
        }
        if(!common.islegal(changeName)){
            this.sendErr({
                message: `名称:${changeName}\n此昵称不符合规范\n只能起中文,字母,数字的名字`,
                type: TsrpcErrorType.ApiError
            })
            return;
        }
        let req = await sever.callApi('Me_changeName',{userId:this.userId,changeName:changeName});
        if(req.err){
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = ``;
        temp += `┏┄════🕊️改名成功═══━┄\n`
        temp += `┣改头换面，开始了全新的生活~\n`
        temp += `┣┄════🧸之前名称═══━┄\n`
        temp += `┣┄${data.lastName}\n`;
        temp += `┣┄════🎋新的名称═══━┄\n`
        temp += `┣┄${data.newName}\n`;
        temp += `┗┄━═══════════━┄\n`;
        bot.sendText(this.channel_id,temp);

        let temps = new embed_style();
        temps.setTitle('🕊️改名成功')
        temps.setIcon(this.userIcon);
        temps.setTips('改名成功辣！')
        temps.addLine(`改头换面，开始了全新的生活~`)
        temps.addLine(`🧸之前名称═══━┄`)
        temps.addLine(`┣┄${data.lastName}`)
        temps.addLine(`🎋新的名称═══━┄`)
        temps.addLine(`┣┄${data.newName}`)

        temps.sendMsg(this.channel_id)
    }
}