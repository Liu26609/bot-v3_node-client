import fs from "fs";
import common from "./common";
import { info, log } from 'console';
import store from "../shared/game/store";

const PATH = require('path');
const storePath = './db/'
export enum dbName {
    GuildCfg = 'guildCfg',//用户列表
    UserCfg = 'userCfg',//用户列表
}
class db {
    private dbMap: Map<string, Map<string, any>>;
    constructor() {
        this.dbMap = new Map();
    }
    async init() {
        await this.loadDirData(dbName.GuildCfg);
        await this.loadDirData(dbName.UserCfg);
    }
    /**
     * 创建一个数据，存在将覆盖
     * @param pathName 
     * @param id 
     */
    create(pathName: dbName, id: string | number | undefined, obj?: any) {
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
        store(id, data, { path: PATH.resolve(storePath, pathName)})

        locaMap.set(id, data);

        log('创建文件',PATH.resolve(storePath, pathName))

        this.dbMap.set(pathName, locaMap)
        return data
    }
    del(pathName: dbName, id: string | number) {
        let findId = id;
        if (typeof (findId) == 'number') {
            findId = findId.toString();
        }
        let locaMap = this.dbMap.get(pathName);
        if (!locaMap?.has(findId)) {
            return;
        }
        fs.unlink(PATH.resolve(storePath, `${pathName}/${findId}.json`), ((err) => {
            if (err) {
                log('删除文件失败', PATH.resolve(storePath, `${pathName}/${findId}.json`))
            }
        }))
        return locaMap.delete(findId)
    }
    getDbSize(pathName: dbName) {
        let locaMap = this.dbMap.get(pathName);
        return locaMap?.size || 0;
    }
    /**
     * 获取库全部数据
     * @param pathName 
     * @returns 
     */
    getDbAll(pathName: dbName) {
        return this.dbMap.get(pathName);
    }
    /**
     * 获取数据
     * @param pathName 
     * @param id 
     * @returns 
     */
    get(pathName: dbName, id: string | number) {
        let findId = id;
        if (typeof (findId) == 'number') {
            findId = findId.toString();
        }
        let locaMap = this.dbMap.get(pathName);
        if (!locaMap?.has(findId)) {

            return;
        }

        return locaMap.get(findId)
    }
    getRadomId(pathName: dbName) {
        let locaMap = this.dbMap.get(pathName);
        if (!locaMap) {
            log('错误')
            return '';
        }
        if (locaMap.size <= 0) {
            log('错误')
            return '';
        }
        const keys = [...locaMap.keys()]
        const random = common.random(0, keys.length - 1);
        return keys[random]
    }
    /**
     * 加载目录全部数据
     * @param dirPath 
     */
    private async loadDirData(dirPath: string) {
        let map = this.dbMap.get(dirPath) || new Map();
        let userList = await this.loadDir(PATH.resolve(storePath, dirPath));
        for (let index = 0; index < userList.length; index++) {
            const fileName = userList[index].replace('.json', '');
            let data = fs.readFileSync(PATH.resolve(storePath, `${dirPath}/${userList[index]}`), 'utf8')
            map.set(fileName, JSON.parse(data));
        }
        this.dbMap.set(dirPath, map);
        log(`DB:${dirPath},size:${map.size}`)
    }
    saveDirData(dirPath: string) {
        let dirMap = this.dbMap.get(dirPath);
        if (!dirMap) {
            return;
        }
        dirMap.forEach((data, key) => {
            store(key, data, { path: PATH.resolve(storePath, dirPath) })
        });
    }

    /**
     * 加载一个目录
     * @param path 
     * @returns 
     */
    private loadDir(path: string): Promise<string[]> {
        return new Promise((resolve, reject) => {
            fs.readdir(path, ((err, files) => {
                if (err) {
                    reject(err)
                    return;
                }
                resolve(files)
            }))
        })
    }


}
export default new db();