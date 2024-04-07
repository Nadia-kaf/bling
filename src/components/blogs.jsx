import blogpic from "../assets/blogpic.png";
import blogimg1 from "../assets/blogimg1.png";
import blogimg2 from "../assets/blogimg2.png";
import blogimg3 from "../assets/blogimg3.png";
import blogimg4 from "../assets/blogimg4.png";

const posts = [
    {
        title: "A touch of Jewellry",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet ab animi libero, facere impedit deserunt quasi harum voluptatem iusto labore, quod expedita sapiente! Quos voluptas unde culpa nobis nemo!",
        img: blogimg1,
        date: "Jan 4 2022",
        href: ""
    },
    {
        title: "A touch of Jewellry",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet ab animi libero, facere impedit deserunt quasi harum voluptatem iusto labore, quod expedita sapiente! Quos voluptas unde culpa nobis nemo!",
        img: blogimg2,
        date: "Jan 4 2022",
        href: ""
    },
    {
        title: "A touch of Jewellry",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet ab animi libero, facere impedit deserunt quasi harum voluptatem iusto labore, quod expedita sapiente! Quos voluptas unde culpa nobis nemo!",
        img: blogimg3,
        date: "Jan 4 2022",
        href: ""
    },
    {
        title: "A touch of Jewellry",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet ab animi libero, facere impedit deserunt quasi harum voluptatem iusto labore, quod expedita sapiente! Quos voluptas unde culpa nobis nemo!",
        img: blogimg4,
        date: "Jan 4 2022",
        href: ""
    }
]

export default function Blogs(){
    return(
       <section>
         <div class="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">OUR BLOGS </h1>
         <h1 className="text-3xl">Read blogs and be on-trend</h1>
      </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-0">
            <div>
               <img src={blogpic} alt="model" className="h-full w-11/12"  />
            </div>

            <div>
            <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-2">
            {
                posts.map((items, key) => (
                    <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                        <a href={items.href}>
                            <img src={items.img} loading="lazy" alt={items.title} className="w-full rounded-lg" />
                            <div className="mt-3 space-y-2">
                                <span className="block text-indigo-600 text-sm">{items.date}</span>
                                <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                    {items.title}
                                </h3>
                                <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.desc}</p>
                            </div>
                        </a>
                    </li>
                ))
            }
        </ul>
            </div>
          </div>
       </section>
        
        

    )
}