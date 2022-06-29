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
exports.me_move = void 0;
const me_pos_1 = require("../me/me_pos");
const __1 = require("../..");
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("../task_base");
const PtlMove_1 = require("../../shared/protocols/map/PtlMove");
//TODO指令：移动 上 下 左 右
class me_move extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let direction;
            switch (this.content) {
                case '上':
                    direction = PtlMove_1.moveDirection.top;
                    break;
                case '下':
                    direction = PtlMove_1.moveDirection.buttom;
                    break;
                case '右':
                    direction = PtlMove_1.moveDirection.right;
                    break;
                case '左':
                    direction = PtlMove_1.moveDirection.left;
                    break;
                default:
                    break;
            }
            if (typeof (direction) == 'undefined') {
                (0, __1.err)('错误的移动', this.content);
                return;
            }
            let req = yield sever_1.default.callApi('map/Move', {
                direction: direction,
                userId: this.userId
            });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            new me_pos_1.me_pos(...this.args);
        });
    }
}
exports.me_move = me_move;
