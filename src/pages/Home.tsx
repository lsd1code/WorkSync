import { Link } from "react-router-dom"
import illustration from '../assets/hero-illustraion.svg'


const Home = () => {
  return (
    <section className="grid xl:grid-cols-2 gap-16 items-center text-[#383545] h-[80dvh] px-6 md:px-[5em]">
      <div>
        <h1 className="text-[#36175e] dark:text-[#613dc1] font-bold text-4xl mb-4">
          Work Sync
        </h1>
        
        <p className="text-[1rem] dark:text-white font-light md:text-[1.1rem] mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus delectus quam quidem voluptatibus ullam placeat ducimus alias, nostrum minima ut, numquam quas similique fugit dolorem itaque, cupiditate cum error laboriosam?
        </p>
        
        <Link to='login' className="bg-[#36175e] transition-all duration-300 ease-in-out hover:opacity-75 dark:bg-[#613dc1] text-white dark:text-gray-300 rounded shadow px-7 py-3">
            Get Started
        </Link>
      </div>

      <div className="hidden xl:block">
        <img src={illustration} alt="" className="w-[80%] object-cover" />
      </div>
    </section>
  )
}

export default Home