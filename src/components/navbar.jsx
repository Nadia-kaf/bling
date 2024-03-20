import React from "react";


export default function Header(){
    return(
        <nav className="bg-black relative flex items-center h-20">
            
            <input  className="relative  border border-solid  border-secondary-500 bg-transparent transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none "type="text" placeholder="Search" />
            <div>
                
            </div>
        <div className="flex justify-end  ">
            <ul className=" list-style-none ms-auto flex flex-colgap-30 flex  pt-4 ps-0 ml-72">
                <li className=" text-white ">Home</li>
                <li className="text-white ">New Trends</li>
                <li className="text-white ">Collections</li>
                <li className="text-white ">Shop</li>
                <li className="text-white">Pages</li>
            </ul>
        </div>
        </nav>
    );
    }