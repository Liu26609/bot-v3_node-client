import { team_info } from './../../game/team';
import { payRes } from './../../game/prop';
/**
 * 创建工会
 */
export interface ReqCreator_team {
    userId: string,
    name:string,
}

export interface ResCreator_team {
    pay:payRes,
    team:team_info,
    
}

// export const conf = {}