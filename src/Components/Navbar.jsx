import 'remixicon/fonts/remixicon.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function Navbar() {

    const [search, setSearch] = useState(false);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                setProducts(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);

    useEffect(() => {
        if (search) {
            const filtered = products.filter(product =>
                product.title.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    }, [search, products]);


    return (
        <>
            <div className="flex items-center justify-center">
                <div className='h-16 p-10 w-full lg:w-full bg-white flex items-center justify-between shadow-md fixed mt-[80px] z-30'>
                    <div>
                    </div>
                    <div>
                        <ul className='lg:flex hidden md:hidden items-center gap-7 text-blue-950 font-medium text-sm cursor-pointer'>
                            <li className='h-16 flex items-center hover:border-b-4 hover:border-orange-500'>MEN</li>
                            <li className='h-16 flex items-center hover:border-b-4 hover:border-pink-600'>WOMEN</li>
                            <li className='h-16 flex items-center hover:border-b-4 hover:border-blue-600'>KIDS</li>
                            <li className='h-16 flex items-center hover:border-b-4 hover:border-yellow-600'>HOME & LIVING</li>
                            <li className='h-16 flex items-center hover:border-b-4 hover:border-pink-600'>BEAUTY</li>
                            <li className='h-16 flex items-center hover:border-b-4 hover:border-pink-600'>STUDIO<sup className='text-pink-500'>NEW</sup></li>
                        </ul>
                    </div>
                    <div className='lg:flex items-center gap-3 bg-gray-100 h-10 rounded-md p-2 w-[400px] hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path
                                d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z">
                            </path>
                        </svg>
                        <input list='prodName' 
                            className='h-10 bg-gray-100 w-[400px] placeholder:focus: outline-none placeholder:text-sm' 
                            type="text" 
                            placeholder="Search for products,brands and more"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <datalist id="prodName">
                            {filteredProducts.map((product) => (
                                <option key={product.id} value={product.title}>
                                    {product.title}
                                </option>
                            ))}
                        </datalist>
                    </div>
                    <div>
                        <img className="w-8 h-8 lg:hidden md:hidden bg-slate-100" src="data:image/png;base64,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" alt="" />
                    </div>
                    <div className='lg:flex md:flex hidden items-center gap-3 lg:gap-6'>
                        <div className='flex items-center flex-col'>
                            <svg className="flex w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                <path
                                    d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z">
                                </path>
                            </svg>
                            <span className='text-blue-950 font-bold text-xs'>Search</span>
                        </div>
                        <div className='flex items-center flex-col'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path>
                            </svg>
                            <span className='text-blue-950 font-bold text-xs'>Profile</span>
                        </div>
                        <div className='flex items-center flex-col'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path>
                            </svg>
                            <span className='text-blue-950 font-bold text-xs'>Wishlist</span>
                        </div>
                        <div className='flex items-center flex-col'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                <path d="M7.00488 7.99966V5.99966C7.00488 3.23824 9.24346 0.999664 12.0049 0.999664C14.7663 0.999664 17.0049 3.23824 17.0049 5.99966V7.99966H20.0049C20.5572 7.99966 21.0049 8.44738 21.0049 8.99966V20.9997C21.0049 21.5519 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.5519 3.00488 20.9997V8.99966C3.00488 8.44738 3.4526 7.99966 4.00488 7.99966H7.00488ZM7.00488 9.99966H5.00488V19.9997H19.0049V9.99966H17.0049V11.9997H15.0049V9.99966H9.00488V11.9997H7.00488V9.99966ZM9.00488 7.99966H15.0049V5.99966C15.0049 4.34281 13.6617 2.99966 12.0049 2.99966C10.348 2.99966 9.00488 4.34281 9.00488 5.99966V7.99966Z"></path>
                            </svg>
                            <span className='text-blue-950 font-bold text-xs'>Bag</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar