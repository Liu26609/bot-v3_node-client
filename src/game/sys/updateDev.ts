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
        if(isAcitve){
            this.log('正在更新中,请勿重复更新')
            return;
        }
        isAcitve = true;
        let whiteMap = new Map();
        whiteMap.set('14139673525601401123',1)
        whiteMap.set('18408854810586198036',2)
        
        if(!whiteMap.has(this.userId)){
            this.log('你没有权限更新')
            return;
        }
        await this.log(`本地版本号:V${bot.getDev()}\n开始获取更新最新版本信息...`)
        const argv = process.argv
        const githref = argv[2]
        let child_process = require('child_process');
        // child_process.exec(`git add . && git commit -m 'codeAutoTest' && npm version patch && git push --all`, { cwd: githref }, (error, stdout, stderr) => {
        //     if (error !== null) {
        //         console.log('exec error: ' + error);
        //     } else {
        //         bot.sendText(this.channel_id, stdout)
        //         this.log(`更新完成,开始重启`)
        //         // console.log(stdout)
        //     }
        // });
        this.updateCode()
    }
    getLog() {
        const argv = process.argv
        const githref = argv[2]
        let child_process = require('child_process');
        child_process.exec(`git log -n 1`, { cwd: githref }, async (error, stdout: string, stderr) => {
            if (error !== null) {
                console.log('exec error: ' + error);
            } else {
                let str = stdout;
                let urlStartIndex = str.indexOf('<')
                let urlEndIndex = str.indexOf(">");
                str = str.replace(str.slice(urlStartIndex, urlEndIndex + 1), '')
                str = str.replace('commit', '')
                str = 'commit:' + str;
                await bot.sendText(this.channel_id, str)
                await this.log(`即将开始重启,大约耗时5秒`)
                setTimeout(() => {
                    process.exit()
                }, 3000)
            }
        });
    }
    updateCode() {
        const argv = process.argv
        const githref = argv[2]
        let child_process = require('child_process');
        child_process.exec(`git pull`, { cwd: githref }, async (error, stdout: string, stderr) => {
            if (error !== null) {
                console.log('exec error: ' + error);
            } else {
                this.getLog()
                // setTimeout(() => {
                //     process.exit()
                // }, 1000)
            }
        });
    }
}