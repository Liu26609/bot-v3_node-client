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
exports.sendImage = void 0;
const node_fetch_1 = require("node-fetch");
const form_data_1 = __importDefault(require("form-data")); ////需要自己安装
const fs_1 = __importDefault(require("fs"));
const bot_1 = __importDefault(require("./bot"));
function sendImage(msgId, channel_id, picName) {
    return __awaiter(this, void 0, void 0, function* () {
        picName = (picName === null || picName === void 0 ? void 0 : picName.startsWith("/")) ? picName : `./${picName}`;
        console.debug(`upload11ing ${picName}`);
        var picData = fs_1.default.createReadStream(picName);
        var formdata = new form_data_1.default();
        formdata.append("msg_id", msgId);
        //formdata.append("content", "123456");
        formdata.append("file_image", picData);
        yield (0, node_fetch_1.default)(`https://api.sgroup.qq.com/channels/${channel_id}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": formdata.getHeaders()["content-type"],
                "Authorization": `Bot ${bot_1.default.getBotConfig().appID}.${bot_1.default.getBotConfig().token}`
            },
            body: formdata
        }).then((res) => __awaiter(this, void 0, void 0, function* () {
            const body = yield res.json();
            if (body) {
                console.log('img send succress');
            }
        })).catch(error => {
            console.error('img send error');
        });
    });
}
exports.sendImage = sendImage;
