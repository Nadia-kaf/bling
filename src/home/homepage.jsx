import Footer from "../components/footer";
import Header from "../components/navbar";
import Banner from "../components/banner";
import {
  faTruck,
  faRotateLeft,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sectionPic from "../assets/Screenshot2.png";
import Feature from "../components/feature";
import Blogs from "../components/blogs.jsx";
import Insta from "../components/insta.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Feature/>
      <Blogs/>
      <Insta/>
      <section className="grid grid-cols-2 grid-rows-1 gap-0 mt-5">
        <div className="bg-amber-800 pt-20">
        <h4>Looking for the Latest</h4>
                <h3>Trending Collections</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt quisquam possimus modi voluptatum hic nobis, earum fugit nihil? Sapiente exercitationem in odit velit necessitatibus! Omnis quam est tempore voluptatum.</p>

                <button className=" border boder-solid mt-10">SHOP NOW</button>

        </div>
        <div>
          <img src={sectionPic} alt="A model with earing " />
        </div>
        <br />
      </section>
      <div className="grid grid-cols-3 grid-rows-1 gap-11 mt-10 mb-10">
        <div className="ml-10">
          <FontAwesomeIcon icon={faTruck} size="2xl" />
          <h3>EXPRESS DELIVERY</h3>
          <p>Worldwide free delivery</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faRotateLeft} size="2xl" />
          <h3>FREE RETURNS</h3>
          <p>30 days free return</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCreditCard} size="2xl" />
          <h3>CASHLESS PAYMENT</h3>
          <p>Safe and secure online payment</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
