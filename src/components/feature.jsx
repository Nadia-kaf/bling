import fpic from "../assets/multistone-removebg-preview (1).png";
import spic from "../assets/newa-removebg-preview.png";
import item2 from "../assets/item2.png";
import earring from "../assets/earring1.png"

export default function  Feature(){
    return(
        <section>
            <div class="text-center mt-5 ">
          <h1 className="font-bold text-4xl mb-4">FEATURED PRODUCTS </h1>
           <h1 className="text-3xl">Collections</h1>
        </div>


        <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-4 lg:flex space-x-2 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
           <div className="w-48 h-64  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src={fpic} alt="earring" className="h-40 w-48 object-cover rounded-t-xl" />
            <div className="px-4  w-48">
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
           <div className="w-48 h-64 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src={spic} alt="earring" className="h-40 w-40 object-cover rounded-t-xl" />
            <div className="px-4  w-48">
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
           <div className="w-48 h-64 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src={item2} alt="earring" className="h-40 w-44 object-cover rounded-t-xl" />
            <div className="px-4 w-48">
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
           <div className="w-48 h-64 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
            <img src={earring} alt="earring" className="h-40 w-44 object-cover rounded-t-xl" />
            <div className="px-4  w-48">
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