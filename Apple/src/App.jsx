import './App.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import { useState,useRef } from 'react';
import { FaPause,FaPlay } from "react-icons/fa6";
function App() {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); 

  // Ensure you have GSAP and ScrollTrigger plugin loaded
gsap.registerPlugin(ScrollTrigger);

useGSAP(()=>{
  gsap.to(".video-wrapper", {
    scale: 0.75, // Scale down to 95%
    borderRadius: "30px",
    duration: 10, 
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".video-wrapper", // Watch the video wrapper for scrolling
      start: "50% center", // Start the animation when the video wrapper is at the center of the viewport
      end: "+=400 center", // End the animation 400px below the center 
      scrub: 0.5, // Sync the animation with scroll
    },
  });
},[])



const togglePlayPause = () => {
  if (videoRef.current) {
    if (isPlaying) {
      videoRef.current.pause(); // Pause the video
    } else {
      videoRef.current.play(); // Play the video
    }
    setIsPlaying(!isPlaying); // Update the state
  }
}

  
  return (
    <div>
    <div className='video-wrapper' id='video-wrapper'>
      <video ref={videoRef} src="/xlarge.mp4" autoPlay loop muted></video>
      <button onClick={togglePlayPause} className="custom-btn" > {isPlaying ? <FaPause /> : <FaPlay />}</button>
    </div>
    <section className='random-section'>
      <h2>random section</h2>
    </section>
    </div>
  )
}

export default App
