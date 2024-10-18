import Link from "next/link.js";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-8 from-bold">Next.js Tutorial</h1>
      <Link href="/client" className="btn btn-accent">
           get started
      </Link>
    </div>
  );
};

export default HomePage;