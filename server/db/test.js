const prisma = require("./prisma");

async function main() {
  const data = await prisma.user.findUnique({
    where: {
      email: "123@qq.com",
    },
    include: {
      Todo: true,
    },
  });
  console.log(data);
}

main();
