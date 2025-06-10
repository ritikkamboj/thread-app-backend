"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4"); // Import the specific middleware for Express 4
const cors_1 = __importDefault(require("cors"));
// jai baabe ki
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use((0, cors_1.default)());
        const PORT = process.env.PORT || 8000;
        const gqlserver = new server_1.ApolloServer({
            typeDefs: `
    type Query {
    hello : String
    say(name :String) : String
    }
    `,
            resolvers: {
                Query: {
                    hello: () => `hey there !`,
                    say: (_, { name }) => `Hey ${name}, How are you ?`,
                },
            },
        });
        yield gqlserver.start();
        app.use(express_1.default.json());
        app.get("/", (req, res) => {
            res.json({ message: "serber os runnig " });
        });
        //@ts-ignore
        app.use("/graphql", (0, express4_1.expressMiddleware)(gqlserver));
        app.listen(PORT, () => console.log(`server is running on ${PORT}`));
    });
}
init();
// http://localhost:8000/
