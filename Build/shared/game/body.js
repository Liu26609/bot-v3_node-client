"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyType = exports.DNA_CN = exports.DNA_Leve = exports.ancestryLeve = void 0;
var ancestryLeve;
(function (ancestryLeve) {
    ancestryLeve[ancestryLeve["E"] = 0] = "E";
    ancestryLeve[ancestryLeve["D"] = 1] = "D";
    ancestryLeve[ancestryLeve["C"] = 2] = "C";
    ancestryLeve[ancestryLeve["B"] = 3] = "B";
    ancestryLeve[ancestryLeve["A"] = 4] = "A";
    ancestryLeve[ancestryLeve["AA"] = 5] = "AA";
    ancestryLeve[ancestryLeve["AAA"] = 6] = "AAA";
    ancestryLeve[ancestryLeve["S"] = 7] = "S";
    ancestryLeve[ancestryLeve["SS"] = 8] = "SS";
    ancestryLeve[ancestryLeve["SSS"] = 9] = "SSS";
    ancestryLeve[ancestryLeve["R"] = 10] = "R";
    ancestryLeve[ancestryLeve["SR"] = 11] = "SR";
    ancestryLeve[ancestryLeve["SSR"] = 12] = "SSR";
    ancestryLeve[ancestryLeve["MAX"] = 13] = "MAX";
})(ancestryLeve = exports.ancestryLeve || (exports.ancestryLeve = {}));
var DNA_Leve;
(function (DNA_Leve) {
    // 未解开基因锁
    DNA_Leve[DNA_Leve["F"] = 0] = "F";
    // 一阶
    DNA_Leve[DNA_Leve["E"] = 1] = "E";
    // 二阶
    DNA_Leve[DNA_Leve["EE"] = 2] = "EE";
    // 三阶
    DNA_Leve[DNA_Leve["EEE"] = 3] = "EEE";
    // 四阶初级-悟道
    DNA_Leve[DNA_Leve["D"] = 4] = "D";
    // 四阶中级-入微
    DNA_Leve[DNA_Leve["DD"] = 5] = "DD";
    // 四阶高级-临圣
    DNA_Leve[DNA_Leve["DDD"] = 6] = "DDD";
    // 四阶巅峰-圣位
    DNA_Leve[DNA_Leve["C"] = 7] = "C";
    // 初级圣位
    DNA_Leve[DNA_Leve["CC"] = 8] = "CC";
    // 高阶圣位
    DNA_Leve[DNA_Leve["CCC"] = 9] = "CCC";
    // 先天圣位
    DNA_Leve[DNA_Leve["B"] = 10] = "B";
    // 真圣
    DNA_Leve[DNA_Leve["BB"] = 11] = "BB";
    // 皇级圣位
    DNA_Leve[DNA_Leve["BBB"] = 12] = "BBB";
    // 次终极
    DNA_Leve[DNA_Leve["A"] = 13] = "A";
    // 临终极
    DNA_Leve[DNA_Leve["AA"] = 14] = "AA";
    // 终极
    DNA_Leve[DNA_Leve["AAA"] = 15] = "AAA";
    // 永恒
    DNA_Leve[DNA_Leve["S"] = 16] = "S";
    // 无限
    DNA_Leve[DNA_Leve["SS"] = 17] = "SS";
    // 半步超脱
    DNA_Leve[DNA_Leve["SSS"] = 18] = "SSS";
    // 超脱
    DNA_Leve[DNA_Leve["MAX"] = 19] = "MAX";
})(DNA_Leve = exports.DNA_Leve || (exports.DNA_Leve = {}));
var DNA_CN;
(function (DNA_CN) {
    DNA_CN["F"] = "\u672A\u89E3\u5F00\u57FA\u56E0\u9501";
    DNA_CN["E"] = "\u4E00\u9636-\u6218\u6597\u672C\u80FD";
    DNA_CN["EE"] = "\u4E8C\u9636-\u6781\u9650\u6F5C\u80FD";
    DNA_CN["EEE"] = "\u4E09\u9636-\u8131\u51E1\u5165\u5723";
    DNA_CN["D"] = "\u56DB\u9636\u521D\u7EA7-\u609F\u9053";
    DNA_CN["DD"] = "\u56DB\u9636\u4E2D\u7EA7-\u5165\u5FAE";
    DNA_CN["DDD"] = "\u56DB\u9636\u9AD8\u7EA7-\u4E34\u5723";
    DNA_CN["C"] = "\u56DB\u9636\u5DC5\u5CF0-\u5165\u5723";
    DNA_CN["CC"] = "\u56DB\u9636\u5DC5\u5CF0-\u521D\u7EA7\u5723\u4F4D";
    DNA_CN["CCC"] = "\u56DB\u9636\u5DC5\u5CF0-\u9AD8\u9636\u5723\u4F4D";
    DNA_CN["B"] = "\u56DB\u9636\u5DC5\u5CF0-\u5148\u5929\u5723\u4F4D";
    DNA_CN["BB"] = "\u56DB\u9636\u5DC5\u5CF0-\u771F\u5723";
    DNA_CN["BBB"] = "\u56DB\u9636\u5DC5\u5CF0-\u7687\u7EA7\u5723\u4EBA";
    DNA_CN["A"] = "\u4E94\u9636\u521D\u7EA7-\u6B21\u7EC8\u6781";
    DNA_CN["AA"] = "\u4E94\u9636\u521D\u7EA7-\u4E34\u7EC8\u6781";
    DNA_CN["AAA"] = "\u4E94\u9636\u4E2D\u7EA7-\u7EC8\u6781";
    DNA_CN["S"] = "\u4E94\u9636\u4E2D\u7EA7-\u6211\u5373\u6C38\u6052";
    DNA_CN["SS"] = "\u4E94\u9636\u9AD8\u7EA7-\u4E00\u5FF5\u5373\u8D77";
    DNA_CN["SSS"] = "\u4E94\u9636\u5DC5\u5CF0-\u534A\u6B65\u8D85\u8131";
    DNA_CN["MAX"] = "\u4E94\u9636\u5DC5\u5CF0-\u8D85\u8131\u8005";
    DNA_CN["MAXX"] = "\u516D\u9636-\u76D2\u5B50\u5236\u9020\u8005";
})(DNA_CN = exports.DNA_CN || (exports.DNA_CN = {}));
var bodyType;
(function (bodyType) {
    bodyType[bodyType["player"] = 0] = "player";
    bodyType[bodyType["enemy"] = 1] = "enemy";
    bodyType[bodyType["pet"] = 2] = "pet";
    bodyType[bodyType["shadow"] = 3] = "shadow";
})(bodyType = exports.bodyType || (exports.bodyType = {}));
