import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const Shortit = () => {

    const[url , setUrl] = useState({});
    const[shorturl , setShorturl] = useState("");

    const handleinputchange = (e)=>{
        const {name,value} = e.target;
        setUrl((oldData)=>({...oldData, [name]:value}));
    }

    const handleShorturl = async(e)=>{
        
        e.preventDefault();


        try {
            const responce = await axios.post("https://urlshortner-backend-m49y.onrender.com/api/v2/url/short",url);
            console.log(responce);

            if(responce.data.success){
                const sh_url = "https://urlshortner-frontend-8z6d.onrender.com/u/"+responce.data.isUrl.shorturl;
                setShorturl(sh_url);
                toast.success(responce.data.message);
            }
            else{
                console.log(responce.data.message);
                toast.error(responce.data.message);
            }      

        } catch (error) {
            console.log(error);

        }

    }

  return (
    <>
      <Navbar />
      <div className="flex flex-col text-center justify-center items-center h-screen bg-[#eae7dc]">
        <h2 className="font-poppins font-bold text-4xl text-black">
          Premium URL Shortener
        </h2>

        <div className="h-96 w-[900px] flex   items-center justify-center box-borderm mt-5 bg-white rounded">
          <div className="space-x-2">
            <input
            
                onChange={handleinputchange}
              className="w-[450px] h-12 rounded bg-white mx-auto border-2 font-poppins font-semibold text-black "
              type="text"
              name="unshorturl"
              placeholder="  http://example.com/home"
            />
            <button onClick={handleShorturl} className="bg-blue-600 h-12  rounded pl-1 pr-1 w-48 font-poppins font-semibold text-white">
              Short it
            </button>
          </div>
          <div className="bg-red-600 text-black text-xl">
                <h2>{shorturl}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shortit;
