import { ApiReturn, HttpClient, HttpServer, TransportOptions, WsClient } from "tsrpc";
import { err, info } from "..";
import { serviceProto, ServiceType } from "../shared/protocols/serviceProto";

/**
 * 后台服务器
 */
class sever {
    private _isReady: boolean;
    private apiUrl: string | undefined;
    private wsUrl: string | undefined;
    client!: HttpClient<ServiceType>;
    wsClient!: WsClient<ServiceType>
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
    async setApiUrl(link: string) {
        this.apiUrl = link;
        this.client = new HttpClient(serviceProto, { server: this.apiUrl })
        return await this.HelloWorld();
    }
    async setWsUrl(link: string) {
        this.wsUrl = link;
        this.wsClient = new WsClient(serviceProto, { server: this.wsUrl })
        this.wsClient.flows.postDisconnectFlow.push(v => {
            // 等待 2 秒后自动重连
            setTimeout(async () => {
                info('网络错误,连接已断开,开始重连');
                await this.wsConnect();
                // 重连也错误，弹出错误提示
            }, 2000)
            return v;
        })
        return this.wsConnect()
    }

    private async wsConnect() {
        let res = await this.wsClient.connect();
        if (!res.isSucc) {
            // Retry after 2 seconds
            await new Promise(rs => { setTimeout(rs, 2000) });
            await this.wsConnect();
        }else{
            info('ws服务器重连成功')
        }
    }
    /**
     * 调用API
     * @param apiName 
     * @param posData 
     * @param options 
     * @returns 
     */
    async callApi<T extends keyof ServiceType['api']>(apiName: T, posData: ServiceType['api'][T]['req'], options?: TransportOptions): Promise<ApiReturn<ServiceType['api'][T]['res']>> {
        if (!this._isReady) {
            err('服务器未就绪')
        }
        let res = await this.client.callApi(apiName, posData);
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
    }
    async HelloWorld() {
        let data = await this.client.callApi('Hello', { name: 'World' })
        if (!data.isSucc) {
            err('服务器测试通讯失败', data.err.message)
            return;
        }
        this._isReady = true;
        info(data.res.reply)
    }
}
export default new sever();