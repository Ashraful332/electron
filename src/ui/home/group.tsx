import icon1 from '../assets/chevron-left.svg'
import icon2 from '../assets/circle-plus.svg'
import profile from '../assets/ashraful.png'
import search_ico from '../assets/search.svg'
import arrow_don from '../assets/chevron-down.svg'

export default function Group() {
    return (
        <div className='border-l-2 border-l-gray-800 rounded-l-2xl py-10 w-72 '>
            <div>
                <div>
                    <button className='flex flex-row items-center'>
                        <img src={icon1} alt="arrow icon" />
                        Chat
                    </button>
                    <hr className='mt-8 mx-5 ' />
                </div>

                <div className='flex flex-col items-center'>
                    {/* profile */}
                    <div>
                        <div>
                            <img src={profile} alt="image" width={150} />
                        </div>
                        <button>
                            active
                            <img src={arrow_don} alt="arrow down" />
                        </button>
                    </div>
                    {/* search */}
                    <div className='mt-8'>
                        <input type="text" name="search-pro" id="search-pro" className='border' />
                        <button>
                            <img src={search_ico} alt='search icon' />
                        </button>
                    </div>
                </div>

                <div>
                    <div className='flex flex-row items-center gap-10 my-8'>
                        <p>Last Chat</p>
                        <button>
                            <img src={icon2} alt="icon" />
                        </button>

                    </div>
                    <div>
                        <div className='flex flex-row'>
                            <div className='flex flex-row gap-4' >
                                <div>
                                    <img src={profile} alt="profile" width={50} className='bg-blue-400 rounded-full' />
                                </div>
                                <div>
                                    <p>Name</p>
                                    <p>last chat</p>
                                </div>

                            </div>

                            <p>date and time</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}