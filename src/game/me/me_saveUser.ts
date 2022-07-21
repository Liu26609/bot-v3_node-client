import { text_style } from './../temp/text/text_style';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class me_saveUser extends task_base {
    constructor(...a) {
        super(...a)
        this.render()
    }
    async render() {
        let req = await sever.callApi('MeSave', { userId: this.userId })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let temp = new text_style();
        temp.setTitle(`┏┄══📄存档成功═━┄`)
        temp.addLine(`此功能说明：`)
        temp.addLine(`服务器每1小时统一存档,期间更新将会回档到上次保存数据,你可以手动存档减少损失`)
        temp.addLine(`大部分时间你无须执行此功能。`)
        temp.sendMsg(this.channel_id)
    }
}