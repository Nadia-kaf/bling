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

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Feature/>
      <section className="grid grid-cols-2 grid-rows-1 gap-0">
        <div className="bg-amber-800">
        <h4>Looking for the Latest</h4>
                <h3>Trending Collections</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt quisquam possimus modi voluptatum hic nobis, earum fugit nihil? Sapiente exercitationem in odit velit necessitatibus! Omnis quam est tempore voluptatum.</p>

                <button className=" border boder-solid">SHOP NOW</button>

        </div>
        <div>
          <img src={sectionPic} alt="A model with earing " />
        </div>
      </section>
      <div className="grid grid-cols-3 grid-rows-1 gap-11 mt-2 mb-2">
        <div>
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
