import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import axios from "axios";

const Shortit = () => {
  const [url, setUrl] = useState({});
  const [shorturl, setShorturl] = useState("");

  const handleinputchange = (e) => {
    const { name, value } = e.target;
    setUrl((oldData) => ({ ...oldData, [name]: value }));
  };

  const handlecopy = async () => {
    await navigator.clipboard.writeText(shorturl);
  };

  const handleShorturl = async (e) => {
    e.preventDefault();

    try {
      const responce = await axios.post(
        "http://localhost:7000/api/v2/url/short",
        {url},
        {
          withCredentials: true,
        }
      );
      console.log(responce);

      if (responce.data.success) {
        const sh_url = "http://localhost:7000/" + responce.data.isUrl.shorturl;
        setShorturl(sh_url);
      } else {
        console.log(responce.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col text-center justify-center items-center h-screen bg-[#eae7dc]">
        <h2 className="font-poppins font-bold text-4xl text-black">
          Premium URL Shortener
        </h2>

        <div className="h-96 w-[900px] flex flex-col items-center justify-center box-borderm mt-5 bg-white rounded">
          <div className="space-x-2">
            <input
              onChange={handleinputchange}
              className="w-[450px] h-12 rounded bg-white mx-auto border-2 font-poppins font-semibold text-black "
              type="text"
              name="unshorturl"
              placeholder="  http://example.com/home"
            />
            <button
              onClick={handleShorturl}
              className="bg-blue-600 h-12  rounded pl-1 pr-1 w-48 font-poppins font-semibold text-white"
            >
              Short it
            </button>
          </div>
          {shorturl ? (
            <div className="space-x-2 flex mt-4">
              <h2
                onChange={handleinputchange}
                className="w-[450px] h-12 rounded bg-white mx-auto border-2 font-poppins font-semibold text-black "
                type="text"
                name="unshorturl"
                placeholder="  http://example.com/home"
              >
                {shorturl}
              </h2>
              <button
                onClick={handlecopy}
                className="bg-blue-600 h-12  rounded pl-1 pr-1 w-48 font-poppins font-semibold text-white"
              >
                Copy
              </button>
            </div>
          ) : (
            <div></div>
          )}
          ;
        </div>
      </div>
    </>
  );
};

export default Shortit;
