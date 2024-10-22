import prisma from '../../utils/db.ts'


const PrismaHandler = async () => {
  // await prisma.task.create({
  //   data: {
  //     content: "wake up",
  //   },
  // });
  const allTasks = await prisma.task.findMany({
    orderBy:{
        createdAt:'desc'
    }
  })
  return allTasks;
};


const PrismaExamplePage = async () => {
    const tasks = await PrismaHandler();
    if (tasks.length === 0) {
      return <h2 className='mt-8 font-medium text-lg'>No tasks to show...</h2>;
    }
    return (
      <div className="text-7xl">
        <h1>Prisma Example</h1>
        {tasks.map((task) => {
          return <h2 key={task.id}>😬 {task.content}</h2>;
        })}
      </div>
    );
  }
  
  export default PrismaExamplePage;