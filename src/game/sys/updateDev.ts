import { dbName } from './../../unity/db';
import { log } from '../..';
import bot from '../../unity/bot';
import common from '../../shared/game/common';
import db from '../../unity/db';
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
        await bot.callAll(`开始更新版本\n本地版本号:V${bot.getDev()}\n开始获取更新最新版本信息...\n为了保证数据不会出错,请暂时不要艾特机器人。`)
        await this.updateCode()
        db.saveDirData(dbName.GuildCfg)
        db.saveDirData(dbName.UserCfg)
        isAcitve = false;
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
        let outText = await this.runCmd('git log -n 1');
        let urlStartIndex = outText.indexOf('<')
        let urlEndIndex = outText.indexOf(">");
        outText = outText.replace(outText.slice(urlStartIndex, urlEndIndex + 1), '')
        outText = outText.replace('commit', '')
        outText = 'commit:' + outText;
        outText = '\n:即将开始,重启需要耗时0.${common.random(0, 1000)}秒,请耐心等待';
        db.saveDirData(dbName.GuildCfg)
        await new Promise(rs => { setTimeout(rs, 10000) });
        await bot.callAll(outText)
        process.exit()
    }
    async updateCode() {
        await this.runCmd('git stash');
        await this.runCmd('git pull');
        // await this.runCmd('git stash pop ');
        this.getLog()
    }
}