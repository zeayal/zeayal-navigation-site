import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

 const prismaClient = new PrismaClient();

export async function GET() {
  const categories = await prismaClient.category.findMany({
    include: {
      links: true
    }
  });
  return NextResponse.json({code: 0, msg: 'success', data: categories})
}