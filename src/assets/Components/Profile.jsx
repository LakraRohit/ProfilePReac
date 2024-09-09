import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import AmazonL from '../Img/AmazonL.jpg';
import DSA from '../Img/dsaL.png';
import FrontEnd from '../Img/frontEnd.png';
import HtmlL from '../Img/HTML.png';
import Log3 from '../Img/ilog1.webp';
import Log2 from '../Img/ilog2.png';
import Log1 from '../Img/ilog3.png';
import JavaScriptL from '../Img/JavaScript.png';
import NodeL from '../Img/NodeJs.png';
import PP from '../Img/Pp1.png';
import ReactL from '../Img/React.png';
import Spotify from '../Img/spotifyL.png';
import SpyDl from '../Img/SpYDL.png';
import StrtUpL from '../Img/StL.png';
import SupSearch from '../Img/SupSL.png';
import TailWind from '../Img/TailWindCss.png';
import Vbg from '../Vid/Vbg.mp4';





const Profile = () => {
  return (


    <div  className=' overflow-y-auto flex flex-col items-center  bg-slate-200  '>

        {/* HOme Container  */}
        <div className=' mt-0 w-full  h-auto flex justify-center '>

            <video src={Vbg} 
            autoPlay 
            loop 
            muted 
            className='absolute top-0 left-0 w-full h-full object-cover'>   
            </video>



        
        
        {/* My Picture and About Sectio  */}
        <div className=' top-0 left-0 w-full h-full flex flex-col  items-center z-10'>

        {/* Nav Bar */}
        <div className='fixed  z-10 text-white text-2xl  moving-gradient space-x-12 w-9/12 h-16 font-normal rounded-b-full flex flex-row justify-center items-center shadow-slate-50'>
          <div className=' hover:cursor-pointer hover:scale-105'>Home</div>
          <div className=' hover:cursor-pointer hover:scale-105'>About</div>
          <div className=' hover:cursor-pointer hover:scale-105'>Skills</div>
          <div className=' hover:cursor-pointer hover:scale-105'>Experiences</div>
          <div className=' hover:cursor-pointer hover:scale-105'>Projects</div>
          <div className=' hover:cursor-pointer hover:scale-105'>Contact</div>
        </div>
        {/* Nav Bar Ends Here */}

        <div className='w-9/12 h-96  mt-16 flex '>

            <div className='flex flex-col justify-center items-center w-full h-full bg-black/70'>
                <div className='text-white text-5xl font-bold '>Hi 👋 I'm Rohit Kumar Lakra</div>
                <div className='text-white font-medium mt-5'>
                <TypeAnimation
                    sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'I Am Front-End Developer 🎨',
                     1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'I Am Back-End Developer 🙆‍♂️',
                    1000,
                    'I Am Software Developer 💻',
                    1000,
                    'I Am Full-Stack Developer ✨',
                    1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
                </div>
                <div className='text-white flex flex-col justify-center items-center text-center text-xl mt-5 font-sans'>
                    <div>
                        A motivated Engineering, seeking a responsible Job/Internship opportunity preferably in Software Development,
                        
                    <div>
                        Full-Stack Development domain to leverage and improve my skills in strategic planning, team management,  
                    </div>
                    <div>
                        and professional communication to contribute to the growth of the organization and myself.
                    </div>
                    </div>
                </div>    
            </div>
        </div>
        {/* button container  */}
        <div className='flex flex-center items-center space-x-7 font-mono'>
            <button onClick={() => window.open('https://drive.google.com/file/d/1lw_prChScw4OdIrHG950urcHjXxvGWyl/view?usp=sharing', '_blank')}
            className='text-white h-9 w-28 bg-blue-600/50 rounded-2xl hover:scale-105'>Resume</button>
            <button className='text-white h-9 w-28 bg-blue-600/50 rounded-2xl hover:scale-x-105'>Projects</button>
        </div>
        </div>
        {/* My Picture and About Sections End Here  */}  
        </div>
        {/* Home Container Ends  */}








        <div className=' mt-48 w-full h-auto flex flex-center flex-row  '>
            
            {/* <div className='w-full flex flex-col  items-center  text-black'>
                <h1 className='font-bold text-5xl '>About</h1>
            </div> */}

            <div className='h-full w-1/3  flex justify-center flex-col items-center'>
                <img className='' src={PP} alt="" />
                <div className='bg-gray-400  w-96 h-16 rounded-3xl flex justify-center items-center hover:scale-110 '>
                <h1 className='text-white text-4xl font-bold  '>Hello There 👋</h1>
                </div>
            </div>

            <div className='w-1/2 h-96  ml-40'>
                <div className='mt-8 text-7xl font-normal'>About Me...</div>
                <div className='w-full h-full font-normal text-black flex flex-col items-center justify-center'>
                    With a robust background in Programming and Software Development, I am enthusiastic about the opportunity to contribute my expertise and dedication to your esteemed team.
                    Throughout my academic journey and professional experiences, I have acquired valuable expertise in Full Stack and Software Development domains, which I believe closely align with the prerequisites for this role. My unwavering passion for continuous learning and commitment to consistently delivering outstanding results make me a formidable candidate for this position.
                    <div className='mt-10'>During my tenure at First Harvests, I had the privilege of honing my skills and managing tasks to their optimum level. I am confident that these competencies, coupled with my strong analytical abilities and unwavering dedication to continuous improvement, will enable me to excel in this position.
                    </div>
                    </div>
                </div>

            </div>

            <div className=' w-44 h-20 flex flex-row justify-center items-center space-x-3'>
                <img   onClick={() => window.open('https://www.linkedin.com/in/rohit-kumar-lakra-a34698225/', '_blank')}
                className='w-12 hover:scale-105 hover:cursor-pointer' src={Log2} alt="" />
                <img onClick={() => window.open('https://github.com/LakraRohit', '_blank')}
                className='w-12 hover:scale-105 hover:cursor-pointer' src={Log1} alt="" />
                <img onClick={() => window.open('https://www.hackerrank.com/profile/rohit_rkl_kumar', '_blank')}
                className='w-12 hover:scale-105 hover:cursor-pointer' src={Log3} alt="" />
            </div>





        <div className=' w-full h-auto  mt-36 flex- flex-col'>

            <div className=' text-7xl font-normal w-full  flex justify-center'>
                Skills
            </div>

            <div className='w-full h-full  bg-opacity-15 flex justify-center items-center flex-row space-x-10'>
                <img className='w-52 hover:rotate-45 hover:scale-105' src={ReactL} alt="" />
                <img className='w-52 hover:scale-105' src={NodeL} alt="" />
                <img className='w-52 hover:-hue-rotate-30' src={JavaScriptL} alt="" />
                <img className='w-52 hover:rotate-45' src={TailWind} alt="" />
                <img className='w-52 hover:-rotate-45' src={HtmlL} alt="" />
            </div>

            <div className=' flex flex-col text-7xl font-normal w-full mt-3  justify-center items-center'>
                Proficiencies
                <div className='flex flex-row justify-center items-center space-x-10'>
                    <img className='w-52 hover:scale-105' src={FrontEnd} alt="" />
                    <img className='w-60 hover:scale-105 mt-5' src={DSA} alt="" />
                </div>
            </div>            
        </div>




        <div className='flex flex-col text-7xl w-full h-auto font-normal mt-36 justify-center items-center overflow-hidden'>
    Experiences

    <div className='w-full h-96 flex flex-row'>
        <div className='w-1/3 h-full'>
            <img className='w-96' src={StrtUpL} alt="" />
        </div>
        <div className='text-black w-full h-auto text-5xl ml-6 mt-5'>
            First Harvests (Start-Up)
            <div className='w-full h-full'>
                <p className='text-lg mt-1 text-black font-normal'>
                    As a co-founder and Full Stack Developer at an agriculture-based startup, I contributed to the development and execution of innovative solutions for agro-based challenges. I applied my mechanical engineering skills and knowledge to design and optimize the processes and systems involved in the production, distribution, and delivery of agricultural products and services.
                </p>
                <p className='text-lg mt-1 text-black font-normal'>
                    Also crafted an interactive and visually captivating web page with a dynamic front-end team, using JavaScript and CSS to seamlessly accept and process orders along with integration of 3rd party payment gateways, ensuring secure and hassle-free online transactions for customers. Identifying and resolving Front-end issues, bugs, and user interface discrepancies reported by users or detected during test.
                </p>
                <p className='text-lg mt-1 text-black font-normal'>
                    Collaborating with designers, back-end developers, and other team members to deliver high-quality web project.
                </p>
                <p className='text-2xl'>
                    Jan/2020 - Dec/2020 (Co-Founder)
                </p>
            </div>
        </div>
    </div>

    <div className='w-full h-96 flex flex-row mt-5'>
        <div className='text-black w-4/6 h-auto text-5xl ml-6 mt-5 p-4'>
            SPY D TECHNOLOGY PVT LTD.
            <div className='w-full h-full'>
                <p className='text-lg mt-3 text-black font-normal'>
                    At SPY D Technology, we redefine innovation with our cutting-edge solutions that seamlessly integrate technology into everyday life. The 'D' in our name signifies our dedication to delivering Distinctive, Dynamic, and Disruptive solutions that cater to the evolving needs of modern businesses and consumers alike. Backed by a team of industry experts and driven by a passion for excellence, we are committed to shaping the future of technology with creativity, precision, and a relentless pursuit of perfection.
                </p>
                <p className='text-2xl'>
                    July/2024 - Present (Associate Intern)
                </p>
            </div>
        </div>

        <div className='w-2/6 flex justify-center items-center'>
            <img className='w-96' src={SpyDl} alt="SPY D Technology Logo" />
        </div>
    </div>
</div>
{/* Experience Container Ended  */}











    <div className='w-full h-auto '>

        <div className=' text-7xl text-black font-normal flex  justify-center '>Projects</div>
        <div className='flex justify-center items-center space-x-8 mt-5 mb-5'>

        <div className='w-80 h-80  hover:scale-105 hover:cursor-pointer  flex flex-col items-center justify-center shadow-2xl'>
            <div className='flex flex-col items-center'>
                <img onClick={() => window.open('https://venerable-pudding-dacda8.netlify.app', '_blank')} 
                className='shadow-2xl' src={Spotify} alt="" />
                    <div className='flex items-center justify-center'>
                        <h1 className='font-medium'>Spotify App</h1>
                    </div>
            <div>
                <h2>Html, CSS, JavaScript</h2>
            </div>
            </div>
            </div>


            <div className='w-96 h-96  hover:scale-105 hover:cursor-pointer shadow-2xl '>
            <div className='flex flex-col items-center'>
                <img onClick={() => window.open('https://lakrarohit.github.io/Amazon-clone-/', '_blank')}  
                className='shadow-2xl' src={AmazonL} alt="" />
                    <div className='flex items-center justify-center'>
                        <h1 className='font-medium'>Amazon App</h1>
                    </div>
            <div>
                <h2>Html, CSS, JavaScript</h2>
            </div>
            </div>
            </div>

            
            
            
               
            <div className='w-80 h-80  hover:scale-105 hover:cursor-pointer shadow-2xl'>
            <div className='flex flex-col items-center'>
                <img onClick={() => window.open('https://lakrarohit.github.io/SuperHeros-Library/', '_blank')}
                className='shadow-2xl' src={SupSearch} alt="" />
                    <div className='flex items-center justify-center'>
                        <h1 className='font-medium'>Super Search App</h1>
                    </div>
            <div>
                <h2>Html, CSS, JavaScript</h2>
            </div>
            </div>

            </div>
            

        </div>
        
    </div>
    {/* Projects Ends Here  */}



    <div className='w-full h-auto  mt-36 flex justify-center items-center flex-col'>

        <div className='text-7xl  font-normal mt-5'>
            Contact
        </div>
        <div className='w-full h-full  flex flex-col justify-center mb-10 items-center'>

            <input className='w-1/2 pl-3 h-11 bg-white/70 outline-none mt-3' placeholder='Your Name... ' type="text" />
            <input className='w-1/2 pl-3 h-11 bg-white/70 outline-none mt-3' placeholder='Your Email... ' type="text" />
            <input className='w-1/2 pl-3 h-11 bg-white/70 outline-none mt-3' placeholder='Subject... ' type="text" />
            <input className='w-1/2 pl-3 h-48 bg-white/70 outline-none mt-3' placeholder='Message... ' type="text" />

            <button className='w-1/2 h-10 bg-blue-500 mt-3 hover:scale-105'  > 
            send
            </button>

            <h1 className='mt-3 hover:cursor-pointer'>abc@gmial.com</h1>


        </div>
    </div>















    </div>



  )
}

export default Profile
