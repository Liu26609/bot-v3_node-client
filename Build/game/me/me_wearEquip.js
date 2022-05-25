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
exports.me_wearEquip = void 0;
const tsrpc_1 = require("tsrpc");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
class me_wearEquip extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let wearIndex = this.content.replace(this.matchKey, '');
            if (wearIndex == '') {
                this.sendErr({
                    message: '需要装备的id不能为空',
                    type: tsrpc_1.TsrpcErrorType.ApiError
                });
                return;
            }
            if (isNaN(Number(wearIndex))) {
                this.sendErr({
                    message: '需要装备的id只能是数字',
                    type: tsrpc_1.TsrpcErrorType.ApiError
                });
                return;
            }
            if (Number(wearIndex) < 0) {
                this.sendErr({
                    message: '需要装备的id不能是负数',
                    type: tsrpc_1.TsrpcErrorType.ApiError
                });
                return;
            }
            if (Math.ceil(Number(wearIndex)) != Number(wearIndex)) {
                this.sendErr({
                    message: '需要装备的id不能是小数点',
                    type: tsrpc_1.TsrpcErrorType.ApiError
                });
                return;
            }
            if (Number(wearIndex) > 100) {
                this.sendErr({
                    message: '需要装备的的id太大了',
                    type: tsrpc_1.TsrpcErrorType.ApiError
                });
                return;
            }
            let req = yield sever_1.default.callApi('Me_wearEquip', { userId: this.userId, wearIndex: Number(wearIndex) });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            bot_1.default.sendText(this.channel_id, '装备成功辣！');
        });
    }
}
exports.me_wearEquip = me_wearEquip;
