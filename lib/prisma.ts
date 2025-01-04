import { PrismaClient } from '@prisma/client';

let prisma: typeof PrismaClient;
// const prisma = new PrismaClient();

// let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // TODO: dev環境はもう少し修正が必要かもしれない https://reffect.co.jp/nextjs/next-js-server-action-14#google_vignette
  prisma = new PrismaClient();
  // if (!global.prisma) {
  //   global.prisma = new PrismaClient();
  // }
  // prisma = global.prisma;
}

export default prisma;
