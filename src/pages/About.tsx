import React from "react"


import Bio from "../components/bio"
import NavBar from '../components/Navbar'
import me from "../images/me.jpeg";

import { Image } from "react-bootstrap";
const style = require('./About.module.css');


interface Props {
data: any
}


const About = () => {
    
    return (
        <div className={style.AboutPage} >
            <NavBar />
            <div className={style.page}>

                <div className={style.LeftBar}>
                    <img
                        src={me}
                        width="200px"
                        alt="logo"
                    />
                </div>
                
                <div className={style.RightBar}>
                    <h4><strong>Irfan Ahmed</strong></h4>
                    <h6>Saudi Arab - Pakistan</h6>
                    <hr />
                    {/* <h6><strong>My Coding Journey</strong></h6>

                    <p>I started my coding journey almost 6 month before with sir Zia bootCamp 2020, all thanx to sir Zia and other respected teachers for their precious time and guideline.
                    </p> */}
<p>I am a professional Front-End web developer, providing Web App and web development services. <br/>
I always try to write simple and clean code, so code can be understood by the client or other developers. <br/> Your sanctification is my top priority,</p>
                    <h6><strong>My Skills are : </strong></h6>

                    <a style={{color: "blue"}}>  <strong> Jamstack </strong> , <strong> HTML / CSS </strong>  ,  <strong> Javascript / TypeScript </strong>,  <strong> ReactJS / GatsbyJS </strong>,  <strong> Jamstack </strong>,  <strong> Netlify Build / Deployment </strong>,  <strong> FaunaDB Database </strong>,   <strong> REST API </strong>,  <strong> GraphQL API with Apollo Client 3  </strong>,  <strong> Material UI </strong>,  <strong> AntD Design </strong>,  <strong> BootStrap </strong>,  <strong> Redux ToolKit </strong>,  <strong> WEB Animation </strong>,  <strong> Formik / Yup </strong>, 
                    </a>

                    <br/>
                    <br/>
                    <h6>whatsup : 00966569429782</h6><br/>
                    <a href="https://github.com/Irfanahmedkhan">My GitHUB Link : https://github.com/Irfanahmedkhan </a>

                 
                </div>
            </div>

        </div>
    )
}

export default About
