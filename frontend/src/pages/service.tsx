import { HandCoins, UserRoundSearch, Building2 , Birdhouse, BadgeEuro, CableCar} from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import banner1 from "../assets/banner1.png"

import { FaCaravan } from "react-icons/fa";
 import { FaTruckFront } from "react-icons/fa6";




const servces = [
  {
    title: "Qusanna fi Liqii",
    description: "Miseensi qusenna adda adda qusachuudhan Liqii kan liqeefatan ni ta’a. Miseensonni Waliin qusatanif waldichii qusanna feshii fi dirqama waraa gaheessotaaf dhalaa 7% kan kafaluu yoo tahu ijooleedhaf moo 10.5% kafalaa.",
    link: "/services#liqi",
    icons: <HandCoins className=" text-green-900 mb-4 bg-green-100 rounded-full p-2 text-green-900" size={46}  />,
  },
  {
    title: "Qusanna Hawaasummaa",
    description: "Miseensi qusenna adda adda qusachuudhan Liqii kan liqeefatan ni ta’a. Miseensonni Waliin qusatanif waldichii qusanna feshii fi dirqama waraa gaheessotaaf dhalaa 7% kan kafaluu yoo tahu ijooleedhaf moo 10.5% kafalaa.",
    link: "/services#liqi",
    icons: <UserRoundSearch className=" text-green-900 mb-4 bg-green-100 rounded-full p-2 text-green-900" size={46} />,
  },
  {
    title: "Qusannoo Daldalaa፦",
    description: "Miseensi qusennaa adda adda qusachuu dhan Liqii kan liqeefatan ni ta’a. Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa 7% kan kafaluu yoo tahu ijooleedhaf moo 10.5% kafalaa.",
    link: "/services#liqi",
    icons: <Building2 className=" text-green-900 mb-4 bg-green-100 rounded-full p-2 text-green-900" size={46} />,
  },
  {
    title: "Qusannoo Manaa",
    description: "Miseensi qusennaa adda adda qusachuu dhan Liqii kan liqeefatan ni ta’a. Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa 7% kan kafaluu yoo tahu ijooleedhaf moo 10.5% kafalaa.",
    link: "/services#liqi",
    icons: <Birdhouse className=" text-green-900 mb-4 bg-green-100 rounded-full p-2 text-green-900" size={46} />,
  },
  {
    title: "Qusannoo Konkolaataa",
    description: "Miseensi qusennaa adda adda qusachuu dhan Liqii kan liqeefatan ni ta’a. Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa 7% kan kafaluu yoo tahu ijooleedhaf moo 10.5% kafalaa.",
    link: "/services#liqi",
    icons: <span className=" text-green-900 mb-4 bg-green-100 rounded-full p-2 text-green-900"><FaTruckFront size={46} /></span>,
  },
  {
    title: "Qusannoo Baajaajii",
    description: "Miseensi qusennaa adda adda qusachuu dhan Liqii kan liqeefatan ni ta’a. Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa 7% kan kafaluu yoo tahu ijooleedhaf moo 10.5% kafalaa.",
    link: "/services#liqi",
    icons: <span className=" text-green-900 mb-4 bg-green-100 rounded-full p-2 text-green-900"><FaCaravan size={46} /></span>,
  },
  {
    title: "Qusannoo Liqii Mindaa",
    description: "Miseensi qusennaa adda adda qusachuu dhan Liqii kan liqeefatan ni ta’a. Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa 7% kan kafaluu yoo tahu ijooleedhaf moo 10.5% kafalaa.",
    link: "/services#liqi",
    icons: <BadgeEuro className=" text-green-900 mb-4 bg-green-100 rounded-full p-2 text-green-900" size={46} />,
  },
  {
    title: "Qusannaa Oogeesootaa",
    description: "Miseensi qusennaa adda adda qusachuu dhan Liqii kan liqeefatan ni ta’a. Miseensoon WALIIN qusatanif waldichii qusanna fedhii fi dirqama waraa gaheessotaaf dhalaa 7% kan kafaluu yoo tahu ijooleedhaf moo 10.5% kafalaa.",
    link: "/services#liqi",
    icons: <CableCar className=" text-green-900 mb-4 bg-green-100 rounded-full p-2 text-green-900" size={46} />,
  }
]


function services() {
  return (
    <div className="space-y-8 pb-6 bg w-full h-full">
      <section className="relative h-100 overflow-hidden bg-[#f3f3f1] text-white">
  <motion.div
    className="absolute inset-0"
    animate={{
      scale: [1.08, 1.12, 1.08],
      x: [0, -30, 0, 30, 0],
      y: [0, 12, 0, -12, 0],
      opacity: [0.85, 1, 0.9],
    }}
    transition={{
      duration: 18,
      ease: "easeInOut",
      repeat: Infinity,
    }}
  >
    <img
      className="absolute inset-0 h-full w-full object-cover opacity-70"
      src={banner1}
      alt="Savings and loans"
    />

    <div className="absolute inset-0 h-full w-full bg-green-900/50" />
  </motion.div>

  <div className="relative z-10 flex h-full items-center justify-center">
    <div className="max-w-3xl p-8 text-center text-white">
      <h1 className="mb-4 text-6xl font-bold">
        Qussannaa fi Liqii
      </h1>

      <p className="text-lg opacity-90">
        Waliin Saccos is committed to serving members with integrity and
        transparency. Learn about our mission, leadership and services.
      </p>
    </div>
  </div>
</section>

      <section className="relative overflow-hidden bg-white text-white w-full h-full">
        <div className="items-center text-black text-center py-10">
        
          <div className="flex flex-wrap justify-center mt-4 gap-10">
            {servces.map((product, index) => (
              <div key={index} className="bg-white rounded-3xl p-4 w-80 shadow shadow-md h-[500px] hover:shadow-sm transition duration-300 hover:scale-102 gap-4">
                <div className="ml-4 mt-2"> {product.icons} </div>
                <div className="items-start mr-16"> <h2 className="mt-9 text-[20px] font-bold tracking-[-0.02em] text-slate-900 text-left">{product.title}</h2> </div>
                <p className="mt-4 max-w-[390px] text-[16px] leading-[1.55] text-slate-700 bg-black/2 p-4 rounded rounded-4xl text-justify">
                  {product.description}
                </p>
                <Button className="text-[15px] rounded-2xl w-full h-[40px] bg-yellow-500 text-white shadow-lg shadow-green-900/20 hover:yellow-400 mt-4 hover:scale-102 transition duration-300 hover:shadow-sm relative top-4">
                  <a href={product.link}>explore more</a>

                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>



    </div>
  )
}
export default services;