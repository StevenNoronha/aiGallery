import React from 'react'

function Footer() {
  return (
    <div className='footer container3'>                       {/* Footer section component  */}
        Made with ❤️ by Steven
        <div className='container footlogos'>                         {/*  Logos that redirect */}
            <a href="https://github.com/StevenNoronha"> <div className='logos' style={{backgroundImage: "url(https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png)"}}></div> </a>                  {/* Github link */}
            <a href="https://www.linkedin.com/in/steven-noronha-406577213/"> <div className='logos' style={{backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png"}}></div> </a>                   {/* LinkedIn link */}
            <a href="mailto:stevennoronha9@gmail.com"> <div className='logos' style={{backgroundImage: "url(https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png)", backgroundPosition: "center"}}></div> </a>             {/*  Gmail link */}
        </div>
    </div>
  )
}

export default Footer