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
const db_1 = require("./../../unity/db");
const bot_1 = __importDefault(require("../../unity/bot"));
const db_2 = __importDefault(require("../../unity/db"));
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
            yield bot_1.default.callAll(`开始更新版本\n本地版本号:V${bot_1.default.getDev()}\n开始获取更新最新版本信息...\n为了保证数据不会出错,请暂时不要艾特机器人。`);
            yield this.updateCode();
            db_2.default.saveDirData(db_1.dbName.GuildCfg);
            db_2.default.saveDirData(db_1.dbName.UserCfg);
            isAcitve = false;
        });
    }
    runCmd(task) {
        return new Promise((resolve, reject) => {
            const argv = process.argv;
            const githref = argv[2];
            let child_process = require('child_process');
            child_process.exec(task, { cwd: githref }, (error, stdout, stderr) => __awaiter(this, void 0, void 0, function* () {
                if (error !== null) {
                    resolve('exec error: ' + error);
                }
                else {
                    resolve(stdout);
                }
            }));
        });
    }
    getLog() {
        return __awaiter(this, void 0, void 0, function* () {
            let outText = yield this.runCmd('git log -n 1');
            let urlStartIndex = outText.indexOf('<');
            let urlEndIndex = outText.indexOf(">");
            outText = outText.replace(outText.slice(urlStartIndex, urlEndIndex + 1), '');
            outText = outText.replace('commit', '');
            outText = 'commit:' + outText;
            outText = '\n:即将开始,重启需要耗时0.${common.random(0, 1000)}秒,请耐心等待';
            db_2.default.saveDirData(db_1.dbName.GuildCfg);
            yield new Promise(rs => { setTimeout(rs, 10000); });
            yield bot_1.default.callAll(outText);
            process.exit();
        });
    }
    updateCode() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.runCmd('git stash');
            yield this.runCmd('git pull');
            // await this.runCmd('git stash pop ');
            this.getLog();
        });
    }
}
exports.sys_update_code = sys_update_code;
