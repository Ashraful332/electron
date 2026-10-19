import profile from '../assets/ashraful.png'
import icon1 from '../assets/face-slightly-smiling.svg'
import icon2 from '../assets/link.svg'
import icon3 from '../assets/send.svg'

export default function Chat() {
    return (
        <div className="flex-1 h-screen flex flex-col justify-between bg-slate-100/70 py-6 px-4 md:px-8 overflow-hidden">
            {/* Header Section */}
            <div>
                <div className="flex items-center justify-between pb-4">
                    <h2 className="text-xl font-semibold text-slate-800">Group Chat</h2>
                    
                    {/* Tab Switcher */}
                    <div className="flex items-center bg-slate-200/60 p-1 rounded-2xl text-xs font-medium">
                        <button className="px-4 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 shadow-sm transition-all duration-200">
                            Messages
                        </button>
                        <button className="px-4 py-1.5 rounded-xl text-slate-500 hover:text-slate-800 transition-colors duration-200">
                            Participants
                        </button>
                    </div>
                </div>
                <hr className="border-slate-200" />
            </div>

            {/* Chat Messages Section */}
            <div className="flex-1 overflow-y-auto py-6 pr-2 flex flex-col gap-6">
                
                {/* Incoming Message 1 */}
                <div className="flex items-start gap-3 max-w-xl">
                    <img src={profile} alt="profile" className="w-8 h-8 rounded-full object-cover shrink-0 mt-6" />
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-slate-800">Evan Scott</span>
                            <span className="text-[11px] text-slate-400">11:24 AM</span>
                        </div>
                        <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm text-sm text-slate-800 shadow-sm border border-slate-100">
                            I'm setting up the files, will send soon.
                        </div>
                    </div>
                </div>

                {/* Incoming Message 2 */}
                <div className="flex items-start gap-3 max-w-xl">
                    <img src={profile} alt="profile" className="w-8 h-8 rounded-full object-cover shrink-0 mt-6" />
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-slate-800">Kate Johnson</span>
                            <span className="text-[11px] text-slate-400">11:28 AM</span>
                        </div>
                        <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm text-sm text-slate-800 shadow-sm border border-slate-100">
                            I've reviewed the final deal contract. Looks good, let's proceed.
                        </div>
                    </div>
                </div>

                {/* Outgoing Message (Right Aligned) */}
                <div className="flex flex-col items-end self-end max-w-xl">
                    <span className="text-[11px] text-slate-400 mb-1 mr-1">11:32 AM</span>
                    <div className="bg-indigo-100/80 p-3.5 rounded-2xl rounded-tr-sm text-sm text-slate-800 shadow-sm">
                        Great, I'll notify the key stakeholders. Check the file sharing tab.
                    </div>
                </div>

                {/* Incoming Message 3 */}
                <div className="flex items-start gap-3 max-w-xl">
                    <img src={profile} alt="profile" className="w-8 h-8 rounded-full object-cover shrink-0 mt-6" />
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-slate-800">Jontray Arnold</span>
                            <span className="text-[11px] text-slate-400">11:35 AM</span>
                        </div>
                        <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm text-sm text-slate-800 shadow-sm border border-slate-100">
                            Final approvals are in order. Good work team!
                        </div>
                    </div>
                </div>

                {/* Incoming Message 4 */}
                <div className="flex items-start gap-3 max-w-xl">
                    <img src={profile} alt="profile" className="w-8 h-8 rounded-full object-cover shrink-0 mt-6" />
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-slate-800">Tamara Shevchenko</span>
                            <span className="text-[11px] text-slate-400">11:38 AM</span>
                        </div>
                        <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm text-sm text-slate-800 shadow-sm border border-slate-100">
                            Adding the final project plan now.
                        </div>
                    </div>
                </div>

            </div>

            {/* Input Message Bar */}
            <div className="pt-2">
                <div className="bg-white flex items-center gap-2 px-4 py-2 rounded-2xl shadow-sm border border-slate-100">
                    <input 
                        type="text" 
                        name="send-msg" 
                        id="send-msg" 
                        placeholder="Write your message..."
                        className="w-full bg-transparent text-sm text-slate-800 focus:outline-none placeholder:text-slate-400" 
                    />
                    
                    <div className="flex items-center gap-2 shrink-0">
                        <button className="p-1.5 opacity-60 hover:opacity-100 transition-opacity duration-200 hover:scale-110">
                            <img src={icon1} alt="emoji" className="w-5 h-5" />
                        </button>

                        <button className="p-1.5 opacity-60 hover:opacity-100 transition-opacity duration-200 hover:scale-110">
                            <img src={icon2} alt="attachment" className="w-5 h-5" />
                        </button>

                        <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-all duration-200 hover:scale-105 shadow-sm">
                            <img src={icon3} alt="send" className="w-4 h-4 invert" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// import profile from '../assets/ashraful.png'
// import icon1 from '../assets/face-slightly-smiling.svg'
// import icon2 from '../assets/link.svg'
// import icon3 from '../assets/send.svg'



// export default function Chat() {
//     return (
//         <div className="bg-gray-300 w-[40vw] mx-2 my-2 rounded-2xl">
//             <div>
//                 <div className="pt-5">
//                     <p className="ml-5">Group Chat</p>
//                     <hr className="my-5" />
//                 </div>
//                 <div className='px-3'>
//                     {/* chate demo */}
//                     <div className='flex flex-row'>
//                         <div className='flex flex-row gap-4' >
//                             <div>
//                                 <img src={profile} alt="profile" width={50} className='bg-blue-400 rounded-full' />
//                             </div>
//                             <div>
//                                 <p>Name</p>
//                                 <p>last chat</p>
//                             </div>

//                         </div>

//                         <p>date and time</p>
//                     </div>
//                     {/* send message */}
//                     <div>
//                         <input type="text" name="send-msg" id="send-msg" className='border' />
//                         <button>
//                             {/* emoje */}
//                             <img src={icon1} alt="emmojy" />
//                         </button>
//                         <button>
//                             {/* emoje */}
//                             <img src={icon2} alt="emmojy" />
//                         </button>
//                         <button>
//                             {/* emoje */}
//                             <img src={icon3} alt="emmojy" />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }