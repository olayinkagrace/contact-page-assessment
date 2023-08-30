import "./App.css";
import Footer from "./components/Footer";
import logo from "../src/assets/logo.png";

import Navbar from "./components/Navbar";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import Form from "./components/Form";

function App() {
  return (
    <main>
      <Navbar />
      <section className="contact">
        <div className="top">
          <div className="topTwo">
            <img src={logo} />
            <p>
              RARE EAT FRESH represents a range of unique ingredients and the
              vibrancy of different Cultures, every product in the Rare Eat
              range has a story inspired by different Cultures
            </p>
            <p>020 7205 4031</p>
            <p>020 7205 4031</p>
            <FaFacebook className="iconTwo" />
            <FaInstagram className="iconTwo" />
            <FaTwitter className="iconTwo" />
            <FaLinkedin className="iconTwo" />
          </div>
          <div className="topOne">
            <h3 className="pp">Get in touch</h3>
            <p className="pp">
              Your Questions and Feedback Matter to Us - Reach Out, Let's
              Connect, and Explore Together to Ensure Your Rare Eat Fresh
              Experience Is Exceptional and Delightful.
            </p>
            <Form />
          </div>
        </div>
        <div className="main">
          <h3>Join Our Newsletter: Stay Connected, Savor Exclusives!</h3>
          <p>
            Subscribe to our newsletter and be a part of the vibrant Rare Eat
            Fresh community. Stay connected with the latest updates, exclusive
            offers, and exciting promotions on rare West African food
            ingredients.
          </p>
          <div className="bottom">
            <input type="email" placeholder="Email Address" />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;
