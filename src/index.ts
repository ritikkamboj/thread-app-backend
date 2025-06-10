import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4"; // Import the specific middleware for Express 4
import cors from "cors";

// jai baabe ki

async function init() {
  const app = express();
  app.use(cors());
  const PORT = process.env.PORT || 8000;

  const gqlserver = new ApolloServer({
    typeDefs: `
    type Query {
    hello : String
    say(name :String) : String
    }
    `,
    resolvers: {
      Query: {
        hello: () => `hey there !`,
        say: (_, { name }: { name: String }) => `Hey ${name}, How are you ?`,
      },
    },
  });

  await gqlserver.start();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "serber os runnig " });
  });

  //@ts-ignore
  app.use("/graphql", expressMiddleware(gqlserver));

  app.listen(PORT, () => console.log(`server is running on ${PORT}`));
}

init();

// http://localhost:8000/
