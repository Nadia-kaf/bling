import { Carousel, Typography, Button } from "@material-tailwind/react";
import bone from "../assets/b22.png"
import banner2 from "../assets/b2.png";
import banner3 from "../assets/b3.png";
 
export default function Banner() {
  return (
    <Carousel className="">
      <div className="relative h-screen w-full">
        <img
          src={bone}
          alt="lady with jewelleries"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center">
          <div className="w-3/4 flex justify-end items-center ml-80 mt-52 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className=" text-3xl md:text-4xl lg:text-5xl"
            >
              <p className="text-orange-500 font-light  text-sm">JEWELLERY FOR THE FEMININE YOU</p>
            <p className="text-sm">Take a moment and cherish a grand collection</p><br />
            </Typography>
            </div>
             <br />
            <div className="w-3/4 flex justify-end items-center ml-64 mb-96 text-center md:w-2/4">
              <Button size="lg" variant="text" color="white" className="text-white bg-amber-800" >
              MAKE ORDER
              </Button>
            </div>
        
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={banner2}
          alt="emerald earring on emerald cloth"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center  bg-black/35">
          <div className="w-3/4 mt-44 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              <h4>FROM BLING</h4>
          <h3>Modern Collections</h3>
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white" variant="text">
              VIEW COLLECTIONS
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={banner3}
          alt="jewels with a solid dark background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/10">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              <h4>FROM BLING</h4>
          <h3>BRACELETS</h3>
            </Typography>
            
            <div className="flex gap-2">
              <Button size="lg" color="white" variant="text">
              VIEW COLLECTIONS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}