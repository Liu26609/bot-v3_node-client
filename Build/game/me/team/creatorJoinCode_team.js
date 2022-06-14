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
exports.creatorJoinCode_team = void 0;
const bot_1 = __importDefault(require("../../../unity/bot"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("./../../task_base");
class creatorJoinCode_team extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('team/CreatorJoinCode_team', { userId: this.userId });
            if (req.err) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            yield bot_1.default.sendText(this.channel_id, `请尽快发给邀请人加入\n@${bot_1.default.getBot_name()} + 邀请码 即可加入工会\n↓↓↓工会加入邀请码↓↓↓`);
            bot_1.default.sendText(this.channel_id, `加入工会${data.code}`);
        });
    }
}
exports.creatorJoinCode_team = creatorJoinCode_team;
