import React from "react";


export default function Header(){
    return(
        <nav className="bg-amber-800 relative flex items-center h-20">
            
           
            <input  className="relative  border-0 border-b-2 border-dark bg-transparent transition duration-300 ease-in-out focus:border-primary focus:text-black focus:shadow-inset focus:outline-none motion-reduce:transition-none ml-4 "type="text" placeholder="Search" />
            <div>
              
            </div>
        <div className="  ml-72  ">
            <ul className=" list-style-none  flex items-end justify-end pt-3 ps-0 gap-10">
                <li className="">Home</li>
                <li className=" ">New Trends</li>
                <li className=" ">Collections</li>
                <li className="">Shop</li>
                <li className="">Pages</li>
            </ul>
        </div>
        </nav>
    );
    }