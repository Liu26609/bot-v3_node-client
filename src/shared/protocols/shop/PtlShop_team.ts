import { userSetUpCfg } from '../../game/setUp';
import { store_team } from './../../game/prop';
export interface ReqShop_team {
    userId:string
}

export interface ResShop_team extends store_team {
    userCfg:userSetUpCfg,
}

// export const conf = {}