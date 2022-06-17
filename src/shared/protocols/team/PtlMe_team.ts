import { teamLeve, TEAM_INFO } from "../../game/team"

export interface ReqMe_team {
    userId: string
}

export interface ResMe_team {
    info:TEAM_INFO | undefined,
    myLeve:teamLeve,
    myContribute:number
}

// export const conf = {}