import pic from "../assets/pic.png";
import pic1 from "../assets/pic1.png";
import pic5 from "../assets/pic5.png";



export default function Insta(){
    return(
        <section>

        <div class="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Instagram Feed </h1>
         <h1 className="text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
      </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-11">
            <img src={pic} alt="necklace" />
            <img src={pic1} alt="earing " />
            <img src={pic5} alt="anklet" />
        </div>
        <button className=" mt-10 mb-10 ml-96 text-center border border-black">FOLLOW US @INSTAGRAM</button>
    </section>
    )
}