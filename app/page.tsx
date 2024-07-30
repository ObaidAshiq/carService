import Image from 'next/image';
import carGif from "@/public/cargif.gif"
import OurServices from "./Components/Homepage/OurServices";

import { auth } from "@/lib/auth";
import CostCarousal from './Components/Homepage/CostCarousal';

const Home = async() => {

  const session:any = await auth();
  // console.log(session)

  return (
    <>
    <div className="h-[calc(100vh-100px)] relative ">
      <div className="w-full h-full bg-gray-700 opacity-50">
        <Image src={carGif} alt="Car"  className="w-full h-full object-cover mix-blend-luminosity"/>
      </div>

      <div className="absolute top-1/3 left-10"> 
      <h1 className="text-6xl font-bold tracking-tight">Auto shop </h1>
      <h6 className='text-xl mt-2'>We provide the best services to your cars <br />ranging from deep cleaning, oil changes <br /> with pick and drop services and other professional services.</h6>
      </div>
    </div>
      <OurServices userDetails = {{userId:session?.user?.id,name:session?.user?.name,email:session?.user?.email}}/>
     <CostCarousal/>

    </>
  );
};

export default Home;