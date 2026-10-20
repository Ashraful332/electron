import profile from '../assets/ashraful.png'
import icon1 from '../assets/face-slightly-smiling.svg'
import icon2 from '../assets/link.svg'
import icon3 from '../assets/send.svg'
import { useEffect, useState } from "react";
import { getChat, addChat, updateChat, deleteChat } from "../../server/api";

export default function Chat() {
    const [chat, setChat] = useState<any[]>([]);
    const [title, setTitle] = useState("");
    
    // Edit state management
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editText, setEditText] = useState("");

    const loadChat = async () => {
        const data = await getChat();
        setChat(data);
    };

    useEffect(() => {
        loadChat();
    }, []);

    const handleAdd = async () => {
        if (!title.trim()) return;
        await addChat(title);
        setTitle("");
        loadChat();
    };

    const handleDelete = async (id: number) => {
        await deleteChat(id);
        loadChat();
    };

    const startEditing = (data: any) => {
        setEditingId(data.id);
        setEditText(data.title);
    };

    const handleUpdate = async (id: number) => {
        if (!editText.trim()) return;
        await updateChat(id, editText);
        setEditingId(null);
        setEditText("");
        loadChat();
    };

    console.log(chat);
    
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

                {/* Outgoing Message (Right Aligned) */}
                <div className="flex flex-col items-end self-end max-w-xl">
                    <span className="text-[11px] text-slate-400 mb-1 mr-1">11:32 AM</span>
                    <div className="bg-indigo-100/80 p-3.5 rounded-2xl rounded-tr-sm text-sm text-slate-800 shadow-sm">
                        Great, I'll notify the key stakeholders. Check the file sharing tab.
                    </div>
                </div>

                {/* Data Loading & Messages */}
                {chat.map((data) => (
                    <div key={data.id} className="flex items-start gap-3 max-w-xl group">
                        <img src={profile} alt="profile" className="w-8 h-8 rounded-full object-cover shrink-0 mt-6" />
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold text-slate-800">Ashraful Pathan</span>
                                    <span className="text-[11px] text-slate-400">{data.Time} </span>
                                </div>
                                {/* Edit & Delete Actions (Visible on Hover to preserve clean UI) */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-medium">
                                    <button onClick={() => startEditing(data)} className="text-indigo-600 hover:underline">Edit</button>
                                    <button onClick={() => handleDelete(data.id)} className="text-rose-500 hover:underline">Delete</button>
                                </div>
                            </div>

                            {/* Conditional Inline Editing or Normal View */}
                            {editingId === data.id ? (
                                <div className="flex items-center gap-2 mt-1">
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        className="w-full bg-white p-2.5 rounded-xl text-sm text-slate-800 shadow-sm border border-slate-200 focus:outline-none"
                                    />
                                    <button
                                        onClick={() => handleUpdate(data.id)}
                                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 rounded-xl text-xs font-medium shadow-sm shrink-0">
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setEditingId(null)}
                                        className="text-slate-500 hover:text-slate-800 text-xs px-2 shrink-0">
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm text-sm text-slate-800 shadow-sm border border-slate-100 flex items-center justify-between">
                                    <span>{data.title}</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}

            </div>

            {/* Input Message Bar */}
            <div className="pt-2">
                <div className="bg-white flex items-center gap-2 px-4 py-2 rounded-2xl shadow-sm border border-slate-100">
                    <input
                        type="text"
                        name="send-msg"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
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

                        <button
                            onClick={handleAdd}
                            className="w-9 h-9 flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-all duration-200 hover:scale-105 shadow-sm">
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
// import { useEffect, useState } from "react";
// import { getChat, addTodo } from "../../server/api";

// export default function Chat() {
//     const [Chat, setChat] = useState<any[]>([]);
//     const [title, setTitle] = useState("");

//     const loadChat = async () => {
//         const data = await getChat();
//         setChat(data);
//     };

//     useEffect(() => {
//         // eslint-disable-next-line react-hooks/set-state-in-effect
//         loadChat();
//     }, []);

//     const handleAdd = async () => {
//         await addTodo(title);
//         setTitle("");
//         loadChat();
//     };

//     return (
//         <div className="flex-1 h-screen flex flex-col justify-between bg-slate-100/70 py-6 px-4 md:px-8 overflow-hidden">
//             {/* Header Section */}
//             <div>
//                 <div className="flex items-center justify-between pb-4">
//                     <h2 className="text-xl font-semibold text-slate-800">Group Chat</h2>

//                     {/* Tab Switcher */}
//                     <div className="flex items-center bg-slate-200/60 p-1 rounded-2xl text-xs font-medium">
//                         <button className="px-4 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 shadow-sm transition-all duration-200">
//                             Messages
//                         </button>
//                         <button className="px-4 py-1.5 rounded-xl text-slate-500 hover:text-slate-800 transition-colors duration-200">
//                             Participants
//                         </button>
//                     </div>
//                 </div>
//                 <hr className="border-slate-200" />
//             </div>

//             {/* Chat Messages Section */}
//             <div className="flex-1 overflow-y-auto py-6 pr-2 flex flex-col gap-6">

//                 {/* Outgoing Message (Right Aligned) */}
//                 <div className="flex flex-col items-end self-end max-w-xl">
//                     <span className="text-[11px] text-slate-400 mb-1 mr-1">11:32 AM</span>
//                     <div className="bg-indigo-100/80 p-3.5 rounded-2xl rounded-tr-sm text-sm text-slate-800 shadow-sm">
//                         Great, I'll notify the key stakeholders. Check the file sharing tab.
//                     </div>
//                 </div>

//                 {/* Data Loading */}
//                 {Chat.map((data) => (
//                     // Incoming Message  
//                     <div key={data.id} className="flex items-start gap-3 max-w-xl">
//                         <img src={profile} alt="profile" className="w-8 h-8 rounded-full object-cover shrink-0 mt-6" />
//                         <div>
//                             <div className="flex items-center gap-2 mb-1">
//                                 <span className="text-xs font-semibold text-slate-800">Ashraful Pathan</span>
//                                 <span className="text-[11px] text-slate-400">11:35 AM</span>
//                             </div>
//                             <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm text-sm text-slate-800 shadow-sm border border-slate-100">
//                                 {data.title} - {data.completed ? "✔" : "❌"}
//                             </div>
//                         </div>
//                     </div>
//                 ))}

//             </div>

//             {/* Input Message Bar */}
//             <div className="pt-2">
//                 <div className="bg-white flex items-center gap-2 px-4 py-2 rounded-2xl shadow-sm border border-slate-100">
//                     <input
//                         type="text"
//                         name="send-msg"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         id="send-msg"
//                         placeholder="Write your message..."
//                         className="w-full bg-transparent text-sm text-slate-800 focus:outline-none placeholder:text-slate-400"
//                     />

//                     <div className="flex items-center gap-2 shrink-0">
//                         <button className="p-1.5 opacity-60 hover:opacity-100 transition-opacity duration-200 hover:scale-110">
//                             <img src={icon1} alt="emoji" className="w-5 h-5" />
//                         </button>

//                         <button className="p-1.5 opacity-60 hover:opacity-100 transition-opacity duration-200 hover:scale-110">
//                             <img src={icon2} alt="attachment" className="w-5 h-5" />
//                         </button>

//                         <button
//                             onClick={handleAdd}
//                             className="w-9 h-9 flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-all duration-200 hover:scale-105 shadow-sm">
//                             <img src={icon3} alt="send" className="w-4 h-4 invert" />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
