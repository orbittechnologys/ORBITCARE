import React, { useState } from "react";
import gif from "./../animation.gif";
import user from "./../user.png";
import speed from "./../performance.png";
import doctor from "./../doctor.png";
import Cal from "./../calendar.png";
import pat from "./../patient.png";
import like from "./../like.png";
import list from "./../list.png";
import money from "./../money.png";
import tab from "./../table.png";
import email from "./../email.png";
import chat from "./../chat.png";
import staff from "./../gr.png";
import contact from "./../contact.png";
import file from "./../file.png";
import map from "./../map.png";
import globe from "./../globe.png";
import log from "./../power.png";
import set from "./../settings.png";
import pro from "./../prof.png";
import msg from "./../msg.png";
import share from "./../share.png";
import {
  CircleUserRound,
  Gauge,
  ListChecks,
  ThumbsUp,
  User,
} from "lucide-react";
import { FaUserDoctor } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { ImTable } from "react-icons/im";
import { FaCcPaypal } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { RiContactsBook3Fill } from "react-icons/ri";
import { SiFiles } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
import { MdPowerSettingsNew } from "react-icons/md";

function Aside() {

   const [isDropdownClicked,setIsDropdownClicked] = useState(false);

   const handleDropdownClick = () => {
      setIsDropdownClicked(!isDropdownClicked);
   }
  return (
    <>
      <div>
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100  focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
           
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="logo-sidebar"
          class="fixed top-0 left-0 z-40 w-80 h-screen bg-lime-500 transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-8 overflow-y-auto bg-[#ffffff] dark:bg-green-800">
            <a
              
              class="flex items-center ps-2.5 mb-5"
            >
              <img src={gif} class="h-6 me-3 sm:h-7" alt="Logo" />
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white font-sans">
                Orbit Care
              </span>
            </a>
            <ul class="space-y-4 font-medium">
              <li>
                <a
                  href="#"
                  class="flex items-center gap-4 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-10"
                >
                  <img src={user} className="rounded-full w-10 h-10" />
                  <div className="  text-left">
                    <h1 class="text-gray-400 font-sans ml-1 text-xl">
                      Welcome
                    </h1>

                     <button className="flex justify-between w-full" onClick={handleDropdownClick}>
                        Dr Alan Green
                        <span className="ml-2">
                           v
                        </span>
                     </button>
                     
                  </div>
                </a>
                {isDropdownClicked && (
                        <div className="text-gray-500 space-y-8 border rounded-md py-4 w-40 items-center ml-8 h-auto  shadow-xl z-10 ">
                           <div className="flex justify-center hover:text-black">
                           <User className="hover:fill-black"/>
                           
                          <h1 className="hover:text-black text-gray-400">My Profile</h1> 
                          </div>

                          <div className="flex justify-center hover:text-black">
                          <MdEmail  className="hover:text-black h-6 w-5"/>
                          <h1 className="hover:text-black text-gray-400">Messages</h1>
                          </div>

                          <div className="flex justify-center hover:text-black">
                          <MdSettings className="hover:text-black h-6 w-6"/>
                          <h1 className="hover:text-black text-gray-400">Settings</h1> 
                          </div>

                          <div className="border-b-2 border-gray-200 mx-4">
                         </div> 

                         <div className="flex justify-center hover:text-black">
                          <MdPowerSettingsNew className="hover:text-black h-6 w-6"/>
                          <h1 className="hover:text-black text-gray-400">Logout</h1> 
                          </div>

                        </div>

                     
                     )}
              </li>
              <div className="text-start text-gray-400 mt-14 px-4 ">
                <p className="font-sans mt-12 ">Hospital</p>
              </div>
              <li>
                <a
                  href="#"
                  class="flex items-center hover:text-green-500 justify-between px-4 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group"
                >
                  <span class="flex whitespace-nowrap hover:text-green-500 font-sans">
                    Dashboard
                  </span>
                  <Gauge className="hover:text-green-600" />
                  {/*<span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center hover:text-green-500 justify-between px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 "
                >
                  <span class="flex whitespace-nowrap hover:text-green-500 font-sans">
                    Doctors
                  </span>
                  <FaUserDoctor className="hover:text-green-600 h-6 w-7" />
                  {/*<span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </a>
              </li>
              <li></li>
              <a
                href="#"
                class="flex items-center hover:text-green-500 justify-between px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 "
              >
                <span class="flex whitespace-nowrap hover:text-green-500 font-sans">
                  Appointments
                </span>
                <SlCalender className="hover:text-green-600 h-6 w-7" />
                {/*<span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
              </a>
              <li>
                <a
                  href="#"
                  class="flex items-center hover:text-green-500 justify-between px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 "
                >
                  <span class="flex whitespace-nowrap hover:text-green-500 font-sans">
                    Todo List
                  </span>
                  <ListChecks className="hover:text-green-600 h-6 w-7" />
                  {/*<span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center hover:text-green-500 justify-between px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 "
                >
                  <span class="flex whitespace-nowrap hover:text-green-500 font-sans">
                    Patients
                  </span>
                  <CircleUserRound className="hover:text-green-600 h-6 w-7" />
                  {/*<span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center hover:text-green-500 justify-between px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 "
                >
                  <span class="flex whitespace-nowrap hover:text-green-500 font-sans">
                    Room Allotment
                  </span>
                  <ThumbsUp className="hover:text-green-600 h-6 w-7" />
                  {/*<span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center hover:text-green-500 justify-between px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 "
                >
                  <span class="flex whitespace-nowrap hover:text-green-500 font-sans">
                    Departments
                  </span>
                  <ImTable className="hover:text-green-600 h-6 w-7" />
                  {/*<span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center hover:text-green-500 justify-between px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 "
                >
                  <span class="flex whitespace-nowrap  hover:text-green-500 font-sans">
                    Payments
                  </span>
                  <FaCcPaypal className="hover:text-green-600 h-6 w-7" />
                  {/*<span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </a>
              </li>
              <div className="text-start text-gray-500 px-4">
                <p className="mt-12 font-sans">Admin</p>
              </div>
              <li>
                <a
                  href="#"
                  class="flex items-center hover:text-green-500 justify-between px-4 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group"
                >
                  <span class="flex whitespace-nowrap hover:text-green-500 font-sans">
                    Email
                  </span>
                  <MdEmail className="hover:text-green-600 h-6 w-7" />
                  {/*<span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center hover:text-green-500 justify-between px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 "
                >
                  <span class="flex whitespace-nowrap hover:text-green-500 font-sans">
                    Chat
                  </span>
                  <IoChatbubblesSharp className="hover:text-green-600 h-6 w-7" />
                  {/*<span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </a>
              </li>
              <li></li>
              <a
                href="#"
                class="flex items-center hover:text-green-500 justify-between px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 "
              >
                <span class="flex whitespace-nowrap hover:text-green-500 font-sans">
                  Our Staffs
                </span>
                <IoIosPeople className="hover:text-green-600 h-6 w-7" />
                {/*<span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
              </a>
              <li>
                <a
                  href="#"
                  class="flex items-center hover:text-green-500 justify-between px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 "
                >
                  <span class="flex whitespace-nowrap hover:text-green-500 font-sans">
                    Contacts
                  </span>
                  <RiContactsBook3Fill className="hover:text-green-600 h-6 w-7" />
                  {/*<span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center hover:text-green-500 justify-between px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 "
                >
                  <span class="flex whitespace-nowrap hover:text-green-500 font-sans">
                    File Manager
                  </span>
                  <SiFiles className="hover:text-green-600 h-6 w-7" />
                  {/*<span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-between hover:text-green-500 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 "
                >
                  <span class="flex whitespace-nowrap hover:text-green-500 font-sans">
                    Our Centres
                  </span>
                  <FaMapMarkerAlt className="hover:text-green-600 h-6 w-7" />
                  {/*<span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </a>
              </li>

              <div className="text-start text-gray-500 mt-10 px-4">
                <p className="mt-12 font-sans">Social</p>
              </div>
              <li>
                <a
                  href="#"
                  class="flex items-center hover:text-green-500 justify-between px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 "
                >
                  <span class="flex whitespace-nowrap hover:text-green-500 font-sans">
                    Blog
                  </span>
                  <IoEarth className="hover:text-green-600 h-6 w-7" />
                  {/*<span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center hover:text-green-500 justify-between px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 "
                >
                  <span class="flex whitespace-nowrap hover:text-green-500 font-sans">
                    Social
                  </span>
                  <IoShareSocialSharp className="hover:text-green-600 h-6 w-7" />
                  {/*<span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </a>
              </li>

              
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Aside;
