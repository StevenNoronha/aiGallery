import React from 'react'

function Hero() {
  return (
    <div className='hero'>                              {/* Main hero section */}
      <div className='hero-text'>
        <div className='fade-in-container'>                           {/* Text section of hero section  */}
          <h1>
        Aesthetic Alchemy
          </h1>
        </div>
        <hr/>
        <p>Welcome to Aesthetic Alchemy Gallery – Where Art Meets Algorithms!
          <br />
          <br />
      Immerse yourself in a visual journey like no other at Aesthetic Alchemy Gallery, your premier destination for AI-powered image exploration. Our cutting-edge platform utilizes state-of-the-art algorithms to generate mesmerizing and unique images that push the boundaries of creativity.</p>

    <div className='spacing'></div>                               {/* Input tag to recieve user prompts for image generation */}
      <div className='container'>
        <input type='text' placeholder='Enter the prompt here to generate image'></input>
        <button className="button-64" ><span class="text">Generate!</span></button>                   {/* Submission button */}
      </div>
      </div>
    </div>
  )
}

export default Hero