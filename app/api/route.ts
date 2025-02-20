// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// export async function GET(request: Request) {

//     const { searchParams } = new URL(request.url)
//     let q = searchParams.get('q')

//     let result = null

//     if (q) {
//         q = '%'+(q.toLowerCase())+'%'
//         console.log(q)
//         result = await prisma.$queryRaw`SELECT * FROM surah WHERE other_names LIKE ${q}`
//     } else {
//         result = await prisma.surah.findMany()
//     }


//     return Response.json({ result })
// }

import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

// Let's initialize it as null initially, and we will assign the actual database instance later.
let db = null;

// Define the GET request handler function
export async function GET(_req, _res) {
  // Check if the database instance has been initialized
  if (!db) {
    // If the database instance is not initialized, open the database connection
    db = await open({
      filename: "./data.db", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }

  // Perform a database query to retrieve all items from the "items" table
  const items = await db.all("SELECT * FROM surah");

  // Return the items as a JSON response with status 200
  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}