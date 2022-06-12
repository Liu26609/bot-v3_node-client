import { teamLeve, team_info } from "../../game/team"

export interface ReqMe_team {
    userId: string
}

export interface ResMe_team {
    info:team_info | undefined,
    myLeve:teamLeve,
    myContribute:number
}

// export const conf = {}