// import Nav from "../components/Nav";
import wave from '../assets/wave.svg'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-116px)] flex flex-col justify-center items-center hero  bg-base-200">

            <div>
                {/* hero */}
                <div className=" hero-content text-center">
                    <div className="relative max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>


                        <div className='flex gap-2 justify-center'>
                            <Link
                                to='/blogs'
                                className='relative inline-block px-4 py-2 font-medium group'
                            >
                                <span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
                                <span className='absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary'></span>
                                <span className='relative text-black group-hover:text-white'>
                                    Read Blogs
                                </span>
                            </Link>
                            <Link
                                to='/bookmarks'
                                className='relative inline-block px-4 py-2 font-medium group'
                            >
                                <span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
                                <span className='absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary'></span>
                                <span className='relative text-black group-hover:text-white'>
                                    Bookmarks
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* svg */}
                    <img className='absolute left-0 bottom-10 w-full' src={wave} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Home;