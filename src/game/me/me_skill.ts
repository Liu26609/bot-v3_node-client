import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class me_skill extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        //         ┄════👑我的背包═══━┄
        // [0](破烂)吃水果的叉子+0
        // ┗┄━══════════━┄
        // ┏┄════👑指令提示═══━┄
        // [查看背包装备 + 数字]查看指定装备属性
        // [穿装备 + 数字]装备上指定装备
        // [销毁装备 + 数字]丢弃指定装备
        // [销毁全部装备]丢弃背包全部装备
        // [拍卖装备 + 数字]拍卖指定装备
        // ┗┄━══════════━┄
        let req = await sever.callApi('Me_skill',{userId:this.userId});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = ` ┏┄┄👑我的技能━┄\n`;
        for (let index = 0; index < data.skillList.length; index++) {
            const name = data.skillList[index];
            temp += `[${index}]${name}\n`;
        }
        temp += `┗┄━${this.at()}━┄`
        await bot.sendText(this.channel_id,temp)

        let temps = ``;
        temps += `┏┄══👑指令提示═━┄\n`;
        temps += `[查询技能 + 名称]查询技能详细\n`;
        temps += `[遗忘技能 + 数字]废弃指定技能\n`;
        temps += `┗┄━━━━━━━━━┄\n`;
        bot.sendText(this.channel_id,temps)
    }
}