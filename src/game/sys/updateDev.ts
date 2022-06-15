import { log } from '../..';
import bot from '../../unity/bot';
import { task_base } from './../task_base';
let isAcitve = false;
export class sys_update_code extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    async render() {
        if (isAcitve) {
            this.log('正在更新中,请勿重复更新')
            return;
        }
        let whiteMap = new Map();
        whiteMap.set('14139673525601401123', 1)
        whiteMap.set('18408854810586198036', 2)
        whiteMap.set('1081629992283146971', 2)

        if (!whiteMap.has(this.userId)) {
            this.log('你没有权限更新')
            return;
        }
        isAcitve = true;
        await bot.callAll(`开始更新版本\n本地版本号:V${bot.getDev()}\n开始获取更新最新版本信息...`)
        await this.updateCode()
    }
    runCmd(task: string) {
        return new Promise<string>((resolve, reject) => {
            const argv = process.argv
            const githref = argv[2]
            let child_process = require('child_process');
            child_process.exec(task, { cwd: githref }, async (error, stdout: string, stderr) => {
                if (error !== null) {
                    resolve('exec error: ' + error)
                } else {
                    resolve(stdout)
                }
            });
        })
    }
    async getLog() {
        let outText =  await this.runCmd('git log -n 1');
        let urlStartIndex = outText.indexOf('<')
        let urlEndIndex = outText.indexOf(">");
        outText = outText.replace(outText.slice(urlStartIndex, urlEndIndex + 1), '')
        outText = outText.replace('commit', '')
        outText = 'commit:' + outText;
        await bot.sendText(this.channel_id, outText)
        await this.log(`即将开始重启,大约耗时5秒`)
        setTimeout(() => {
            process.exit()
        }, 3000)
    }
    async updateCode() {
        await this.runCmd('git pull');
        this.getLog()
    }
}