import profile from '../assets/ashraful.png';
import file_ioc from '../assets/folder.svg';
import dont_menu from '../assets/ellipsis-vertical.svg';
import icon1 from '../assets/file.svg';
import icon2 from '../assets/file-image.svg';
import icon3 from '../assets/file-play.svg';
import icon4 from '../assets/file-cog.svg';

export default function Files() {
    return (
        <div className="w-full max-w-xs md:w-80 h-screen flex flex-col justify-between py-6 px-4 bg-white border-l border-slate-100 overflow-y-auto shrink-0">
            <div>
                {/* Header Section */}
                <div className="flex items-center gap-4 mb-4">
                    <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 transition-transform duration-200 hover:scale-105">
                        <span className="text-slate-600 font-bold text-sm">›</span>
                    </button>
                    <h1 className="text-xl font-semibold text-slate-800">Shared files</h1>
                </div>

                <hr className="border-slate-100 my-4" />

                {/* Profile / Group Info */}
                <div className="flex flex-col items-center mt-6">
                    <img 
                        src={profile} 
                        alt="image" 
                        className="w-24 h-24 rounded-full object-cover shadow-sm" 
                    />
                    <h2 className="text-lg font-semibold text-slate-800 mt-3">Real estate deals</h2>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">10 members</p>
                </div>

                {/* Top Summary Cards */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                    {/* Active All Files Card */}
                    <div className="relative bg-emerald-100/60 p-4 rounded-2xl flex flex-col justify-between h-28 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
                        <span className="absolute top-3 right-3 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"></span>
                        <img src={file_ioc} alt="file" className="w-6 h-6 text-emerald-600" />
                        <div>
                            <p className="text-xs text-slate-600 font-medium">All files</p>
                            <p className="text-2xl font-bold text-slate-800 leading-none mt-1">231</p>
                        </div>
                    </div>

                    {/* All Links Card */}
                    <div className="relative bg-slate-100/70 p-4 rounded-2xl flex flex-col justify-between h-28 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
                        <span className="absolute top-3 right-3 w-3 h-3 rounded-full bg-white border border-slate-200"></span>
                        <img src={file_ioc} alt="links" className="w-6 h-6 opacity-40" />
                        <div>
                            <p className="text-xs text-slate-500 font-medium">All links</p>
                            <p className="text-2xl font-bold text-slate-800 leading-none mt-1">45</p>
                        </div>
                    </div>
                </div>

                {/* File Types Section */}
                <div className="mt-8">
                    <div className="flex items-center justify-between mb-4">
                        <p className="font-semibold text-slate-800 text-base">File type</p>
                        <button className="p-1 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                            <img src={dont_menu} alt="dot menu" className="w-4 h-4 opacity-50" />
                        </button>
                    </div>

                    {/* File Types List */}
                    <div className="flex flex-col gap-3">
                        {/* Documents */}
                        <div className="flex items-center justify-between p-2.5 rounded-2xl cursor-pointer transition-all duration-200 hover:bg-slate-50 hover:scale-[1.01]">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center shrink-0">
                                    <img src={icon1} alt="icon" className="w-5 h-5 opacity-70" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">Documents</p>
                                    <p className="text-xs text-slate-400 font-medium">126 files, 193MB</p>
                                </div>
                            </div>
                            <span className="text-slate-400 font-bold text-sm">›</span>
                        </div>

                        {/* Photos */}
                        <div className="flex items-center justify-between p-2.5 rounded-2xl cursor-pointer transition-all duration-200 hover:bg-slate-50 hover:scale-[1.01]">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
                                    <img src={icon2} alt="icon" className="w-5 h-5 opacity-70" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">Photos</p>
                                    <p className="text-xs text-slate-400 font-medium">53 files, 321MB</p>
                                </div>
                            </div>
                            <span className="text-slate-400 font-bold text-sm">›</span>
                        </div>

                        {/* Movies */}
                        <div className="flex items-center justify-between p-2.5 rounded-2xl cursor-pointer transition-all duration-200 hover:bg-slate-50 hover:scale-[1.01]">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center shrink-0">
                                    <img src={icon3} alt="icon" className="w-5 h-5 opacity-70" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">Movies</p>
                                    <p className="text-xs text-slate-400 font-medium">3 files, 210MB</p>
                                </div>
                            </div>
                            <span className="text-slate-400 font-bold text-sm">›</span>
                        </div>

                        {/* Other / Settings */}
                        <div className="flex items-center justify-between p-2.5 rounded-2xl cursor-pointer transition-all duration-200 hover:bg-slate-50 hover:scale-[1.01]">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center shrink-0">
                                    <img src={icon4} alt="icon" className="w-5 h-5 opacity-70" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">Other</p>
                                    <p className="text-xs text-slate-400 font-medium">49 files, 194MB</p>
                                </div>
                            </div>
                            <span className="text-slate-400 font-bold text-sm">›</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


// import profile from '../assets/ashraful.png';
// import file_ioc from '../assets/folder.svg';
// import dont_menu from '../assets/ellipsis-vertical.svg';
// import icon1 from '../assets/file.svg';
// import icon2 from '../assets/file-image.svg';
// import icon3 from '../assets/file-play.svg';
// import icon4 from '../assets/file-cog.svg';


// export default function Files(){
//     return(
//         <div className="w-[10vw] ">
//             <div>

//                 {/* profile */}
//                 <div className='flex flex-col items-center'>
//                     <div>
//                         <div>
//                             <img src={profile} alt="image" width={150} />
//                         </div>
//                         <p>Ashraful Pathan</p>
//                     </div>
//                 </div>

//                 <div>
//                     <div>
//                         <img src={file_ioc} alt="file" />
//                         <p>all files</p>
//                     </div>
//                     <div className='flex flex-row gap-5'>
//                         <p>File Type</p>
//                         <img src={dont_menu} alt="dot menu" />
//                     </div>
//                     <div>
//                         <img src={icon1} alt="icon" />
//                         <p>Document</p>
//                     </div>
//                     <div>
//                         <img src={icon2} alt="icon" />
//                         <p>Photo</p>
//                     </div>
//                     <div>
//                         <img src={icon3} alt="icon" />
//                         <p>Movie</p>
//                     </div>
//                     <div>
//                         <img src={icon4} alt="icon" />
//                         <p>File Setting</p>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }