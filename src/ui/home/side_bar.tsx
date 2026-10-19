import Profile from '../assets/ashraful.png'
import Logo from '../assets/react.svg'
import icon1 from '../assets/clock-4.svg'
import icon2 from '../assets/notebook-pen.svg'
import icon3 from '../assets/eye.svg'
import icon4 from '../assets/users.svg'
import icon5 from '../assets/chart-no-axes-column-increasing.svg'
import icon6 from '../assets/video.svg'



export default function Side_Bar(){
    return(
        <div className=''>
            <div className='flex flex-col items-center justify-between mx-auto my-auto px-10 py-10'>
                <div>
                    <a href="#">
                        <img src={Logo} alt="logo" />
                    </a>
                </div>
                <div className='flex flex-col items-center gap-10 mt-20'>
                    <button className='hover:bg-gray-300 w-10 h-10 flex flex-col items-center justify-center '>
                        <img src={icon1} alt="icon" />
                    </button>
                    <button className='hover:bg-gray-300 w-10 h-10 flex flex-col items-center justify-center '>
                        <img src={icon2} alt="icon" />
                    </button>
                    <button className='hover:bg-gray-300 w-10 h-10 flex flex-col items-center justify-center '>
                        <img src={icon3} alt="icon" />
                    </button>
                    <button className='hover:bg-gray-300 w-10 h-10 flex flex-col items-center justify-center '>
                        <img src={icon4} alt="icon" />
                    </button>
                    <button className='hover:bg-gray-300 w-10 h-10 flex flex-col items-center justify-center '>
                        <img src={icon5} alt="icon" />
                    </button>
                    <button className='hover:bg-gray-300 w-10 h-10 flex flex-col items-center justify-center '>
                        <img src={icon6} alt="icon" />
                    </button>
                </div>
                <div >
                    <img src={Profile} alt="profile" width={50} height={50} className=' w-[250] h-[250] bg-blue-400 rounded-full mt-14 object-cover ' />
                </div>
            </div>
        </div>
       
    )
}