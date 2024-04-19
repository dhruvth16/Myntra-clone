import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Navbar from './Components/Navbar';

function App() {
  // const [img, setImg] = useState();
  const [error, seterror] = useState(false);
  const [api, setApi] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setloading(true)
        seterror(false)
        const response = await axios.get('https://fakestoreapi.com/products')
        const data = await response.data;
        setApi(data);
        setloading(false)
      } catch (error) {
        seterror(true)
        setloading(false)
      }
    })()
  }, [])

  // useEffect(() => {
  //     (async () => {
  //       try {
  //         setloading(true)
  //         seterror(false)
  //         const res = await fetch('https://fakestoreapi.com/products')
  //         const obj = await res.json();
  //         setApi(obj);
  //         setloading(false)
  //       } catch (error) {
  //         seterror(true)
  //         setloading(false)
  //     }
  //     })()
  //   } 
  // , [])

  if (error) {
    return <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="text-gray-600">Oops! The page you are looking for could not be found.</p>
        <a href="/" className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"> Go back to Home </a>
      </div>
    </div>
  }

  if (loading) {
    return <div className='h-screen w-full flex items-center justify-center'>
      <div className="spinner"></div>
    </div>
  }

  return (
    <>
      <Navbar />
      <div className='w-full pt-[100px]'>
        <div className='hidden lg:block'>
          <img className='w-full' src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/13/160142ae-a9e1-4700-947c-8a9eac1776fc1710327780873-COUPON-STRIP.jpg" alt="" />
        </div>
        <div className='lg:flex hidden'>
          <img className='w-[50%]' src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/13/c2d5b04e-8957-4f27-81dd-de3e3d6419401710349693374-DESKTOP-HP-BANNER-----6_01.jpg" alt="" />
          <img className='w-[50%]' src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/13/91a33e38-3ee8-4fae-8a7e-f03b5e83b19b1710349693383-DESKTOP-HP-BANNER-----6_02.jpg" alt="" />
        </div>
        <div>
          <h3 className='text-center text-3xl font-mono font-medium'>Top Deals</h3>
          <img className='w-full mb-4 hidden lg:block' src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/13/f7833d8c-a2b1-4aac-989b-ca397a02dfcd1710340369987-Crazy-Deals.jpg" alt="" />
        </div>
        <div className='flex justify-center gap-8 flex-wrap p-5'>
          {api.map(item => {
            return <div className='' key={item.id}>
              <div className='h-[320px] w-[270px] mb-1 bg-gradient-to-r from-pink-500 to-pink-400 flex items-center justify-center rounded-md'>
                <img className='w-[250px] h-[300px] rounded-md hover:scale-105 transition-all' src={item.image} alt="" />
              </div>
              <div className='my-2'>
                <p className='w-[200px] overflow-hidden text-ellipsis whitespace-nowrap'>{item.title}</p>
                <p className='uppercase font-semibold'><span className='font-normal'>category: </span>{item.category}</p>
              </div>
              <div>
                <p className='font-bold'><span >Price: $</span>{item.price}</p>
                <p></p>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
