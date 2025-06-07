import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "test@test.com",
      name: "Test User",
      socials: {
        create: {
          github: "https://github.com/test",
          twitter: "https://twitter.com/test",
          linkedin: "https://linkedin.com/test",
          peerlist: "https://peerlist.io/test",
          website: "https://test.com",
        },
      },
    },
  });
}

main();
