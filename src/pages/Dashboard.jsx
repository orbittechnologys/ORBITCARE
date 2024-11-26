import React from "react";

import img1 from "../assets/download.png";
import img2 from "../assets/download (1).png";
import img3 from "../assets/download (2).png";
import { RiArrowDownSFill } from "react-icons/ri";
import HospitalRevenue from "../components/HospitalRevenue";
import PatientChart from "../components/PatientChart";
import AppointmentChart from "../components/AppointmentChart";

const Dashboard = () => {
  return (
    <div className="flex h-auto">
      <aside className="w-72 h-auto border border-gray-200 shadow-lg bg-white">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-700">Sidebar</h2>
        </div>
      </aside>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
