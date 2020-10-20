import React from "react"
import "./globalstyles.css"
import "./about.css"
import avatar from "../images/avatar.jpg"

import { Link } from "gatsby"
import Head from "../components/head"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

  const AboutPage = function() {
    return (
     
      <div className="container">
        <Head title="About"/>
      <div className="sidebar">
     
      <img className="avatar" src={avatar}/>
        <div className="about">
          <p className="title">Anna Cunnane</p>
          <p>Hi! I'm Anna &#128075; I work in publishing and this is my tech blog &#128105;&#8205;&#128187;</p>
          
        </div>

 
  <ul>
  <li><Link to="/">Blog</Link></li>
   <li className="active"><Link to="/about">About Me</Link></li>
  </ul>

  <a href="https://twitter.com/MollyBloom1989" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="icons" icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com/in/annacunnane/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="icons" icon={faLinkedin}  />
        </a>
        <a href="https://github.com/Moggach" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="icons" icon={faGithub}  />
        </a>
        <div className="copyright">@ All Rights Reserved</div>
        </div>
       <div className="about-text">
         <h2>Hello and thank you for visiting my blog</h2>
         <p>I work in book publishing in London and I specialise in metadata  &#x1f4da; </p>
         <code>Metadata: Simply put, your book metadata is any data that describes your book—including title, subtitle, price, publication date, ISBN, and any other relevant information that readers use to find your book. 
         Readers depend on good metadata to find their next read. <br></br> ~ IngramSpark</code>
         
       
         <p>I'm teaching myself front end web development. Right now I'm digging into React but I've also been learning HMTL5, CSS3, Saas and Tailwind.</p>
      <p>I was awarded a London Book Fair Trailblazer Award in 2018 for my work in raising the profile of metadata across the industry &#x1F3C6;</p>
      <p>I am a member of BookMachine Team Unplugged where I help to shout about their amazing events series.</p>
      <p>I enjoy using tech to solve publishing problems. This blog is all about tech topics from a publishing perspective.</p>
     
         <div>
         Want to get in touch? Email me <a href="mailto:acunnane13@gmail.com"><span>&#x1f4e7;</span></a>
         <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
  <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
  <div className="field half first">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" />
  </div>
  <div className="field half">
    <label htmlFor="email">Email</label>
    <input type="text" name="email" id="email" />
  </div>
  <div className="field">
    <label htmlFor="message">Message</label>
    <textarea name="message" id="message" rows="6" />
  </div>
  <ul className="actions">
    <li>
      <input type="submit" value="Send Message" className="special" />
    </li>
    <li>
      <input type="reset" value="Clear" />
    </li>
  </ul>
</form>
        </div>
        
        </div>
        </div>
    );
        }

export default AboutPage
