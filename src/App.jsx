import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './App.css'
import axios from 'axios';
function App() {
  const [count, setCount] = useState(0)
  const images = [
    "https://res.cloudinary.com/dmqffmafb/image/upload/v1720853736/aboutme-img/oq5v7tn836sjck0ao04v.png",
    "https://res.cloudinary.com/dmqffmafb/image/upload/v1720853753/aboutme-img/hlo1oemiarq5hdls0gck.png",
    "https://res.cloudinary.com/dmqffmafb/image/upload/v1720853743/aboutme-img/t6egeax1sk1utg361asl.png",
    "https://res.cloudinary.com/dmqffmafb/image/upload/v1720853742/aboutme-img/ctiyxoev0qsxihpwndrl.png",
    "https://res.cloudinary.com/dmqffmafb/image/upload/v1720867881/aboutme-img/ltrhwpwwsrzs7tcpjept.png",
  ];
  const buttonStyle = {
    width: "30px",
    backgroundColor:"white",
    border: '0px',
  };
  const [results, setResults] = useState([]);

  const properties = {
      prevArrow: <button style={{ ...buttonStyle }}>◀</button>,
      nextArrow: <button style={{ ...buttonStyle }}>▶</button>
  }

  async function exists(url){
    let status;
    await axios.get(url)
    .then((result)=>{
      status=result.status 
    })
    .catch((err)=>{
      status=err.response.status
    })
    if(status!=200){
      status=false;
    }
    else{
      status=true;
    }
    return status
  }
  useEffect(()=>{
    let tempResults
    async function checkImages(){
      await Promise.all(images.map(async (image)=>exists(image)))
      .then((result)=>{setResults(result)});
    }
    checkImages();
  },[])
  useEffect(()=>{console.log(results)},[results])
  return (
    <div className='mainContainer'>
      <div className="headerContainer">
        <header className='headnav'>
          <h2 className='nameFont'>Jedidiah Francisco</h2>
          <div className="links">
            <a href="#home" className='headerLinks nameFont'>Home</a>
            <a href="#skills"className='headerLinks nameFont'>Skills</a>
            <a href="#projects"className='headerLinks nameFont'>Projects</a>
            <a href="#contact"className='headerLinks nameFont'>Contact Me</a>
          </div>
        </header>
      </div>
      <div id="home" className="ImageandIntro">
        <div className="introduction">
          <h1 className='nameFont homeName'>Jedidiah Francisco</h1>
          <p className='introText homeText'> is a multilingual developer specialized in communication and collaboration. He makes use of his project coordination experience to deliver a user-centric product on time, all the time</p>
        </div>
        <img src='https://res.cloudinary.com/dmqffmafb/image/upload/v1720843811/aboutme-img/ggbtkaamvignfuojbzup.jpg' className='selfImage'/>
      </div>
      <div id="skills" className="skillList">
        <h1 className='nameFont'>Skills</h1>
        <div className="skillImgs">
          <div className="mern">
            <img src='https://res.cloudinary.com/dmqffmafb/image/upload/v1720873990/aboutme-img/zwgtzbqsmw02aalngsmu.png' className='SkillImgLong' alt='MERN(MongoDB, Express.js, ReactJS, NodeJS) Stack Icons'/>
            <h2 className='nameFont lowerColumn'> MERN Stack </h2>
            <p className="introText">MongoDB, Express.js, ReactJS, NodeJS development</p>
          </div>
          <div className="otherSkills">
            <div className="cSharp subSkill">
              <img src='https://res.cloudinary.com/dmqffmafb/image/upload/v1720853739/aboutme-img/caqtk0gzfwjedn3o4eek.png' className='SkillImgSingle'alt='C# Icon'/>
              <h2 className='nameFont'> C# Development </h2>
              <p className="introText">Development of applications in C#</p>
            </div>
            <div className="rainmeter subSkill">
              <img src='https://res.cloudinary.com/dmqffmafb/image/upload/v1720859549/aboutme-img/hezlcncieol6rhzpveao.png' className='SkillImgSingle' alt='Rainmeter Icon'/>
              <h2 className='nameFont'> Rainmeter </h2>
              <p className="introText">Desktop customization widget pack development.</p>
            </div>
            <div className="photoshop subSkill">
              <img src='https://res.cloudinary.com/dmqffmafb/image/upload/v1720859550/aboutme-img/n104gkuhdwed5fqturln.png' className='SkillImgSingle' alt='Photoshop Icon'/>
              <h2 className='nameFont'> Photoshop </h2>
              <p className="introText">Making UI components, drawings, icons</p>
            </div>
          </div>
        </div>
      </div>
      <div className="projects">
        <h1 className='nameFont'>Projects</h1>
        <div id="projects" className="projectSlide">
            <Slide {...properties}>
                  <div className="each-slide-effect">
                      <div role="img" aria-label="TraderMingle screenshot" title="TraderMingle screenshot" style={{ 'backgroundImage': `url(${images[0]})` }} className='slideContents' onClick={(e)=>{if(e.target!==e.currentTarget){return}window.open('https://trader-mingle-832jgkguy-jedidiah-franciscos-projects.vercel.app/')}}>
                          {!results[0]&&
                            <img src={images[0]} className='SlideBG' alt="TraderMingle site screenshot"/>
                          }
                          <div className='slideFoot'>
                            <div className="footText">
                            <h2>TraderMingle! (<a href="https://github.com/JedF3/TraderMingle">Repo</a>)</h2>
                            <p>An application where you can post items you want to sell, and communicate with other sellers or buyers through chat!</p>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="each-slide-effect">
                      <div title="Mental Health Diary App screenshot" style={{ 'backgroundImage': `url(${images[1]})` }} className='slideContents' onClick={(e)=>{if(e.target!==e.currentTarget){return}window.open("https://diary-app-frontend-9ovbn7jno-jedidiah-franciscos-projects.vercel.app/")}}>
                          {!results[1]&&
                            <img src={images[1]} className='SlideBG' alt="Mental Health Diary App screenshot"/>
                          }
                         <div className='slideFoot'>
                            <div className="footText">
                            <h2>Mental Health Diary App(<a href="https://github.com/JedF3/diary-app-frontend">Repo</a>)</h2>
                            <p>An application to write diary entries, record your feelings and view how you felt when writing entries for a set period of time.</p>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="each-slide-effect">
                      <div title="Expense Tracker screenshot" style={{ 'backgroundImage': `url(${images[2]})` }} className='slideContents' onClick={(e)=>{if(e.target!==e.currentTarget){return}window.open("https://p3-react-9vg3vi2x0-jedidiah-franciscos-projects.vercel.app/")}}>
                          {!results[2]&&
                            <img src={images[2]} className='SlideBG' alt="Expense Tracker screenshot"/>
                          }
                         <div className='slideFoot'>
                            <div className="footText">
                            <h2>Expense Tracker(<a href="https://github.com/JedF3/p3-react-app">Repo</a>)</h2>
                            <p>An application you can use to keep track of your expenses. </p>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="each-slide-effect">
                      <div title="Simple Crypto News screenshot" style={{ 'backgroundImage': `url(${images[3]})` }} className='slideContents' onClick={(e)=>{if(e.target!==e.currentTarget){return}window.open("https://js-api-4u40u4m2a-jedidiah-franciscos-projects.vercel.app/")}}>
                          {!results[3]&&
                            <img src={images[3]} className='SlideBG' alt="Simple Crypto News screenshot"/>
                          }
                          <div className='slideFoot'>
                            <div className="footText">
                            <h2>Simple Crypto News(<a href="https://github.com/JedF3/js-api-app">Repo</a>)</h2>
                            <p>An application you can use to stay on top of crypto articles and view prices in real time</p>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="each-slide-effect">
                      <div title="Simple React App screenshot" style={{ 'backgroundImage': `url(${images[4]})` }} className='slideContents' onClick={(e)=>{if(e.target!==e.currentTarget){return}window.open("https://simple-react-form-chi.vercel.app/")}}>
                          {!results[4]&&
                            <img src={images[4]} className='SlideBG' alt="Simple React App screenshot"/>
                          }
                          <div className='slideFoot'>
                            <div className="footText">
                            <h2>A Simple React App(<a href="https://github.com/JedF3/simple-react-form">Repo</a>)</h2>
                            <p>It's a simple react form accepting input and producing an alert as output.</p>
                            </div>
                          </div>
                      </div>
                  </div>
          </Slide>
        </div>
      </div>
      <div  className="contactMe">
        <h2 className='nameFont'>Get in touch</h2>
        <div className="contactButtonDiv">
          <div className="contactButton" onClick={()=>{window.open("https://github.com/JedF3")}}>
            <img src='https://res.cloudinary.com/dmqffmafb/image/upload/v1720873985/aboutme-img/ff6sm1eovzdg0u424wng.png' className='circleIcons'/>
          </div>
          <div className="contactButton" onClick={()=>{window.open("mailto:jedidiahf740@gmail.com")}}>
            <img src='https://res.cloudinary.com/dmqffmafb/image/upload/v1720871778/aboutme-img/hvgopeihtm1zkdq1zm1w.png' className='circleIcons'/>
          </div>
          <div id="contact" className="contactButton" onClick={()=>{window.open("https://www.linkedin.com/in/jedidiah-francisco-6a9b05147/")}}>
            <img src='https://res.cloudinary.com/dmqffmafb/image/upload/v1720871837/aboutme-img/duqqu7k1finf9heyuiow.svg' className='circleIcons'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
