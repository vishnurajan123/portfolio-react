import { useState } from 'react';
import './App.css';
// import Cont from './Components/Cont';
// import First from './Components/First';
// import Footer from './Components/Footer';
// // import Home from './Components/Home';
// // import NavBar from './Components/NavBar';
// import Resume from './Components/Resume';
// import Secondd from './Components/Secondd';
// import Skills from './Components/Skills';
// import Works from './Components/Works';
import code1 from './Components/Images/code1.png'
import code2 from './Components/Images/code2.png'
import firstimage from './Components/Images/FireShot Capture 001 - React App - memory-game-vishnu.netlify.app.png'
import hotstar from './Components/Images/hotstar.png'
import budget from './Components/Images/budget.png'
import interst from './Components/Images/interest.png'
import netflix from './Components/Images/netflix.png'
import weather from './Components/Images/weather.png'



function App() {
  const [dark,setDark]=useState(false)
  const darkmode=()=>{
    if(dark==true){
      setDark(false)
    }
    else{
      setDark(true)
    }
  }
  console.log(dark);

  
  return (
    <div className={dark?"bl":""}>
     <div className='nnn'>

     <div >
        <nav class="navbar navbar-expand-lg " style={{backgroundColor:"black"}}>
        <div class="container-fluid">
    <span class="navbar-brand mb-0 h1 text-light">Portfolio</span>
  </div>
  <div class="container-fluid text-light" >
  
   
    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto  mb-2 mb-lg-0 text-light">
        <li class="nav-item me-4">
          <a class="nav-link active text-light" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item me-4">
          <a class="nav-link active text-light" aria-current="page" href="#about">About</a>
        </li>
        <li class="nav-item me-4">
          <a class="nav-link active text-light" aria-current="page" href="#service">Services</a>
        </li>
        <li class="nav-item me-4">
          <a class="nav-link active text-light" aria-current="page" href="#contact">Contact</a>
        </li>
        <li class="nav-item me-5">
          <a class="nav-link active text-light" aria-current="page" href="#projects">Projects</a>
        </li>
        <li class="nav-item me-2">
          <button className='btn btn-none text-light fs-4 ' onClick={darkmode}>{dark?<i class="fa-solid fa-sun"></i>:<i class="fa-solid fa-moon"></i>}</button>
        </li>
       
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
      
       
       
       </div>

{/* home */}
<div id='home'  className={dark?"lack":"hom"}>
        <div className={dark?"firstBlack":"first"}>
            <h3>Hello</h3>
            <h1>I am Vishnu </h1>
            <h2>A Proffesional Web Developer</h2>
            <div className='mt-2'> <button className='hire'><a style={{color:"white",textDecoration:"none"}} href='https://www.linkedin.com/in/vishnu-rajan-58a10627b/

' target='_blank'>Hire me</a></button> <button className='cv'><a style={{textDecoration:"none"}} href='https://azure-marylee-56.tiiny.site/' target='_blank'>Download CV</a></button></div>
        </div>
        <div className='secon'>
            <img src={code1} alt="" />

        </div>

    </div>

      {/* First */}
      <div id='about' data-aos="fade-up" data-aos-duration="1000" className= {dark?"container firstsbl":"firsts container"}>
        <div className='fir'>
            <img src={code2} alt="" />

        </div>
        <div className={dark?"sec blacksec":"sec"}>
            <h1 ><span className='hr'>|</span>About Me</h1>
            <p className={dark?"pblack":"whitep"}>
            I am very passionate about programming and website designing. My curiosity about the working of websites and applications has made me choose this field of profession. My goal is to add value to a team or a firm that i am a part off. 
            </p>
            <div className='mt-2'> <button className='hire'><a style={{color:"white",textDecoration:"none"}} href='https://www.linkedin.com/in/vishnu-rajan-58a10627b/

' target='_blank'>My work</a></button> <button className={dark?"cvblack cv":"cv"}><a style={{textDecoration:"none"}} href='https://azure-marylee-56.tiiny.site/' target='_blank'>Download CV</a></button></div>


        </div>
    </div>

      {/* Second */}

      <div>

        <div id='service' className={dark?"service serviceblack":"service"}>
            <h1 ><span className='hr'>|</span>Services</h1>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" className='ser container mt-5'>
            <div className='cardd'>
                <div className='icon'>
                    <i class="fas fa-laptop-code"></i>

                </div>
                <h2>Web Design</h2>
                <p>A web designer creates the layout and design of a website. In simple terms, a website designer makes a site look good</p>
                

            </div>

            <div className='cardd'>
                <div className='icon'>
                    <i class="fas fa-layer-group"></i>

                </div>
                <h2>Web Developement</h2>
                <p>A web designer creates the layout and design of a website. In simple terms, a website designer makes a site look good</p>
                

            </div>

            <div className='cardd'>
                <div className='icon'>
                    <i class="fas fa-pencil-ruler"></i>

                </div>
                <h2>Static Website</h2>
                <p>A web designer creates the layout and design of a website. In simple terms, a website designer makes a site look good</p>
                

            </div>

            
        </div>

        <div data-aos="fade-right" data-aos-duration="1000" className='ser mt-5 mb-5 container'>
            <div className='cardd'>
                <div className='icon'>
                    <i class="fab fa-sketch"></i>

                </div>
                <h2>Dynamic Websites</h2>
                <p>A web designer creates the layout and design of a website. In simple terms, a website designer makes a site look good</p>
                

            </div>

            <div className='cardd'>
                <div className='icon'>
                    <i class="fas fa-palette"></i>

                </div>
                <h2>Single page Applications</h2>
                <p>A web designer creates the layout and design of a website. In simple terms, a website designer makes a site look good</p>
                

            </div>

            <div className='cardd'>
                <div className='icon'>
                    <i class="fas fa-bullhorn"></i>

                </div>
                <h2>Responsive Designs</h2>
                <p>A web designer creates the layout and design of a website. In simple terms, a website designer makes a site look good</p>
                

            </div>

            
        </div>
    </div>
      {/* Resume */}

      <div>
       
       <div className='container education'>
           <div >
           <h1 className={dark?"res resblack":"res"}> <span className='hr'>|</span>Education</h1>       
                    <div className='ed'>
                   <h5>2020 - 2023</h5>
                   <h2>Bachelor in Computer Application</h2>
                   <h4>Kannur Univercity</h4>

               </div>
           </div>

           <div >
           <h1 className={dark?"res resblack":"res"}> <span className='hr'>|</span>Internship</h1>       
                    <div className='ed'>
                   <h5>2023-Present</h5>
                   <h2>MEA(R)N Stack Developement</h2>
                   <h4>Luminar Tecnolab</h4>

               </div>
           </div>

       </div>

   </div>
      {/* Skills */}

<div id='skills' className={dark?"skill container skillblack":"skill container"}>

        <h1 className='text-center'> <span className='hr'>|</span>Skills</h1>
<div className={dark?"bor borblack":"bor"}>
            <div className='skilll'>
    <div data-aos="fade-down-right" data-aos-duration="500" className='skillholder'>
        
                    <img src="https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png" alt="" />
                    <h5 className='text-center'>HTML</h5>
                    
    </div>
               <div data-aos="fade-down-right" data-aos-duration="500" className='skillholder' > <img id='cs' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png?20210705212817" alt="" />
               <h5 className='text-center'>CSS3</h5></div>
    <div data-aos="fade-down-right" data-aos-duration="500" className='skillholder'>
        
                    <img id='js' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" />
                    <h5 className='text-center'>Javascript</h5>
    </div>
    <div data-aos="fade-down-right" data-aos-duration="500" className='skillholder'>
        
                    <img id='re' src="https://cdn.icon-icons.com/icons2/3660/PNG/512/programming_tecnology_react_logo_native_icon_228491.png" alt="" />
                    <h5 className='text-center'>React</h5>
    </div>
    <div data-aos="fade-down-right" data-aos-duration="500" className='skillholder'>
        
                    <img src="https://files.raycast.com/sjxs3pxsc6k63ju0fzv8l3cu4v90" alt="" />
                    <h5 className='text-center'>Tailwind</h5>
                    
    </div>
    
            </div>
    
            <div className='skilll'>
    <div data-aos="fade-down-right" data-aos-duration="500" className='skillholder'>
        
                    <img id='js' src="https://static-00.iconduck.com/assets.00/mongodb-icon-1024x1024-jyklwn1x.png" alt="" />
                    <h5 className='text-center'>Mongo DB</h5>
                    
    </div>
               <div data-aos="fade-down-right" data-aos-duration="500" className='skillholder' > <img id='cs' src="https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png" alt="" />
               <h5 className='text-center'>Postman</h5></div>
    <div data-aos="fade-down-right" data-aos-duration="500" className='skillholder'>
        
                    <img id='js' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" alt="" />
                    <h5 className='text-center'>Angular</h5>
    </div>
    <div data-aos="fade-down-right" data-aos-duration="500" className='skillholder'>
        
                    <img id='re' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" alt="" />
                    <h5 className='text-center'>Node Js</h5>
    </div>
    <div data-aos="fade-down-right" data-aos-duration="500" className='skillholder'>
        
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="" />
                    <h5 className='text-center'>Express Js</h5>
                    
    </div>
    
            </div>
    
            <div className='skilll'>
    <div data-aos="fade-down-right" data-aos-duration="500" className='skillholder'>
        
                    <img id='js' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" alt="" />
                    <h5 className='text-center'>Bootstrap</h5>
                    
    </div>
               <div data-aos="fade-down-right" data-aos-duration="500" className='skillholder' > <img id='cs' src="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png" alt="" />
               <h5 className='text-center'>Material UI</h5></div>
    <div data-aos="fade-down-right" data-aos-duration="500" className='skillholder'>
        
                    <img id='js' src="https://justinmahar.gallerycdn.vsassets.io/extensions/justinmahar/react-bootstrap-snippets/2.0.18/1672248570584/Microsoft.VisualStudio.Services.Icons.Default" alt="" />
                    <p  className='text-center fs-5'>React <br /> Bootstrap</p>
    </div>
    <div data-aos="fade-down-right" data-aos-duration="500" className='skillholder'>
        
                    <img id='re' src="https://cdn.dribbble.com/users/8063/screenshots/873671/github_icon_vector_shape.png" alt="" />
                    <h5 className='text-center'>Github</h5>
    </div>
    <div data-aos="fade-down-right" data-aos-duration="500" className='skillholder'>
        
                    <img id='js' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/1024px-JSON_vector_logo.svg.png" alt="" />
                    <h5 className='text-center'>Json</h5>
                    
    </div>
    
            </div>
</div>
        
    </div>


      {/* Works */}

  <div id='projects'  className={dark?"work workblack":"work"}>

        <h1 className='text-center mt-5 pt-5'> <span className='hr'>|</span>Works</h1>
        <div className='wor container mt-5 pt-5 mb-5 pb-5'>
            <div className='wr me-2'>
                <img src={firstimage} alt="" />
                <div className='wrh'>
                    <a target='blank' href="https://memory-game-vishnu.netlify.app/"> <h3>Live Demo</h3></a>
                    <a target='blank' href="https://github.com/vishnurajan123/Memorygame.git"><h3>Github</h3></a>
                </div>
            </div>

            <div className='wr me-2'>
                <img src={hotstar} alt="" />
                <div className='wrh'>
                    <a target='blank' href="https://hotstar-clone-react-vishnu.netlify.app/"> <h3>Live Demo</h3></a>
                    <a target='blank' href="https://github.com/vishnurajan123/hotstar-clone.git"><h3>Github</h3></a>
                </div>
            </div>

            <div className='wr me-2'>
                <img src={budget} alt="" />
                <div className='wrh'>
                    <a target='blank' href="https://budget-assist.netlify.app/"> <h3>Live Demo</h3></a>
                    <a target='blank' href="https://github.com/vishnurajan123/budget-assist.git"><h3>Github</h3></a>
                </div>
            </div>

            
        </div>

        <div className='wor container mt-5 mb-5 pb-5 '>
            <div className='wr me-2'>
                <img src={interst} alt="" />
                <div className='wrh'>
                    <a target='blank' href="https://incredible-trifle-75c4d8.netlify.app/"> <h3>Live Demo</h3></a>
                    <a target='blank' href="https://github.com/vishnurajan123/interest-app.git"><h3>Github</h3></a>
                </div>
            </div>

            <div className='wr me-2'>
                <img src={netflix} alt="" />
                <div className='wrh'>
                    <a target='blank' href="https://netflix-landing-page1.netlify.app/"> <h3>Live Demo</h3></a>
                    <a target='blank' href="https://github.com/vishnurajan123/netflix-clone.git"><h3>Github</h3></a>
                </div>
            </div>

            <div className='wr me-2'>
                <img src={weather} alt="" />
                <div className='wrh'>
                    <a target='blank' href="https://weatherapp-updated.netlify.app/"> <h3>Live Demo</h3></a>
                    <a target='blank' href="https://github.com/vishnurajan123/weatherapp.git"><h3>Github</h3></a>
                </div>
            </div>

            
        </div>


    </div>


      {/* Cont */}
      <div id='contact' className='cont d-flex justify-content-center align-items-center'>
                <div className={dark?"conta contablack":"conta"}>
                <h1 className={dark?"text-center conttblack":"text-center contt"}> <span className='hr'>|</span>Contact</h1>

                    <div className='eycon'>
                        <a href="mailto: vishnurajan135531@gmail.com"><i data-aos="fade-up" data-aos-duration="700" class="fa-solid fa-envelope"></i></a>
                        <a href="https://www.linkedin.com/in/vishnu-rajan-58a10627b/" target='_blank'><i data-aos="fade-up" data-aos-duration="1000" class="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/vishnurajan123" target='_blank'><i data-aos="fade-up" data-aos-duration="1300" class="fa-brands fa-github"></i></a>
                        <a href="https://www.instagram.com/vi.sh.nu__/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target='_blank'><i data-aos="fade-up" data-aos-duration="1600" class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>

    </div>
      {/* footer */}
      <div> 
        <div className='foot'>
           
                
               <p>&copy; 2023 VISHNU All rights reserved</p>
           

        </div>
    </div>
    </div>
  );
}

export default App;
