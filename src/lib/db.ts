// import { PrismaClient } from "@prisma/client";

// export const prismaClient = new PrismaClient();

const { PrismaClient } = require("@prisma/client");
export const prismaClient = new PrismaClient();

async function main() {
  const users = await prismaClient.user.findMany();
  console.log(users, "jai baabe ki");
}

main();
