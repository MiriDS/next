import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    let q = searchParams.get('q')

    let result = null

    if (q) {
        q = '%'+(q.toLowerCase())+'%'
        console.log(q)
        result = await prisma.$queryRaw`SELECT * FROM surah WHERE other_names LIKE ${q}`
    } else {
        result = await prisma.surah.findMany()
    }


    return Response.json({ result })
}