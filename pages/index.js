import Head from "next/head";
import Boxes from "../components/Boxes";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Latest from "../components/Latest";
import Image from "next/image";
import Banner from "../components/Banner";


import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getData } from "../redux/data";

export default function Home(data) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);


  const user = useSelector((state) => state.data.data)


  return (
    <div className="min-h-screen">
      <Head>
        <title>Demo App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          as="style"
          rel="stylesheet preload prefetch"
          href="../fonts/Steelflight.ttf"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="bg-[#f4f4f4]">
        <div className="bg-top bg-no-repeat bg-left-top bg-opacity-0">
          <Header />
          <Boxes />
        </div>
      </div>
      <div className="bg-white  mt-[250px] ml-[60px]">
        <Latest results={user} />
      </div>
      <div className="  mt-24">
      <Banner/>
     
      </div>
      <div className=" mt-12">
      <Footer/>
     
      </div>
   
     
      
  

    </div>
  );
}

export async function getServerSideProps() {
    const res = await fetch("https://admin.naxa.com.np/api/projects");

    const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
