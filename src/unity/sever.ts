import { ApiReturn, HttpClient, TransportOptions } from "tsrpc";
import { err, info, log } from "..";
import { serviceProto, ServiceType } from "../shared/protocols/serviceProto";

/**
 * 后台服务器
 */
class sever{
    private _isReady:boolean;
    private apiUrl:string | undefined;
    client!: HttpClient<ServiceType>;
    constructor(){
        this._isReady = false;
    }
    isReady(){
        return this._isReady;
    }
    /**
     * 设置服务器地址
     * @param link 
     */
    async setApiUrl(link:string){
        this.apiUrl = link;
        this.client =  new HttpClient(serviceProto,{server:this.apiUrl})

        return await this.HelloWorld();
    }
    /**
     * 调用API
     * @param apiName 
     * @param posData 
     * @param options 
     * @returns 
     */
    async callApi<T extends keyof ServiceType['api']>(apiName: T, posData: ServiceType['api'][T]['req'], options?: TransportOptions): Promise<ApiReturn<ServiceType['api'][T]['res']>>{
        if(!this._isReady){
            err('服务器未就绪')
        }
        let res = await this.client.callApi(apiName,posData);
        if(res.err){
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
    private async HelloWorld(tryCont?:number){
        if(!tryCont){
            tryCont = 0;
        }
        tryCont +=1;
        let data = await this.client.callApi('Hello',{name:'World'})
        if(!data.isSucc){
            err('服务器测试通讯失败',data.err.message)
            if(tryCont <= 5){
                setTimeout(()=>{
                    this.HelloWorld(tryCont);
                },2000)
            }
            return;
        }
        this._isReady = true;
        info(data.res.reply)
    }
}
export default new sever();