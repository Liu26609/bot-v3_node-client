import { task_base } from "../task_base";

export class shop_back extends task_base{
    constructor(...a){
        super(...a);
        this.render()
    }
    async render(){
        let temp = `黑市商店第104期商品到货啦~
出售商品:🔪物理攻击永久+1
购买价格:🐟鱼干x460
商店库存:38
刷新时间:23秒
购买指令：黑市购买
🧚‍♂️出售商品和价格每次随机刷新`
    }
}