"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_update_code = void 0;
const bot_1 = __importDefault(require("../../unity/bot"));
const task_base_1 = require("./../task_base");
let isAcitve = false;
class sys_update_code extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (isAcitve) {
                this.log('正在更新中,请勿重复更新');
                return;
            }
            let whiteMap = new Map();
            whiteMap.set('14139673525601401123', 1);
            whiteMap.set('18408854810586198036', 2);
            whiteMap.set('1081629992283146971', 2);
            if (!whiteMap.has(this.userId)) {
                this.log('你没有权限更新');
                return;
            }
            isAcitve = true;
            yield this.log(`本地版本号:V${bot_1.default.getDev()}\n开始获取更新最新版本信息...`);
            const argv = process.argv;
            const githref = argv[2];
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
            this.updateCode();
        });
    }
    getLog() {
        const argv = process.argv;
        const githref = argv[2];
        let child_process = require('child_process');
        child_process.exec(`git log -n 1`, { cwd: githref }, (error, stdout, stderr) => __awaiter(this, void 0, void 0, function* () {
            if (error !== null) {
                console.log('exec error: ' + error);
            }
            else {
                let str = stdout;
                let urlStartIndex = str.indexOf('<');
                let urlEndIndex = str.indexOf(">");
                str = str.replace(str.slice(urlStartIndex, urlEndIndex + 1), '');
                str = str.replace('commit', '');
                str = 'commit:' + str;
                yield bot_1.default.sendText(this.channel_id, str);
                yield this.log(`即将开始重启,大约耗时5秒`);
                setTimeout(() => {
                    process.exit();
                }, 3000);
            }
        }));
    }
    updateCode() {
        const argv = process.argv;
        const githref = argv[2];
        let child_process = require('child_process');
        child_process.exec(`git pull`, { cwd: githref }, (error, stdout, stderr) => __awaiter(this, void 0, void 0, function* () {
            if (error !== null) {
                console.log('exec error: ' + error);
            }
            else {
                this.getLog();
                // setTimeout(() => {
                //     process.exit()
                // }, 1000)
            }
        }));
    }
}
exports.sys_update_code = sys_update_code;
