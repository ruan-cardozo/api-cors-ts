"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mariadb_connection_1 = require("./src/config/mariadb-connection");
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use((0, cors_1.default)());
dotenv_1.default.config();
try {
    const port = process.env.SERVER_PORT;
    server.listen(port, () => {
        console.log('Servidor online na porta: ', port);
    });
}
catch (error) {
    console.error('Ocorreu um erro ao se conectar com o servidor', error);
}
try {
    mariadb_connection_1.dbConnection.authenticate();
    console.log("Conectado ao banco de dados!");
}
catch (error) {
    console.error("Ocorreu um erro ao se conectar com o banco de dados", error);
}
//# sourceMappingURL=index.js.map