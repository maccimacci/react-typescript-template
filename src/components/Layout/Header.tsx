import gsap from 'gsap';
import React, { useEffect } from 'react'
import Brand from './Brand';
import Menu from './Menu';

function Header() {

    function onClick() {

        console.log('click');
        if (tl.paused())
          tl.play()
        else
          tl.reversed() ? tl.play() : tl.reverse();
    }

    function menuclick() {

      // let tlclick = gsap.timeline({
      //   paused: true,
      //     defaults: {
      //       ease: "easy.out",
      //       duration: 0.3
      //     }
      //   })
      //   .to('.menu', { top:0, width:"100vw", duration:"0.7"})
      //   .to('.menu', { opacity: 0, duration:"1"}, 0.4)

      //   tlclick.play();
    }

    let tl: GSAPTimeline; // also compatible with TimelineLite/TimelineMax
    let tween: GSAPTween; // also compatible with TweenLite/TweenMax

    let tweenConfig: GSAPTweenVars = {
      x: (index: number) => index * 0.5
    };

    let tlConfig: GSAPTimelineVars = {
      paused: true
    };

    useEffect(() => {

      // console.log('efect')
      // tl = gsap.timeline({
      //     paused: true,
      //       defaults: {
      //         ease: "power4",
      //         duration: 0.7
      //       }
      //     })
      //     // .to(".menu", { top: 0, reversed : true }, 0.2)
      //     .from('.menu', {opacity:1})
      //     .to('.menu', { top:0, width:"30vw", duration:"0.7"})

      }, []);

    return (
        <header>

            <Brand />

            <Menu onclick={menuclick}></Menu>

            <nav>
                {/* <i className="fas fa-bars" onClick={onClick}></i> */}
                {/* <div className="user"><span><i className="fas fa-user"></i>El Tincho</span></div> */}
                <div id="hamburger" className="off" onClick={onClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>


        </header>
    )
}

export default Header