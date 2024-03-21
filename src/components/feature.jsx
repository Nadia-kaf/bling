import fpic from "../assets/multistone-removebg-preview (1).png";
import spic from "../assets/newa-removebg-preview.png";
import item2 from "../assets/item2-removebg-preview.png";
import frpic from "../assets/earring-removebg-preview.png";

export default function  Feature(){
    return(
        <section>
            <div class="text-center p-10">
          <h1 className="font-bold text-4xl mb-4">FEATURED PRODUCTS </h1>
           <h1 className="text-3xl">Tailwind CSS</h1>
        </div>


        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
           <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src={fpic} alt="earring" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$599</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">799</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">   
                        </svg></div>
                </div>
            </div>
           </div>
           <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src={spic} alt="earring" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$599</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">799</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">   
                        </svg></div>
                </div>
            </div>
           </div>
           <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src={item2} alt="earring" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$599</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">799</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">   
                        </svg></div>
                </div>
            </div>
           </div>
           <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src={frpic} alt="earring" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$599</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">799</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">   
                        </svg></div>
                </div>
            </div>
           </div>
        </div>
        </section>
        
    
        
    
       
    );
}