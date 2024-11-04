import React from "react";
import "./main.css";
import Header from "../pages/header";
import hero from "../asssets/Hero Image.png";
import image1 from "../asssets/image 1.png";
import image2 from "../asssets/image 2.png";

function main() {
  return (
    <div>
      <Header> </Header>
      <div>
        <div className="heroSection">
          <img src={hero} alt="hero" />
          <div className="frame497">
            <h1>
              We Crush Your Competitors, Goals And Sales Records - Without The
              B.S.
            </h1>
            <button>Get free Consultation</button>
          </div>
        </div>
        <div className="containerOne">
          <img src={image2} alt="image1" />
          <h3>Web & Mobile App Development</h3>
          <p>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <button>LEARN MORE</button>
        </div>
        <div className="containerTwo">
          <img src={image1} alt="image2" />
          <h2>Web & Mobile App Development</h2>
          <p>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <button>LEARN MORE</button>
        </div>
        <div className="containerFAQs">
          <h3>Frequently asked questions</h3>
        </div>

        <div className="containerFAQs-p1">
          <div className="faq1">
            <h4>
              Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
            </h4>
          </div>
          <div className="faq1-p">
            <p>
              Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit
              id ipsum.Elementum ultrices nulla faucibus odio est sed aliquam.
              Sapien massa morbi risus sagittis tortor integer.
            </p>
          </div>
          <h4>
            Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
          </h4>
          <h4>
            Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
          </h4>
        </div>
      </div>
    </div>
  );
}

export default main;
