import profile from '../assets/ashraful.png';
import file_ioc from '../assets/folder.svg';
import dont_menu from '../assets/ellipsis-vertical.svg';
import icon1 from '../assets/file.svg';
import icon2 from '../assets/file-image.svg';
import icon3 from '../assets/file-play.svg';
import icon4 from '../assets/file-cog.svg';


export default function Files(){
    return(
        <div className="w-[10vw] ">
            <div>

                {/* profile */}
                <div className='flex flex-col items-center'>
                    <div>
                        <div>
                            <img src={profile} alt="image" width={150} />
                        </div>
                        <p>Ashraful Pathan</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src={file_ioc} alt="file" />
                        <p>all files</p>
                    </div>
                    <div className='flex flex-row gap-5'>
                        <p>File Type</p>
                        <img src={dont_menu} alt="dot menu" />
                    </div>
                    <div>
                        <img src={icon1} alt="icon" />
                        <p>Document</p>
                    </div>
                    <div>
                        <img src={icon2} alt="icon" />
                        <p>Photo</p>
                    </div>
                    <div>
                        <img src={icon3} alt="icon" />
                        <p>Movie</p>
                    </div>
                    <div>
                        <img src={icon4} alt="icon" />
                        <p>File Setting</p>
                    </div>
                </div>

            </div>
        </div>
    )
}