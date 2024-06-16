import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';

function App() {

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
        <ProductList />
      </div>
    </>
  )
}

export default App
