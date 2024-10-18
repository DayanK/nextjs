import Image from 'next/image.js';
import drinkImg from './drink.jpg'; //local image
import Link from 'next/link';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);

  //throw error
  if (!res.ok) { 
    throw new Error("Error to fetch drinks...");
  }
  return res.json();
};

const SingleDrinkPage = async ({ params }) => { 
    const data = await getSingleDrink(params.id);
    const title = data?.drinks[0]?.strDrink;
    const imgSrc = data?.drinks[0]?.strDrinkThumb;
    console.log('title', title, "Image",imgSrc);

    return (
      <div>
        <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
          Back to drinks
        </Link>
        <Image
          src={imgSrc}
          width={300}
          height={300}
          className="w-48 h-48 rounded shadow-lg mb-4"
          priority
          alt={title}
        />
        {/* <Image src={drinkImg}  className="w-48 h-48 rounded-lg" alt="drink"/> */}
        <h1 className="text-4xl mb-8">{title}</h1>
      </div>
    );
  };
  export default SingleDrinkPage;