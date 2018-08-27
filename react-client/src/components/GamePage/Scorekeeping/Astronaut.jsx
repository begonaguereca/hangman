import React from 'react';


const Astronaut = (props) => {
  return (
    <div class="container">
      <div class="astronaut">
        <div class="helmet">
          <div class="left-lug"></div>
          <div class="right-lug"></div>
          <div class="visor"></div>
        </div>
        <div class="neck"></div>
        <div class="body">
          <div class="left-arm">
            <div class="shadow"></div>
            <div class="hoop-1"></div>
            <div class="hoop-2"></div>
          </div>
          <div class="right-arm">
            <div class="shadow"></div>
            <div class="hoop-1"></div>
            <div class="hoop-2"></div>
          </div>
          <div class="chest-pack">
            <div class="dot1"></div>
            <div class="dot2"></div>
            <div class="dot3"></div>
            <div class="lower-console">
              <div class="box1"></div>
              <div class="box2"></div>
              <div class="box3"></div>
            </div>
          </div>
          <div class="belt">
            <div class="loop1"></div>
            <div class="loop2"></div>
            <div class="loop3"></div>
          </div>
        </div>

        <div class="backpack"></div>

        <div class="legs">
          <div class="thigh-gap"></div>
          <div class="left-knee"></div>
          <div class="right-knee"></div>
          <div class="left-foot"></div>
          <div class="right-foot"></div>
        </div>
      </div>

       <div class="planet1">
        <div class="dot1"></div>
        <div class="dot2"></div>
        <div class="dot3"></div>
      </div>

      <div class="planet2">
        <div class="dot1"></div>
        <div class="dot2"></div>
        <div class="dot3"></div>
        <div class="dot4"></div>
        <div class="dot5"></div>
      </div>

      <div class="star"></div>
    </div>
  )
}

export default Astronaut;
