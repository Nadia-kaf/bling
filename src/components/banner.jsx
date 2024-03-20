import { Carousel, Typography, Button } from "@material-tailwind/react";
import bone from "../assets/bone.png"
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/bthree.png";
 
export default function Banner() {
  return (
    <Carousel className="rounded-xl ">
      <div className="relative h-full w-full">
        <img
          src={bone}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              <h3>JEWELLERY FOR THE FEMININE YOU</h3>
            <p>Take a moment and cherish a grand collection</p>
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white" variant="text">
              MAKE ORDER
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={banner2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
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
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
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