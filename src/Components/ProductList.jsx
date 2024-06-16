import {useEffect, useState} from "react";
import axios from "axios";
import '../App.css'

function ProductList() {
  const [error, seterror] = useState(false);
  const [api, setApi] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setloading(true);
        seterror(false);
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = await response.data;
        setApi(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        setloading(false);
      }
    })();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
        <div className="rounded-lg bg-white p-8 text-center shadow-xl">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="text-gray-600">
            Oops! The page you are looking for could not be found.
          </p>
          <a
            href="/"
            className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
          >
            {" "}
            Go back to Home{" "}
          </a>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-8 flex-wrap p-5">
      {api.map((item) => {
        return (
          <div className="" key={item.id}>
            <div className="h-[320px] w-[270px] mb-1 bg-gradient-to-r from-pink-500 to-pink-400 flex items-center justify-center rounded-md">
              <img
                className="w-[250px] h-[300px] rounded-md hover:scale-105 transition-all"
                src={item.image}
                alt=""
              />
            </div>
            <div className="my-2">
              <p className="w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                {item.title}
              </p>
              <p className="uppercase font-semibold">
                <span className="font-normal">category: </span>
                {item.category}
              </p>
            </div>
            <div>
              <p className="font-bold">
                <span>Price: $</span>
                {item.price}
              </p>
              <p></p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
