import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

 const prismaClient = new PrismaClient();

export async function GET(request: Request,  context: { params }) {
    console.log('params', context, request )
  const categories = await prismaClient.category.findUnique({
    where: {
        id: +context.params.id
    },
    include: {
        links: true
    }
  });
  return NextResponse.json({code: 0, msg: 'success', data: categories})
}