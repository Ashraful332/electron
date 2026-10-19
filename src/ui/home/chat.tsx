import profile from '../assets/ashraful.png'
import icon1 from '../assets/face-slightly-smiling.svg'
import icon2 from '../assets/link.svg'
import icon3 from '../assets/send.svg'



export default function Chat() {
    return (
        <div className="bg-gray-300 w-[40vw] mx-2 my-2 rounded-2xl">
            <div>
                <div className="pt-5">
                    <p className="ml-5">Group Chat</p>
                    <hr className="my-5" />
                </div>
                <div className='px-3'>
                    {/* chate demo */}
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
                    {/* send message */}
                    <div>
                        <input type="text" name="send-msg" id="send-msg" className='border' />
                        <button>
                            {/* emoje */}
                            <img src={icon1} alt="emmojy" />
                        </button>
                        <button>
                            {/* emoje */}
                            <img src={icon2} alt="emmojy" />
                        </button>
                        <button>
                            {/* emoje */}
                            <img src={icon3} alt="emmojy" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}