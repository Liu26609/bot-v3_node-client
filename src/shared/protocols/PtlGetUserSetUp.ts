import { userSetUpCfg } from "../game/setUp";

export interface ReqGetUserSetUp {
    userId: string
}

export interface ResGetUserSetUp  extends userSetUpCfg {}

// export const conf = {}