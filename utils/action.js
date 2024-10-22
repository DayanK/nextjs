"use server";
import prisma from "./db.ts";
import { revalidatePath } from "next/cache.js";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTask = async (formData) => {
  const content = formData.get("content"); // content muss the same name with name="content"
  await prisma.task.create({
    data: {
      content: content,
    },
  });
  revalidatePath("/tasks");
  console.log("content ", content);
};

export const createTaskCustom = async (prevState, formData) => {
  // await new Promise((resolve) => setTimeout(resolve,1000))

  const Task = z.object({
    content: z.string().min(5),
  });
  
  const content = formData.get("content"); // content muss the same name with name="content"

  try {
    Task.parse({ content: content });
    await prisma.task.create({
      data: {
        content: content,
      },
    });
    revalidatePath("/tasks");
    console.log("content ", content);

    return { message: "success" };
  } catch (error) {
    console.log("error", error)
    return { message: "error" };
  }

};

  
export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: { id },
  }),
    revalidatePath("/tasks");
};


export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: {
      id: id,
    },
  });
};

export const editTask = async (formData) => {
    const id = formData.get("id");
    const content = formData.get("content");
    const completed = formData.get("completed");

    await prisma.task.update({
        where: {
            id: id,
        },
        data:{
            content: content,
            completed: completed === "on" ? true : false
        },
    })
    redirect('/tasks')
};
