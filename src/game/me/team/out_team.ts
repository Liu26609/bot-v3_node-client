import sever from '../../../unity/sever';
import { task_base } from './../../task_base';
export class out_team extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        let req = await sever.callApi('team/Out_team', { userId: this.userId })
        if (req.err) {
            this.sendErr(req.err)
            return;
        }
    }
}