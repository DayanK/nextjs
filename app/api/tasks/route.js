
// the following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS. If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.

import db from '../../../utils/db';
import { NextResponse } from "next/server.js";


export const GET = async (request) => {
    const tasks = await db.task.findMany();
    return NextResponse.json({ data: tasks });
  };

export const POST = async (request) => {
  const data = await request.json();
  const task = await db.task.create({
    data: {
      content: data.content,
    }
  })
  console.log(request)
  return NextResponse.json({ data: task });
};