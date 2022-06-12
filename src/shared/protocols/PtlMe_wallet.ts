import { userSetUpCfg } from '../game/setUp';
import { USER_wallet } from './../game/user';
/**
 * 我的钱包
 */
export interface ReqMe_wallet {
    userId: string,
}

export interface ResMe_wallet extends USER_wallet {

}

// export const conf = {}