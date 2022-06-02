"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyType = exports.ancestryLeve = void 0;
var ancestryLeve;
(function (ancestryLeve) {
    ancestryLeve[ancestryLeve["D"] = 0] = "D";
    ancestryLeve[ancestryLeve["C"] = 1] = "C";
    ancestryLeve[ancestryLeve["B"] = 2] = "B";
    ancestryLeve[ancestryLeve["A"] = 3] = "A";
    ancestryLeve[ancestryLeve["AA"] = 4] = "AA";
    ancestryLeve[ancestryLeve["AAA"] = 5] = "AAA";
    ancestryLeve[ancestryLeve["S"] = 6] = "S";
    ancestryLeve[ancestryLeve["SS"] = 7] = "SS";
    ancestryLeve[ancestryLeve["SSS"] = 8] = "SSS";
    ancestryLeve[ancestryLeve["MAX"] = 9] = "MAX";
})(ancestryLeve = exports.ancestryLeve || (exports.ancestryLeve = {}));
var bodyType;
(function (bodyType) {
    bodyType[bodyType["player"] = 0] = "player";
    bodyType[bodyType["enemy"] = 1] = "enemy";
    bodyType[bodyType["pet"] = 2] = "pet";
})(bodyType = exports.bodyType || (exports.bodyType = {}));
