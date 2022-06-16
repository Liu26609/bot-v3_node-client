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
exports.dbName = void 0;
const fs_1 = __importDefault(require("fs"));
const common_1 = __importDefault(require("./common"));
const console_1 = require("console");
const store_1 = __importDefault(require("../shared/game/store"));
const PATH = require('path');
const storePath = './db/';
var dbName;
(function (dbName) {
    dbName["channelCfg"] = "channelCfg";
})(dbName = exports.dbName || (exports.dbName = {}));
class db {
    constructor() {
        this.dbMap = new Map();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadDirData(dbName.channelCfg);
        });
    }
    /**
     * 创建一个数据，存在将覆盖
     * @param pathName
     * @param id
     */
    create(pathName, id, obj) {
        let locaMap = this.dbMap.get(pathName);
        if (!locaMap) {
            locaMap = new Map();
        }
        if (typeof (id) == 'undefined') {
            id = locaMap.size;
        }
        if (typeof (id) == 'number') {
            id = id.toString();
        }
        let data = obj || {};
        (0, store_1.default)(id, data, { path: PATH.resolve(storePath, pathName) });
        locaMap.set(id, data);
        (0, console_1.log)('创建文件', PATH.resolve(storePath, pathName));
        this.dbMap.set(pathName, locaMap);
        return data;
    }
    del(pathName, id) {
        let findId = id;
        if (typeof (findId) == 'number') {
            findId = findId.toString();
        }
        let locaMap = this.dbMap.get(pathName);
        if (!(locaMap === null || locaMap === void 0 ? void 0 : locaMap.has(findId))) {
            return;
        }
        fs_1.default.unlink(PATH.resolve(storePath, `${pathName}/${findId}.json`), ((err) => {
            if (err) {
                (0, console_1.log)('删除文件失败', PATH.resolve(storePath, `${pathName}/${findId}.json`));
            }
        }));
        return locaMap.delete(findId);
    }
    getDbSize(pathName) {
        let locaMap = this.dbMap.get(pathName);
        return (locaMap === null || locaMap === void 0 ? void 0 : locaMap.size) || 0;
    }
    /**
     * 获取库全部数据
     * @param pathName
     * @returns
     */
    getDbAll(pathName) {
        return this.dbMap.get(pathName);
    }
    /**
     * 获取数据
     * @param pathName
     * @param id
     * @returns
     */
    get(pathName, id) {
        let findId = id;
        if (typeof (findId) == 'number') {
            findId = findId.toString();
        }
        let locaMap = this.dbMap.get(pathName);
        if (!(locaMap === null || locaMap === void 0 ? void 0 : locaMap.has(findId))) {
            return;
        }
        return locaMap.get(findId);
    }
    getRadomId(pathName) {
        let locaMap = this.dbMap.get(pathName);
        if (!locaMap) {
            (0, console_1.log)('错误');
            return '';
        }
        if (locaMap.size <= 0) {
            (0, console_1.log)('错误');
            return '';
        }
        const keys = [...locaMap.keys()];
        const random = common_1.default.random(0, keys.length - 1);
        return keys[random];
    }
    /**
     * 加载目录全部数据
     * @param dirPath
     */
    loadDirData(dirPath) {
        return __awaiter(this, void 0, void 0, function* () {
            let map = this.dbMap.get(dirPath) || new Map();
            let userList = yield this.loadDir(PATH.resolve(storePath, dirPath));
            for (let index = 0; index < userList.length; index++) {
                const fileName = userList[index].replace('.json', '');
                let data = fs_1.default.readFileSync(PATH.resolve(storePath, `${dirPath}/${userList[index]}`), 'utf8');
                map.set(fileName, JSON.parse(data));
            }
            this.dbMap.set(dirPath, map);
            (0, console_1.log)(`DB:${dirPath},size:${map.size}`);
        });
    }
    saveDirData(dirPath) {
        let dirMap = this.dbMap.get(dirPath);
        if (!dirMap) {
            return;
        }
        dirMap.forEach((data, key) => {
            (0, store_1.default)(key, data, { path: PATH.resolve(storePath, dirPath) });
        });
    }
    /**
     * 加载一个目录
     * @param path
     * @returns
     */
    loadDir(path) {
        return new Promise((resolve, reject) => {
            fs_1.default.readdir(path, ((err, files) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(files);
            }));
        });
    }
}
exports.default = new db();
