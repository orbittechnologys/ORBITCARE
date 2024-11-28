import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import boy from "../assets/boy.jpg";
import man from "../assets/man.jpg";
import girl from "../assets/girl.jpg";
import his from "../assets/his.jpg";
import fb from "../assets/fb.jpg";
import hash from "../assets/hash.jpg";
import { TiSocialFacebook } from "react-icons/ti";
import { FaSlackHash } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";

const Doctors = () => {
  return (
    <div className="flex h-auto ">
      <div className="flex-1 flex flex-col bg-gray-50">
        <nav className="flex items-center justify-between h-16  bg-white text-gray-800 px-6  shadow-sm rounded-md">
          <div className="flex items-center space-x-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/11741/11741045.png"
              alt="Search Icon"
              className="h-5 w-5"
            />
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent border-none outline-none placeholder-gray-400 text-sm"
            />
          </div>

          <div className="flex items-center space-x-8">
            <span className="text-sm font-medium cursor-pointer text-gray-400">
              Notes
            </span>
            <span className="text-sm font-medium cursor-pointer text-gray-400 hover:text-gray-300">
              Create
            </span>
            <img
              src="https://cdn-icons-png.flaticon.com/128/542/542638.png"
              alt="Messages"
              className="h-5 w-5 cursor-pointer"
              title="Messages"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/3602/3602145.png"
              alt="Notifications"
              className="h-5 w-5 cursor-pointer"
              title="Notifications"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/281/281742.png"
              alt="Icon 1"
              className="h-5 w-5 cursor-pointer"
              title="Icon 1"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/953/953810.png"
              alt="Icon 2"
              className="h-5 w-5 cursor-pointer"
              title="Icon 2"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/3682/3682911.png"
              alt="Icon 3"
              className="h-5 w-5 cursor-pointer"
              title="Icon 3"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/15493/15493054.png"
              alt="Icon 3"
              className="h-5 w-5 cursor-pointer"
              title="Icon 3"
            />
          </div>
        </nav>
        <div>
          <div className="flex justify-between items-center p-6">
            <div>
              <h1 className="text-2xl font-medium text-gray-800">
                Hi, Welcome back!
              </h1>
              <p className="text-gray-500">JustDo Dashboard</p>
            </div>

            <div className="flex gap-6 items-center ">
              <div>
                <div className="flex gap-2 items-center">
                  <p className="text-base font-medium text-gray-400">
                    Permanents
                  </p>
                </div>
                <p className="text-xl font-medium text-gray-600 text-end px-2">
                  214
                </p>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <p className="text-base font-medium text-gray-400">
                    Contract
                  </p>
                </div>
                <p className="text-xl font-medium text-gray-600 text-end px-2">
                  206
                </p>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <p className="text-base font-medium text-gray-400">
                    Contract
                  </p>
                </div>
                <p className="text-xl font-medium text-gray-600 text-end px-2">
                  206
                </p>
              </div>
              <div>
                <button className="border-4 px-2 py-2 bg-black border-black text-white">
                  Add New
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="w-full h-52 border border-gray-200 bg-white shadow-md ">
            <div className="h-16 bg-black w-full">
              <div className="flex justify-between items-center px-4">
                <div className="flex items-center gap-4 px-2 py-4">
                  <p className="font-bold text-lg text-blue-600 hover:to-blue-950">
                    M.
                  </p>
                  <p className=" text-green-600 text-sm font-semibold">Paris</p>
                  <p className="text-gray-600  text-sm font-semibold">Tokyo</p>
                  <p className="text-gray-600  text-sm font-semibold">Moscow</p>
                  <p className="text-gray-600  text-sm font-semibold">Dubai</p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    className="py-1.5 px-5 text-sm font-medium text-gray-400 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100"
                  >
                    ToDo
                  </button>
                  <button
                    type="button"
                    className="py-1.5 px-5 text-sm font-medium text-gray-400 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100"
                  >
                    Settings
                  </button>
                  <button
                    type="button"
                    className="py-1.5 px-5 text-sm font-medium text-white bg-blue-500 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100"
                  >
                    Buy this item
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between  items-center px-8 mt-10">
              <div className="space-y-4">
                <p className="text-gray-500 text-medium ">Dentist</p>
                <p className="text-gray-500 m text-2xl">12</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500 font-medium text-medium">
                  Gynocologist
                </p>
                <p className="text-gray-500 font-medium text-2xl">10</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500 font-medium text-medium">Nursing</p>
                <p className="text-gray-500 font-medium text-2xl">58</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500 font-medium text-medium">
                  Audiology
                </p>
                <p className="text-gray-500 font-medium text-2xl">20</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500 font-medium text-medium">Nursing</p>
                <p className="text-gray-500 font-medium text-2xl">25</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500 font-medium text-medium">
                  Audiology
                </p>
                <p className="text-gray-500 font-medium text-2xl">23</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4  gap-2">
          <div className="bg-white p-2 grid grid-cols-1 place-items-center ">
            <div className="h-full ">
              <img
                src={girl}
                className="rounded-full justify-center  items-center"
              />
            </div>
            <div>
              <p className="text-gray-500 font-semibold">Michelle Green</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">
                jason-porter@info.com
              </p>
            </div>
            <div className="flex gap-5 mt-4">
              <div>
                <TiSocialFacebook color="blue" className="hover:fill-black" />
              </div>
              <div>
                <FaSlackHash color="blue" className="hover:fill-black" />
              </div>
              <div>
                <BiLogoLinkedin color="blue" className="hover:fill-black" />
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              <button className=" border-2 p-1 text-gray-500">Profile</button>
              <button className="border-2 text-gray-500">Message</button>
            </div>
          </div>
          <div className="bg-white p-2 grid grid-cols-1 place-items-center ">
            <div className="h-full ">
              <img
                src={his}
                className="rounded-full justify-center  items-center"
              />
            </div>
            <div>
              <p className="text-gray-500 font-semibold">Albert</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">
                jason-porter@info.com
              </p>
            </div>
            <div className="flex gap-5 mt-4">
              <div>
                <TiSocialFacebook color="blue" className="hover:fill-black" />
              </div>
              <div>
                <FaSlackHash color="blue" className="hover:fill-black" />
              </div>
              <div>
                <BiLogoLinkedin color="blue" className="hover:fill-black" />
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              <button className=" border-2 p-1 text-gray-500">Profile</button>
              <button className="border-2 text-gray-500">Message</button>
            </div>
          </div>
          <div className="bg-white p-2 grid grid-cols-1 place-items-center ">
            <div className="h-full ">
              <img
                src={boy}
                className="rounded-full justify-center  items-center"
              />
            </div>
            <div>
              <p className="text-gray-500 font-semibold">John S</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">
                jason-porter@info.com
              </p>
            </div>
            <div className="flex gap-5 mt-4">
              <div>
                <TiSocialFacebook color="blue" className="hover:fill-black" />
              </div>
              <div>
                <FaSlackHash color="blue" className="hover:fill-black" />
              </div>
              <div>
                <BiLogoLinkedin color="blue" className="hover:fill-black" />
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              <button className=" border-2 p-1 text-gray-500">Profile</button>
              <button className="border-2 text-gray-500">Message</button>
            </div>
          </div>
          <div className="bg-white p-2 grid grid-cols-1 place-items-center ">
            <div className="h-full ">
              <img
                src={man}
                className="rounded-full justify-center  items-center"
              />
            </div>
            <div>
              <p className="text-gray-500 font-semibold">Alan Green</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">
                jason-porter@info.com
              </p>
            </div>
            <div className="flex gap-5 mt-4">
              <div>
                <TiSocialFacebook color="blue" className="hover:fill-black" />
              </div>
              <div>
                <FaSlackHash color="blue" className="hover:fill-black" />
              </div>
              <div>
                <BiLogoLinkedin color="blue" className="hover:fill-black" />
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              <button className=" border-2 p-1 text-gray-500">Profile</button>
              <button className="border-2 text-gray-500">Message</button>
            </div>
          </div>
          <div className="bg-white p-2 grid grid-cols-1 place-items-center ">
            <div className="h-full ">
              <img
                src={his}
                className="rounded-full justify-center  items-center"
              />
            </div>
            <div>
              <p className="text-gray-500 font-semibold"> Green A</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">
                jason-porter@info.com
              </p>
            </div>
            <div className="flex gap-5 mt-4">
              <div>
                <TiSocialFacebook color="blue" className="hover:fill-black" />
              </div>
              <div>
                <FaSlackHash color="blue" className="hover:fill-black" />
              </div>
              <div>
                <BiLogoLinkedin color="blue" className="hover:fill-black" />
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              <button className=" border-2 p-1 text-gray-500">Profile</button>
              <button className="border-2 text-gray-500">Message</button>
            </div>
          </div>
          <div className="bg-white p-2 grid grid-cols-1 place-items-center ">
            <div className="h-full ">
              <img
                src={girl}
                className="rounded-full justify-center  items-center"
              />
            </div>
            <div>
              <p className="text-gray-500 font-semibold">Michelle G</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">
                jason-porter@info.com
              </p>
            </div>
            <div className="flex gap-5 mt-4">
              <div>
                <TiSocialFacebook color="blue" className="hover:fill-black" />
              </div>
              <div>
                <FaSlackHash color="blue" className="hover:fill-black" />
              </div>
              <div>
                <BiLogoLinkedin color="blue" className="hover:fill-black" />
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              <button className=" border-2 p-1 text-gray-500">Profile</button>
              <button className="border-2 text-gray-500">Message</button>
            </div>
          </div>
          <div className="bg-white p-2 grid grid-cols-1 place-items-center ">
            <div className="h-full ">
              <img
                src={man}
                className="rounded-full justify-center  items-center"
              />
            </div>
            <div>
              <p className="text-gray-500 font-semibold">Alan Green</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">
                jason-porter@info.com
              </p>
            </div>
            <div className="flex gap-5 mt-4">
              <div>
                <TiSocialFacebook color="blue" className="hover:fill-black" />
              </div>
              <div>
                <FaSlackHash color="blue" className="hover:fill-black" />
              </div>
              <div>
                <BiLogoLinkedin color="blue" className="hover:fill-black" />
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              <button className=" border-2 p-1 text-gray-500">Profile</button>
              <button className="border-2 text-gray-500">Message</button>
            </div>
          </div>
          <div className="bg-white p-2 grid grid-cols-1 place-items-center ">
            <div className="h-full ">
              <img
                src={boy}
                className="rounded-full justify-center  items-center"
              />
            </div>
            <div>
              <p className="text-gray-500 font-semibold"> Green K</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">
                jason-porter@info.com
              </p>
            </div>
            <div className="flex gap-5 mt-4">
              <div>
                <TiSocialFacebook color="blue" className="hover:fill-black" />
              </div>
              <div>
                <FaSlackHash color="blue" className="hover:fill-black" />
              </div>
              <div>
                <BiLogoLinkedin color="blue" className="hover:fill-black" />
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              <button className=" border-2 p-1 text-gray-500">Profile</button>
              <button className="border-2 text-gray-500">Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
