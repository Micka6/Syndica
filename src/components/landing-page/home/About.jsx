import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import showcase from '../../../assets/res/Homepage/hero-background.png'
import '../../../css/landing-page/home/about.css' 
import '../../../css/landing-page/home/features.css' 

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useEffect(() => {
        gsap.to(".features-card", {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".features-title"
            }
        });
    }, []);
    
    
return (
    <div className="about-system-container">
        <div className="features-container" id="features" >
            <h2 className="features-title">Features</h2>
            <div className="features-card-container">
                <div className="features-card">
                    <div className="card-icon">
                        <svg fill="#ffab2e" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g> <path d="M90,42H83.3936A35.9331,35.9331,0,0,0,54,12.6064V6A6,6,0,0,0,42,6v6.6064A35.9331,35.9331,0,0,0,12.6064,42H6A6,6,0,0,0,6,54h6.6064A35.9331,35.9331,0,0,0,42,83.3936V90a6,6,0,0,0,12,0V83.3936A35.9331,35.9331,0,0,0,83.3936,54H90a6,6,0,0,0,0-12ZM48,72A24,24,0,1,1,72,48,24.0238,24.0238,0,0,1,48,72Z"></path> <path d="M48,36A12,12,0,1,0,60,48,12.0157,12.0157,0,0,0,48,36Z"></path> </g> </g></svg>
                    </div>
                    <h2>Online Tracking</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio, illo quia a commodi perspiciatis itaque earum rerum praesentium cum ipsa</p>
                </div>
                <div className="features-card">
                    <div className="card-icon">
                        <svg fill="#0d3255" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18,1H6A3,3,0,0,0,3,4V22a1,1,0,0,0,1.707.707L6.845,20.57l1.323,1.984A1,1,0,0,0,8.9,23a.986.986,0,0,0,.806-.288L12,20.414l2.293,2.293a1,1,0,0,0,1.539-.153l1.323-1.984,2.138,2.137A1,1,0,0,0,21,22V4A3,3,0,0,0,18,1Zm1,18.586-1.293-1.293a.984.984,0,0,0-.806-.288,1,1,0,0,0-.733.44L14.845,20.43l-2.138-2.137a1,1,0,0,0-1.414,0L9.155,20.43,7.832,18.445a1,1,0,0,0-1.539-.152L5,19.586V4A1,1,0,0,1,6,3H18a1,1,0,0,1,1,1ZM13,11a1,1,0,0,1-1,1H8a1,1,0,0,1,0-2h4A1,1,0,0,1,13,11Zm0,4a1,1,0,0,1-1,1H8a1,1,0,0,1,0-2h4A1,1,0,0,1,13,15Zm4-4a1,1,0,0,1-1,1H15a1,1,0,0,1,0-2h1A1,1,0,0,1,17,11Zm0,4a1,1,0,0,1-1,1H15a1,1,0,0,1,0-2h1A1,1,0,0,1,17,15Zm0-9a1,1,0,0,1-1,1H8A1,1,0,0,1,8,5h8A1,1,0,0,1,17,6Z"></path></g></svg>                    
                    </div>
                    <h2>DV Maker</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio, illo quia a commodi perspiciatis itaque earum rerum praesentium cum ipsa</p>
                </div>
                <div className="features-card">
                    <div className="card-icon">
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#f4f4f4" fillRule="evenodd" d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"></path> </g></svg>
                    </div>
                    <h2>Requirement Validation</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio, illo quia a commodi perspiciatis itaque earum rerum praesentium cum ipsa</p>
                </div>
            </div>
        </div>
        <div className="about-wrapper">
            <div className="about-system about-system-left">
                <h2>About the System</h2>
                <h1>Track your Document <br/> Safely & Quickly</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequatur illum iure sapiente, culpa sunt nesciunt nobis, necessitatibus placeat veniam nam quasi voluptas ratione fugit consectetur eos tempora? Ipsam, alias.</p>
                <a className="button-hover" href="pages/about/about.html">LEARN MORE</a>
            </div>
            <div className="about-system about-system-right">
                <img src={showcase} alt="test"/>
            </div>
        </div>
    </div>
  )
}

export default About