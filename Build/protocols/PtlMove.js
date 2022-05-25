"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conf = exports.moveDirection = void 0;
var moveDirection;
(function (moveDirection) {
    moveDirection[moveDirection["top"] = 0] = "top";
    moveDirection[moveDirection["right"] = 1] = "right";
    moveDirection[moveDirection["buttom"] = 2] = "buttom";
    moveDirection[moveDirection["left"] = 3] = "left";
})(moveDirection = exports.moveDirection || (exports.moveDirection = {}));
exports.conf = { direction: { top: 1, right: 2, buttom: 3, left: 4 } };
