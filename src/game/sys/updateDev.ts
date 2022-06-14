import bot from '../../unity/bot';
import { task_base } from './../task_base';
export class sys_update_code extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    render() {
        this.log(`本地版本号:V${bot.getDev()}\n开始获取更新最新版本`)
        const argv = process.argv
        const githref = argv[2]
        let child_process = require('child_process');
        child_process.exec(`git add . && git commit -m 'codeAutoTest' && npm version patch && git push --all`, { cwd: githref }, (error, stdout, stderr) => {
            if (error !== null) {
                console.log('exec error: ' + error);
            } else {
                bot.sendText(this.channel_id, stdout)
                this.log(`更新完成,开始重启`)
                // console.log(stdout)
            }
        });
    }
}