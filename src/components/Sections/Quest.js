import React from "react";
import "./style.css"
export default function Quest() {
  return (
    <div>
      <div class="content">
        <div class="welcomeText">
          <div class="welcome">
            <h1 class="greet">WELCOME</h1>
          </div>
          <div class="subText">
            <div class="subTexts">
              <p class="subscribe">Subscribe to our newsletter</p>
              <p class="soon">We are launching soon</p>
            </div>
          </div>
        </div>

        <div class="form">
          <form action="" class="sub">
            <input class="email" type="email" />
            <button class="button" value="Send">
              Subscribe
            </button>
          </form>
        </div>

        <div class="social">
          <div class="follow">
            <p class="followUs">Or follow us</p>
          </div>
          <div class="socialIcons">
            <div class="socialIcon facebook brandico-facebook-rect" />
            <div class="socialIcon  twitter brandico-twitter-bird" />
            <div class="socialIcon  github brandico-github" />
          </div>
        </div>
      </div>
    </div>
  );
}
