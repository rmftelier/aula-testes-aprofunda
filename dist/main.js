"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./infra/server/server"));
const PORT = 3000;
server_1.default.listen(PORT, () => {
    console.log(`O servidor está sendo ouvido da porta ${PORT}`);
});
