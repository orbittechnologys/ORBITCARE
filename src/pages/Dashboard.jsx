import React from "react";

import img1 from "../assets/download.png";
import img2 from "../assets/download (1).png";
import img3 from "../assets/download (2).png";
import { RiArrowDownSFill } from "react-icons/ri";
import HospitalRevenue from "../components/HospitalRevenue";
import PatientChart from "../components/PatientChart";
import AppointmentChart from "../components/Appointment";
import DeathAndRecovery from "../components/DeathAndRecovery";
import ava1 from "../assets/avatar1.jpg";
import ava2 from "../assets/avatar2.jpg";
import ava3 from "../assets/avatar3.jpg";
import ava4 from "../assets/avatar4.jpg";
import { BsFilePdf } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="flex h-auto ">
      {/* <aside className="w-72 h-auto border border-gray-200 shadow-lg bg-white">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-700">Sidebar</h2>
        </div>
      </aside> */}

      <div className="flex-1 flex flex-col   bg-gray-100">
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
                    Operations
                  </p>
                  <img src={img1} alt="Operations Icon" />
                </div>
                <p className="text-xl font-medium text-gray-600 text-end px-2">
                  29
                </p>
              </div>
              <div>
                <div className="flex gap-2 justify-center items-center">
                  <p className="text-base font-medium text-gray-400">
                    Earnings
                  </p>
                  <img src={img2} alt="Earnings Icon" />
                  <div className="flex-grow h-px bg-gray-400"></div>
                </div>
                <p className="text-xl font-medium text-gray-600 text-end px-2">
                  ₹981
                </p>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <p className="text-base font-medium text-gray-400">
                    Earnings
                  </p>
                  <img src={img3} alt="Additional Earnings Icon" />
                  <div className="flex-grow h-px bg-gray-400"></div>
                </div>
                <p className="text-xl font-medium text-gray-600 text-end px-2">
                  ₹56 M
                </p>
              </div>
                
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="w-full h-72 border border-gray-200 bg-lime-600 shadow-md ">
            <div className="h-16 bg-black w-full">
              <div className="flex justify-between items-center px-4">
                <div className="flex items-center gap-4 px-2 py-4">
                  <p className="font-bold text-lg text-blue-600">M.</p>
                  <p className=" text-green-700 text-lg font-semibold">
                    Analytics
                  </p>
                  <p className="text-gray-400 font-bold text-lg">
                    Covid 19 Dashboard
                  </p>
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
            <div className="grid grid-cols-4 px-10 mt-16">
              <p className="text-white font-medium text-base">Total Doctors</p>
              <p className="text-white font-medium text-base">
                Total Pharmacists
              </p>
              <p className="text-white font-medium text-base">Total Nurses</p>
              <p className="text-white font-medium text-base">Total Patients</p>
            </div>
            <div className="grid grid-cols-4 px-10 mt-4">
              <p className="text-white font-medium text-4xl">1,035</p>
              <p className="text-white font-medium text-4xl">735</p>
              <p className="text-white font-medium text-4xl">2,652</p>
              <p className="text-white font-medium text-4xl">1,671</p>
            </div>
            <div className="grid grid-cols-4 px-10 mt-4">
              <div className="flex">
                <p className="text-white font-normal text-sm">1.78%</p>

                <RiArrowDownSFill className="h-5 w-5" color="white" />

                <p className="text-white font-normal text-sm ml-2">Last year</p>
              </div>
              <div className="flex">
                <p className="text-white font-normal text-sm">6.78%</p>
                <RiArrowDownSFill className="h-5 w-5" color="white" />

                <p className="text-white font-normal text-sm ml-2">Last year</p>
              </div>{" "}
              <div className="flex">
                <p className="text-white font-normal text-sm">13.78%</p>
                <RiArrowDownSFill className="h-5 w-5" color="white" />

                <p className="text-white font-normal text-sm ml-2">Last year</p>
              </div>{" "}
              <div className="flex">
                <p className="text-white font-normal text-sm">5.78%</p>
                <RiArrowDownSFill className="h-5 w-5" color="white" />

                <p className="text-white font-normal text-sm ml-2">Last year</p>
              </div>{" "}
            </div>
              
          </div>
        </div>

        <div className="flex justify-between items-center p-6">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Overview</h1>
            <p className="text-gray-500">
              Statistics, Predictive Analytics Data Visualization, Big Data
              Analytics, etc.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <select className="p-2 border border-gray-200">
              <option>14 March 2020</option>
              <option>Today's</option>
              <option>This Week</option>
              <option>Last Week</option>
              <option>This Month</option>
              <option>Last Month</option>
              <option>Last 12 Month</option>
              <option>Custom Date</option>
            </select>
            <div className=" w-28 p-2 border border-gray-200 bg-white hover:bg-gray-100 text-gray-700">
              <div className="flex justify-center items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10550/10550076.png"
                  className="w-5 h-5"
                />
                <p>report</p>
              </div>
            </div>
            <div className=" w-28 p-2 border border-gray-200 bg-white hover:bg-gray-100 text-gray-700">
              <div className="flex justify-center items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/482/482216.png"
                  className="w-6 h-5"
                />
                <p>export</p>
              </div>
            </div>
              
          </div>
        </div>

        <div>
          <div className=" flex justify-center items-center  gap-2">
            <div className="w-[760px] h-auto bg-white border border-gray-100">
              <div className="flex justify-between items-center p-6">
                <div>
                  <h1 className="text-lg font-normal text-gray-600">
                    This Year's Hospital Revenue
                  </h1>
                  <p className="text-gray-500 text-xs">
                    It is the period time a user is actively engaged with your
                    website, page or app, etc
                  </p>
                </div>
                <div className="flex gap-5 justify-center items-center">
                  <div>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/5049/5049903.png"
                      className="w-4 h-4"
                    />
                  </div>
                  <div>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/512/512142.png"
                      className="h-5 w-5"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center p-6">
                <div className="flex justify-center items-center gap-5">
                  <div>
                    <h1 className="text-xl font-normal text-gray-600">
                      ₹1,056{" "}
                    </h1>
                    <p className="text-gray-500 text-xs">Expenses</p>
                  </div>
                  <div>
                    <h1 className="text-xl font-normal text-gray-600">
                      ₹3,098{" "}
                    </h1>
                    <p className="text-gray-500 text-xs">Total Profit</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center items-center">
                    <div className=" w-12 h-8 px-2.5 py-1 border border-gray-200 bg-white hover:bg-gray-100 text-gray-700">
                      <p>Day</p>
                    </div>
                    <div className=" w-14 h-8 px-2.5 py-1 border border-gray-200 bg-white hover:bg-gray-100 text-gray-700">
                      <p>Week</p>
                    </div>
                    <div className=" w-16 h-8 px-2.5 py-1 border border-gray-200 bg-lime-500 hover:bg-gray-100 text-gray-700">
                      <p>Month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <HospitalRevenue />
              </div>
            </div>
            <div className="w-[400px] h-auto border border-gray-200 bg-white">
              <div className="p-5">
                <h1 className="text-lg font-normal text-gray-600">
                  List By Country
                </h1>
                <p className="text-gray-500 text-xs">
                  The total number of Page Impressions within the date range
                </p>
              </div>
              <div className="flex justify-between items-center p-6">
                <div className="flex justify-center items-center gap-5">
                  <div>
                    <h1 className="text-xl font-normal text-gray-600">
                      ₹2,356{" "}
                    </h1>
                    <p className="text-gray-500 text-xs">New Patients</p>
                  </div>
                  <div>
                    <h1 className="text-xl font-normal text-gray-600">
                      ₹1,898{" "}
                    </h1>
                    <p className="text-gray-500 text-xs">Old Patients</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center items-center">
                    <div className=" w-8 h-8 px-2.5 py-1 border border-gray-200 bg-white hover:bg-gray-100 text-gray-700">
                      <p>D</p>
                    </div>
                    <div className=" w-8 h-8 px-2.5 py-1 border border-gray-200 bg-white hover:bg-gray-100 text-gray-700">
                      <p>W</p>
                    </div>
                    <div className=" w-8 h-8 px-2.5 py-1 border border-gray-200 bg-lime-500 hover:bg-gray-100 text-gray-700">
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <PatientChart />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center gap-2 p-6">
            <div className="w-[460px] h-[500px] border border-gray-200 bg-white ">
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="p-6 font-medium text-lg text-gray-600">
                      Doctors Availability
                    </h1>
                  </div>
                  <div>
                    <div className="flex justify-center items-center gap-4 p-6">
                      <div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/5049/5049903.png"
                          className="w-4 h-4"
                        />
                      </div>
                      <div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/512/512142.png"
                          className="w-4 h-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5">
                <div className="w-full h-10 border-y-[1px] border-gray-200 ">
                  <div className="grid grid-cols-3 justify-center items-center py-2 px-8">
                    <p className="text-sm font-medium text-gray-600">Doctors</p>
                    <p className="text-sm font-medium text-gray-600">
                      Specialist
                    </p>

                    <p className="text-sm font-medium text-gray-600">
                      Availability
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-5">
                <div className="w-full h-12 border-b-[1px] border-gray-200 hover:bg-gray-200">
                  <div className="grid grid-cols-3 justify-center items-center py-2 px-8">
                    <p className="text-sm font-medium text-gray-600">
                      Michelle
                    </p>
                    <p className="text-sm font-medium text-gray-600">Dental</p>

                    <p className=" w-[80px] text-center h-6 text-sm border-[1px] border-lime-700 rounded-md font-medium text-lime-700 px-2 mt-1">
                      Available
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-5">
                <div className="w-full h-12 border-b-[1px] border-gray-200 hover:bg-gray-200 ">
                  <div className="grid grid-cols-3 justify-center items-center py-2 px-8">
                    <p className="text-sm font-medium text-gray-600">Jason</p>
                    <p className="text-sm font-medium text-gray-600">Ortho</p>

                    <p className=" w-[80px] text-center h-6 text-sm border-[1px] border-orange-700 rounded-md font-medium text-orange-500 px-2 mt-1  ">
                      On Leave
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-5">
                <div className="w-full h-12 border-b-[1px] border-gray-200  hover:bg-gray-200">
                  <div className="grid grid-cols-3 justify-center items-center py-2 px-8">
                    <p className="text-sm font-medium text-gray-600">David</p>
                    <p className="text-sm font-medium text-gray-600">Skin</p>

                    <p className=" w-[105px] text-center h-6 text-sm border-[1px] border-orange-800 rounded-md font-medium text-red-700 px-2  mt-1">
                      Not Available
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-5">
                <div className="w-full h-12 border-b-[1px] border-gray-200 hover:bg-gray-200 ">
                  <div className="grid grid-cols-3 justify-center items-center py-2 px-8">
                    <p className="text-sm font-medium text-gray-600">
                      Angelica
                    </p>
                    <p className="text-sm font-medium text-gray-600">Dental</p>

                    <p className=" w-[80px] text-center h-6 text-sm border-[1px] border-lime-700 rounded-md font-medium text-lime-700 px-2 mt-1">
                      Available
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-5">
                <div className="w-full h-12 border-b-[1px] border-gray-200 hover:bg-gray-200">
                  <div className="grid grid-cols-3 justify-center items-center py-2 px-8">
                    <p className="text-sm font-medium text-gray-600">
                      Michelle
                    </p>
                    <p className="text-sm font-medium text-gray-600">Dental</p>

                    <p className=" w-[80px] text-center h-6 text-sm border-[1px] border-lime-700 rounded-md font-medium text-lime-700 px-2 mt-1">
                      Available
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5">
                <div className="w-full h-12  border-gray-200 hover:bg-gray-200 ">
                  <div className="grid grid-cols-3 justify-center items-center py-2 px-8">
                    <p className="text-sm font-medium text-gray-600">Jason</p>
                    <p className="text-sm font-medium text-gray-600">Ortho</p>

                    <p className=" w-[80px] text-center h-6 text-sm border-[1px] border-orange-700 rounded-md font-medium text-orange-500 px-2 mt-1 ">
                      On Leave
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <button
                  button="type"
                  className="w-full h-9  bg-blue-500 text-white hover:bg-blue-950"
                >
                  View all
                </button>
              </div>
            </div>
            <div className="w-72 h-[500px] border border-gray-200 bg-white ">
              <div>
                <h1 className="p-6 font-medium text-lg text-gray-600">
                  Appointment Status
                </h1>
              </div>
              <div className="">
                <AppointmentChart />
              </div>

              <div className="flex justify-between items-center px-4 ">
                <div>
                  <h1 className="">Cancelled</h1>
                </div>
                <div>
                  <p className="">2,098</p>
                </div>
              </div>
              <div className="mb-1 px-4 py-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 ">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center px-4 ">
                <div>
                  <h1 className="">Completed</h1>
                </div>
                <div>
                  <p className="">1,002</p>
                </div>
              </div>
              <div className="mb-1 px-4 py-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 ">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: "55%" }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center px-4 ">
                <div>
                  <h1 className="">Pending</h1>
                </div>
                <div>
                  <p className="">780</p>
                </div>
              </div>
              <div className="mb-1 px-4 py-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 ">
                  <div
                    className="bg-purple-800 h-2.5 rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="w-[400px] h-[500px] border border-gray-200 bg-white">
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="p-6 font-medium text-lg text-gray-600">
                      Death and Recovery rate
                    </h1>
                  </div>
                  <div>
                    <div className="flex justify-center items-center gap-4 p-6">
                      <div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/5049/5049903.png"
                          className="w-4 h-4"
                        />
                      </div>
                      <div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/512/512142.png"
                          className="w-4 h-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="flex justify-between items-center p-6">
                    <div className="flex justify-center items-center gap-5">
                      <div>
                        <h1 className="text-xl font-normal text-gray-600">
                          356{" "}
                        </h1>
                        <p className="text-gray-500 text-xs">Death</p>
                      </div>
                      <div>
                        <h1 className="text-xl font-normal text-gray-600">
                          698{" "}
                        </h1>
                        <p className="text-gray-500 text-xs">Recovery</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-center items-center">
                        <div className=" w-8 h-8 px-2.5 py-1 border border-gray-200 bg-white hover:bg-gray-100 text-gray-700">
                          <p>D</p>
                        </div>
                        <div className=" w-8 h-8 px-2.5 py-1 border border-gray-200 bg-white hover:bg-gray-100 text-gray-700">
                          <p>W</p>
                        </div>
                        <div className=" w-8 h-8 px-2.5 py-1 border border-gray-200 bg-lime-500 hover:bg-gray-100 text-gray-700">
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <DeathAndRecovery />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center gap-2 p-6">
            <div className="w-[460px] h-[400px] border border-gray-200 bg-white ">
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="p-6 font-medium text-lg text-gray-600">
                      Organic Visits & Conversions{" "}
                    </h1>
                  </div>
                  <div>
                    <div className="flex justify-center items-center gap-4 p-6">
                      <div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/5049/5049903.png"
                          className="w-4 h-4"
                        />
                      </div>
                      <div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/512/512142.png"
                          className="w-4 h-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="flex justify-between items-center p-6">
                    <div className="flex justify-center items-center gap-5">
                      <div>
                        <h1 className="text-xl font-medium text-gray-600">
                          ₹356{" "}
                        </h1>
                        <p className="text-gray-500 text-xs">Rate</p>
                      </div>
                      <div>
                        <h1 className="text-xl font-medium text-gray-600">
                          ₹198{" "}
                        </h1>
                        <p className="text-gray-500 text-xs">Value</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="flex justify-center items-center">
                          <div className=" w-12 h-8 px-2.5 py-1 border border-gray-200 bg-white hover:bg-gray-100 text-gray-700">
                            <p>Day</p>
                          </div>
                          <div className=" w-14 h-8 px-2.5 py-1 border border-gray-200 bg-white hover:bg-gray-100 text-gray-700">
                            <p>Week</p>
                          </div>
                          <div className=" w-16 h-8 px-2.5 py-1 border border-gray-200 bg-lime-500 hover:bg-gray-100 text-gray-700">
                            <p>Month</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                Map global
              </div>
            </div>
            <div className="w-72 h-[400px] border border-gray-200 bg-white ">
              <div>
                <h1 className="p-6 font-medium text-lg text-gray-600">
                  Overall Hospital Rating{" "}
                </h1>
              </div>
              <div className="flex justify-center items-center mr-24">
                <div>
                  <h1 className="font-semibold text-3xl text-gray-600 px-1">
                    {" "}
                    4.3
                  </h1>
                </div>
                <div>
                  <div className="flex items-center mt-2">
                    <svg
                      className="w-4 h-4 text-gray-500 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-gray-500 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-gray-500 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-gray-500 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mt-2 ml-5">
                  <div>
                    <img src={ava1} className="w-7 h-7 rounded-full" />
                  </div>
                  <div style={{ marginLeft: "-12px" }}>
                    <img src={ava2} className="w-7 h-7 rounded-full" />
                  </div>
                  <div style={{ marginLeft: "-12px" }}>
                    <img src={ava3} className="w-7 h-7 rounded-full" />
                  </div>
                  <div style={{ marginLeft: "-12px" }}>
                    <img src={ava4} className="w-7 h-7 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="px-4 py-2">
                <div className="flex justify-between items-center p-2 w-full border-b-[1px]">
                  <div>
                    <div className="flex justify-center items-end ">
                      <div>
                        <h1 className="text-xs font-normal text-gray-600">
                          5.0
                        </h1>
                      </div>
                      <div>
                        {" "}
                        <div className="flex ml-2 text-gray-500">
                          {[...Array(5)].map((_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              width="14"
                              height="14"
                              className="mr-0"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div>
                      {" "}
                      <h1 className="font-medium text-base text-gray-600">
                        4,158
                      </h1>
                    </div>
                    <h4 className="font-normal text-xs text-gray-600 mt-1">
                      58%
                    </h4>
                  </div>
                </div>
              </div>

              <div className="px-4 ">
                <div className="flex justify-between items-center p-2 w-full border-b-[1px]">
                  <div>
                    <div className="flex justify-center items-end ">
                      <div>
                        <h1 className="text-xs font-normal text-gray-600">
                          4.0
                        </h1>
                      </div>
                      <div>
                        {" "}
                        <div className="flex ml-2 text-gray-500">
                          {[...Array(5)].map((_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              fill={index < 4 ? "currentColor" : "none"}
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              width="14"
                              height="14"
                              className=""
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div>
                      {" "}
                      <h1 className="font-medium text-base text-gray-600">
                        2,019
                      </h1>
                    </div>
                    <h4 className="font-normal text-xs text-gray-600 mt-1">
                      28%
                    </h4>
                  </div>
                </div>
              </div>

              <div className="px-4 ">
                <div className="flex justify-between items-center p-2 w-full border-b-[1px]">
                  <div>
                    <div className="flex justify-center items-end ">
                      <div>
                        <h1 className="text-xs font-normal text-gray-600">
                          3.0
                        </h1>
                      </div>
                      <div>
                        {" "}
                        <div className="flex ml-2 text-gray-500">
                          {[...Array(5)].map((_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              fill={index < 3 ? "currentColor" : "none"}
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              width="14"
                              height="14"
                              className=""
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div>
                      {" "}
                      <h1 className="font-medium text-base text-gray-600">
                        984
                      </h1>
                    </div>
                    <h4 className="font-normal text-xs text-gray-600 mt-1">
                      15%
                    </h4>
                  </div>
                </div>
              </div>

              <div className="px-4 ">
                <div className="flex justify-between items-center p-2 w-full border-b-[1px]">
                  <div>
                    <div className="flex justify-center items-end ">
                      <div>
                        <h1 className="text-xs font-normal text-gray-600">
                          2.0
                        </h1>
                      </div>
                      <div>
                        {" "}
                        <div className="flex ml-2 text-gray-500">
                          {[...Array(5)].map((_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              fill={index < 2 ? "currentColor" : "none"}
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              width="14"
                              height="14"
                              className=""
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div>
                      {" "}
                      <h1 className="font-medium text-base text-gray-600">
                        4,30
                      </h1>
                    </div>
                    <h4 className="font-normal text-xs text-gray-600 mt-1">
                      8%
                    </h4>
                  </div>
                </div>
              </div>

              <div className="px-4 ">
                <div className="flex justify-between items-center p-2">
                  <div>
                    <div className="flex justify-center items-end ">
                      <div>
                        <h1 className="text-xs font-normal text-gray-600">
                          1.0
                        </h1>
                      </div>
                      <div>
                        {" "}
                        <div className="flex ml-2 text-gray-500">
                          {[...Array(5)].map((_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              fill={index < 1 ? "currentColor" : "none"}
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              width="14"
                              height="14"
                              className=""
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div>
                      {" "}
                      <h1 className="font-medium text-base text-gray-600">
                        307
                      </h1>
                    </div>
                    <h4 className="font-normal text-xs text-gray-600 mt-1">
                      18%
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[400px] h-[400px] border border-gray-200 bg-white">
              <div>
                <h1 className="p-6 font-medium text-lg text-gray-600">
                  Users Overview{" "}
                </h1>
              </div>
              <div className="">
                <div className="flex justify-evenly items-center mr-36 ">
                  <div>
                    <p className="font-normal text-sm text-gray-600">
                      New patient
                    </p>
                    <h1 className="font-bold text-xl text-gray-600">2,025</h1>
                  </div>
                  <div className="border-s p-2 ">
                    <p className="font-normal text-sm text-gray-600">
                      {" "}
                      Return patient
                    </p>
                    <h1 className="font-bold text-xl text-gray-600">1,254</h1>
                  </div>
                </div>
                <div className="border-b border-gray-200 mt-2 mx-5"></div>
              </div>
              <div>
                <div className="flex justify-between items-center px-6  mt-4">
                  <div>
                    <div className="flex justify-between">
                      <div className="mb-1 text-base font-normal text-gray-400">
                        New Patient
                      </div>
                      <div>
                        <h1 className="mb-1 text-base font-medium text-gray-400">
                          {" "}
                          77%
                        </h1>
                      </div>
                    </div>

                    <div className="w-[350px] bg-gray-200 rounded-full h-0.5 mb-4 dark:bg-gray-700 ">
                      <div
                        className="bg-lime-500 h-0.5 rounded-full"
                        style={{ width: "77%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center px-6 ">
                  <div>
                    <div className="flex justify-between">
                      <div className="mb-1 text-base font-normal text-gray-400">
                        Return Patient
                      </div>
                      <div>
                        <h1 className="mb-1 text-base font-medium text-gray-400">
                          {" "}
                          50%
                        </h1>
                      </div>
                    </div>

                    <div className="w-[350px] bg-gray-200 rounded-full h-0.5 mb-4 dark:bg-gray-700 ">
                      <div
                        className="bg-red-500 h-0.5 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center px-6">
                  <div>
                    <div className="flex justify-between">
                      <div className="mb-1 text-base font-normal text-gray-400">
                        Engagement
                      </div>
                      <div>
                        <h1 className="mb-1 text-base font-medium text-gray-400">
                          {" "}
                          23%
                        </h1>
                      </div>
                    </div>

                    <div className="w-[350px] bg-gray-200 rounded-full h-0.5 mb-4 dark:bg-gray-700 ">
                      <div
                        className="bg-blue-500 h-0.5 rounded-full"
                        style={{ width: "23%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-500 font-normal text-sm px-6 py-4">
                  The total number of Page Impressions within the date range
                  <span className="text-blue-500 cursor-pointer">
                    View more
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="flex justify-between items-center p-6">
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  Upcoming Operations List
                </h1>
                <p className="text-gray-500">
                  Statistics, Predictive Analytics Data Visualization, Big Data
                  Analytics, etc.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <select className="p-2 border border-gray-200">
                  <option>15 Aug 2020</option>
                  <option>Today's</option>
                  <option>This Week</option>
                  <option>Last Week</option>
                  <option>This Month</option>
                  <option>Last Month</option>
                  <option>Last 12 Month</option>
                  <option>Custom Date</option>
                </select>
                <div className=" w-28 p-2 border border-gray-200 bg-white hover:bg-gray-100 text-gray-700">
                  <div className="flex justify-center items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/10550/10550076.png"
                      className="w-5 h-5"
                    />
                    <p>report</p>
                  </div>
                </div>
                <div className=" w-28 p-2 border border-gray-200 bg-white hover:bg-gray-100 text-gray-700">
                  <div className="flex justify-center items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/482/482216.png"
                      className="w-6 h-5"
                    />
                    <p>export</p>
                  </div>
                </div>
                  
              </div>
            </div>
          </div>
          <div className=" p-6">
            <div className="w-full h-[500px] bg-white border border-gray-100">
              <div>
                <div className="grid grid-cols-6 place-content-center items-center">
                  <div className="ml-5">
                    <p className="font-bold text-base px-5 text-gray-700">#</p>
                  </div>
                  <div>
                    <p className="font-bold text-base p-6 text-gray-700 w-64">
                      Patient Name
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-base p-10 text-gray-700 w-60">
                      Doctors Team
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-base p-5 text-gray-700 w-64">
                      Doctor Of Operation
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-base px-10 py-10 text-gray-700">
                      Report
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-base  text-gray-700">
                      Diseases
                    </p>
                  </div>
                </div>
              </div>
              <div className="hover:bg-gray-100 py-3">
                <div className="grid grid-cols-6 place-content-center place-items-center">
                  <div className="mr-20">
                    <h1 className=" text-sm font-medium text-gray-500">
                      B-865
                    </h1>
                  </div>
                  <div>
                    <div className="flex justify-center items-center gap-2">
                      <div>
                        <img src={ava2} className="w-10 h-10 rounded-full" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-lg text-gray-500">
                          Michelle Schultz
                        </h1>
                        <p className="font-normal text-sm text-gray-500">
                          + 264-625-5858
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mr-10">
                    <div className="flex justify-center items-center">
                      <div style={{ marginLeft: "-16px" }}>
                        <img src={ava1} className="w-8 h-8 rounded-full" />
                      </div>
                      <div style={{ marginLeft: "-16px" }}>
                        <img src={ava2} className="w-8 h-8 rounded-full" />
                      </div>
                      <div style={{ marginLeft: "-16px" }}>
                        <img src={ava3} className="w-8 h-8 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-medium text-base text-gray-500 mr-16">
                      15-08-2020
                    </h1>
                  </div>
                  <div>
                    <div className="px-10">
                      <BsFilePdf color="red" className="w-5 h-5 mr-20" />
                    </div>
                  </div>
                  <div>
                    <p className="font-normal text-sm text-gray-500 mr-32">
                      Fracture
                    </p>
                  </div>
                </div>
              </div>

              <div className="hover:bg-gray-100 py-3">
                <div className="grid grid-cols-6 place-content-center place-items-center">
                  <div className="mr-20">
                    <h1 className=" text-sm font-medium text-gray-500">
                      B-231
                    </h1>
                  </div>
                  <div>
                    <div className="flex justify-center items-center gap-2 mr-5">
                      <div>
                        <img src={ava1} className="w-10 h-10 rounded-full" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-lg text-gray-500">
                          Deborah Cox{" "}
                        </h1>
                        <p className="font-normal text-sm text-gray-500">
                          + 264-625-1818
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mr-14">
                    <div className="flex justify-center items-center">
                      <div style={{ marginLeft: "-16px" }}>
                        <img src={ava2} className="w-8 h-8 rounded-full" />
                      </div>
                      <div style={{ marginLeft: "-16px" }}>
                        <img src={ava3} className="w-8 h-8 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-medium text-base text-gray-500 mr-16">
                      15-08-2020
                    </h1>
                  </div>
                  <div>
                    <div className="px-10">
                      <BsFilePdf color="red" className="w-5 h-5 mr-20" />
                    </div>
                  </div>
                  <div>
                    <p className="font-normal text-sm text-gray-500 mr-32 w-40 ml-24">
                      Cataract surgery
                    </p>
                  </div>
                </div>
              </div>

              <div className="hover:bg-gray-100 py-3">
                <div className="grid grid-cols-6 place-content-center place-items-center">
                  <div className="mr-20">
                    <h1 className=" text-sm font-medium text-gray-500">
                      B-781
                    </h1>
                  </div>
                  <div>
                    <div className="flex justify-center items-center gap-2 mr-5">
                      <div>
                        <img src={ava3} className="w-10 h-10 rounded-full" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-lg text-gray-500">
                          Denise Elliott{" "}
                        </h1>
                        <p className="font-normal text-sm text-gray-500">
                          + 264-625-2323{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mr-20">
                    <div className="flex justify-start items-start">
                      <div style={{ marginLeft: "" }}>
                        <img src={ava4} className="w-8 h-8 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-medium text-base text-gray-500 mr-16">
                      15-08-2020
                    </h1>
                  </div>
                  <div>
                    <div className="px-10">
                      <BsFilePdf color="red" className="w-5 h-5 mr-20" />
                    </div>
                  </div>
                  <div>
                    <p className="font-normal text-sm text-gray-500 mr-32 w-40 ml-24">
                      Hysterectomy
                    </p>
                  </div>
                </div>
              </div>

              <div className="hover:bg-gray-100 py-3">
                <div className="grid grid-cols-6 place-content-center place-items-center">
                  <div className="mr-20">
                    <h1 className=" text-sm font-medium text-gray-500">
                      B-865
                    </h1>
                  </div>
                  <div>
                    <div className="flex justify-center items-center gap-2 mr-5">
                      <div>
                        <img src={ava4} className="w-10 h-10 rounded-full " />
                      </div>
                      <div>
                        <h1 className="font-semibold text-lg text-gray-500">
                          Rose Coke{" "}
                        </h1>
                        <p className="font-normal text-sm text-gray-500">
                          + 264-625-8743{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mr-10">
                    <div className="flex justify-center items-center">
                      <div style={{ marginLeft: "-16px" }}>
                        <img src={ava1} className="w-8 h-8 rounded-full" />
                      </div>
                      <div style={{ marginLeft: "-16px" }}>
                        <img src={ava2} className="w-8 h-8 rounded-full" />
                      </div>
                      <div style={{ marginLeft: "-16px" }}>
                        <img src={ava3} className="w-8 h-8 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-medium text-base text-gray-500 mr-16">
                      15-08-2020
                    </h1>
                  </div>
                  <div>
                    <div className="px-10">
                      <BsFilePdf color="red" className="w-5 h-5 mr-20" />
                    </div>
                  </div>
                  <div>
                    <p className="font-normal text-sm text-gray-500 mr-32">
                      Cancer
                    </p>
                  </div>
                </div>
              </div>

              <div className="hover:bg-gray-100 py-3">
                <div className="grid grid-cols-6 place-content-center place-items-center">
                  <div className="mr-20">
                    <h1 className=" text-sm font-medium text-gray-500">
                      B-231
                    </h1>
                  </div>
                  <div>
                    <div className="flex justify-center items-center gap-2 mr-5">
                      <div>
                        <img src={ava2} className="w-10 h-10 rounded-full" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-lg text-gray-500">
                          Terry Carter{" "}
                        </h1>
                        <p className="font-normal text-sm text-gray-500">
                          + 264-625-1234
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mr-14">
                    <div className="flex justify-center items-center">
                      <div style={{ marginLeft: "-16px" }}>
                        <img src={ava2} className="w-8 h-8 rounded-full" />
                      </div>
                      <div style={{ marginLeft: "-16px" }}>
                        <img src={ava3} className="w-8 h-8 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-medium text-base text-gray-500 mr-16">
                      15-08-2020
                    </h1>
                  </div>
                  <div>
                    <div className="px-10">
                      <BsFilePdf color="red" className="w-5 h-5 mr-20" />
                    </div>
                  </div>
                  <div>
                    <p className="font-normal text-sm text-gray-500 mr-32 w-40 ml-24">
                      Cataract surgery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
