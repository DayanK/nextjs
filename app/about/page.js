import Link from "next/link.js";

const AboutPage = () => {
    return (
        <div className="text-7xl">
        <h1>About Page</h1>
        <Link href="/" className="text-2xl">
                Home page
        </Link>
      </div>
    )
  }
  
  export default AboutPage;