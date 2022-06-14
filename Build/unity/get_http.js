"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
// 不需要 body 的请求
const noBodyReqs = ['head', 'get', 'copy', 'purge', 'unlock'];
// 可能需要 body 的请求
const hasBodyReqs = ['post', 'put', 'patch', 'delete', 'options', 'link', 'unlink', 'lock', 'propfind', 'view'];
const HttpsClient = {};
noBodyReqs.concat(hasBodyReqs).forEach(method => {
    HttpsClient[method] = obj => {
        return new Promise(function (cb) {
            const options = {
                host: obj.host,
                port: 443,
                path: obj.path,
                method,
                headers: obj.headers ? obj.headers : {},
            };
            const req = https_1.default.request(options, res => {
                let chunks = Buffer.from([]);
                let chunksLength = chunks.length;
                res.on('data', chunk => {
                    chunks = Buffer.concat([chunks, chunk], chunksLength + chunk.length);
                    chunksLength = chunks.length;
                });
                res.on('end', () => {
                    cb(chunks.toString());
                });
            });
            req.on('error', e => { console.log(`request error: ${e}`); });
            if (hasBodyReqs.indexOf(method) !== -1)
                req.write(obj.body);
            req.end();
        });
    };
});
exports.default = HttpsClient;
