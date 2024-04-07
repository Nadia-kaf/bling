import React from 'react';

const Menu = () => {
  return <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
    <a
      href="/"
      className="block md:inline-block px-3 py-2   hover:underline text-slate-100	"
    >
      Home
    </a>
    <a
      href="/features"
      className="block md:inline-block px-3 py-2  focus:outline-none hover:underline "
    >
      Features
    </a>
    <a
      href="#"
      className="block md:inline-block px-3 py-2 focus:outline-none  hover:underline"
    >
      Products
    </a>
    <a
      href="#"
      className="block md:inline-block px-3 py-2 focus:outline-none  hover:underline"
    >
      Add Cart
    </a>
    <a
      href="#"
      className="block md:inline-block px-3 py-2  focus:outline-none  hover:underline"
    >
      Contact
    </a>
  </div>
}

export default Menu;