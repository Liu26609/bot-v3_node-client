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
Object.defineProperty(exports, "__esModule", { value: true });
const tsrpc_1 = require("tsrpc");
const __1 = require("..");
const serviceProto_1 = require("../shared/protocols/serviceProto");
/**
 * 后台服务器
 */
class sever {
    constructor() {
        this._isReady = false;
    }
    isReady() {
        return this._isReady;
    }
    /**
     * 设置服务器地址
     * @param link
     */
    setApiUrl(link) {
        return __awaiter(this, void 0, void 0, function* () {
            this.apiUrl = link;
            this.client = new tsrpc_1.HttpClient(serviceProto_1.serviceProto, { server: this.apiUrl });
            return yield this.HelloWorld();
        });
    }
    /**
     * 调用API
     * @param apiName
     * @param posData
     * @param options
     * @returns
     */
    callApi(apiName, posData, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._isReady) {
                (0, __1.err)('服务器未就绪');
            }
            let res = yield this.client.callApi(apiName, posData);
            if (res.err) {
                switch (res.err.code) {
                    case 'ECONNREFUSED':
                        // 服务器未开启
                        this._isReady = false;
                        break;
                    default:
                        break;
                }
            }
            return res;
        });
    }
    HelloWorld() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield this.client.callApi('Hello', { name: 'World' });
            if (!data.isSucc) {
                (0, __1.err)('服务器测试通讯失败', data.err.message);
                return;
            }
            this._isReady = true;
            (0, __1.info)(data.res.reply);
        });
    }
}
exports.default = new sever();
