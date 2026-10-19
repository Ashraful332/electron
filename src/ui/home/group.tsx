import icon1 from '../assets/chevron-left.svg'
import icon2 from '../assets/circle-plus.svg'
import profile from '../assets/ashraful.png'
import search_ico from '../assets/search.svg'
import arrow_don from '../assets/chevron-down.svg'

export default function Group() {
    return (
        <div className='w-full max-w-xs md:w-80 h-screen flex flex-col justify-between py-6 px-4 bg-white border-r border-slate-100 overflow-y-auto shrink-0'>
            <div>
                {/* Header */}
                <div className='flex items-center gap-4 mb-4'>
                    <button className='w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 transition-transform duration-200 hover:scale-105'>
                        <img src={icon1} alt="arrow icon" className='w-5 h-5' />
                    </button>
                    <h1 className='text-xl font-semibold text-slate-800'>Chat</h1>
                </div>

                <hr className='border-slate-100 my-4' />

                {/* Profile Section */}
                <div className='flex flex-col items-center mt-6'>
                    <div className='relative'>
                        <img src={profile} alt="image" className='w-24 h-24 rounded-full object-cover shadow-sm' />
                        <span className='absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full'></span>
                    </div>

                    <h2 className='text-lg font-semibold text-slate-800 mt-3'>Ashraful Pathan</h2>

                    <button className='flex items-center gap-1.5 px-3 py-1 mt-2 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium transition-transform duration-200 hover:scale-105'>
                        available
                        <img src={arrow_don} alt="arrow down" className='w-3.5 h-3.5' />
                    </button>

                    {/* Search Bar */}
                    <div className='w-full relative mt-6'>
                        <input 
                            type="text" 
                            name="search-pro" 
                            id="search-pro" 
                            placeholder='Search'
                            className='w-full py-2.5 pl-4 pr-10 rounded-2xl bg-slate-100 text-sm text-slate-700 focus:outline-none placeholder:text-slate-400' 
                        />
                        <button className='absolute right-3 top-1/2 -translate-y-1/2 transition-transform duration-200 hover:scale-110'>
                            <img src={search_ico} alt='search icon' className='w-4 h-4 opacity-50' />
                        </button>
                    </div>
                </div>

                {/* Last Chats Section */}
                <div className='mt-6'>
                    <div className='flex items-center justify-between mb-4'>
                        <p className='font-semibold text-slate-800 text-base'>Last chats</p>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 transition-transform duration-200 hover:scale-110'>
                            <img src={icon2} alt="icon" className='w-4 h-4' />
                        </button>
                    </div>

                    {/* Chat List */}
                    <div className='flex flex-col gap-2'>
                        {/* Selected / Active Chat Item */}
                        <div className='flex items-center justify-between p-3 rounded-2xl bg-slate-100/80 cursor-pointer transition-all duration-200 hover:bg-slate-200/70'>
                            <div className='flex items-center gap-3 min-w-0'>
                                <img src={profile} alt="profile" className='w-11 h-11 rounded-full object-cover shrink-0' />
                                <div className='truncate'>
                                    <p className='text-sm font-semibold text-slate-800 truncate'>Real estate deals</p>
                                    <p className='text-xs text-slate-500 font-medium truncate'>typing...</p>
                                </div>
                            </div>
                            <span className='text-xs text-slate-400 shrink-0 font-medium'>11:15</span>
                        </div>

                        {/* Standard Chat Item 1 */}
                        <div className='flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all duration-200 hover:bg-slate-100'>
                            <div className='flex items-center gap-3 min-w-0'>
                                <img src={profile} alt="profile" className='w-11 h-11 rounded-full object-cover shrink-0' />
                                <div className='truncate'>
                                    <p className='text-sm font-semibold text-slate-800 truncate'>Ashraful Pathan</p>
                                    <p className='text-xs text-slate-400 truncate'>I will send the document s...</p>
                                </div>
                            </div>
                            <span className='text-xs text-slate-400 shrink-0 font-medium'>11:15</span>
                        </div>

                        {/* Standard Chat Item 2 */}
                        <div className='flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all duration-200 hover:bg-slate-100'>
                            <div className='flex items-center gap-3 min-w-0'>
                                <div className='w-11 h-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold text-xs shrink-0'>
                                    TS
                                </div>
                                <div className='truncate'>
                                    <p className='text-sm font-semibold text-slate-800 truncate'>Tailwind cli</p>
                                    <p className='text-xs text-slate-400 truncate'>are you going to a busine...</p>
                                </div>
                            </div>
                            <span className='text-xs text-slate-400 shrink-0 font-medium'>10:05</span>
                        </div>

                        {/* Standard Chat Item 3 */}
                        <div className='flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all duration-200 hover:bg-slate-100'>
                            <div className='flex items-center gap-3 min-w-0'>
                                <img src={profile} alt="profile" className='w-11 h-11 rounded-full object-cover shrink-0' />
                                <div className='truncate'>
                                    <p className='text-sm font-semibold text-slate-800 truncate'>Jon Don</p>
                                    <p className='text-xs text-slate-400 truncate'>I suggest to start, I have n...</p>
                                </div>
                            </div>
                            <span className='text-xs text-slate-400 shrink-0 font-medium'>15.09</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// import icon1 from '../assets/chevron-left.svg'
// import icon2 from '../assets/circle-plus.svg'
// import profile from '../assets/ashraful.png'
// import search_ico from '../assets/search.svg'
// import arrow_don from '../assets/chevron-down.svg'

// export default function Group() {
//     return (
//         <div className='border-l-2 border-l-gray-800 rounded-l-2xl py-10 w-72 '>
//             <div>
//                 <div>
//                     <button className='flex flex-row items-center'>
//                         <img src={icon1} alt="arrow icon" />
//                         Chat
//                     </button>
//                     <hr className='mt-8 mx-5 ' />
//                 </div>

//                 <div className='flex flex-col items-center'>
//                     {/* profile */}
//                     <div>
//                         <div>
//                             <img src={profile} alt="image" width={150} />
//                         </div>
//                         <button>
//                             active
//                             <img src={arrow_don} alt="arrow down" />
//                         </button>
//                     </div>
//                     {/* search */}
//                     <div className='mt-8'>
//                         <input type="text" name="search-pro" id="search-pro" className='border' />
//                         <button>
//                             <img src={search_ico} alt='search icon' />
//                         </button>
//                     </div>
//                 </div>

//                 <div>
//                     <div className='flex flex-row items-center gap-10 my-8'>
//                         <p>Last Chat</p>
//                         <button>
//                             <img src={icon2} alt="icon" />
//                         </button>

//                     </div>
//                     <div>
//                         <div className='flex flex-row'>
//                             <div className='flex flex-row gap-4' >
//                                 <div>
//                                     <img src={profile} alt="profile" width={50} className='bg-blue-400 rounded-full' />
//                                 </div>
//                                 <div>
//                                     <p>Name</p>
//                                     <p>last chat</p>
//                                 </div>

//                             </div>

//                             <p>date and time</p>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }