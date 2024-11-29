import React from "react";
import ava1 from "../assets/avatar1.jpg";
import ava2 from "../assets/avatar2.jpg";
import ava3 from "../assets/avatar3.jpg";
import ava4 from "../assets/avatar4.jpg";
import ava7 from "../assets/avatar7.jpg";
import ava8 from "../assets/avatar8.jpg";
import ava9 from "../assets/avatar9.jpg";

function Appointment() {
  return (
    <>
      <div>
        <div className="flex h-auto ">
          <div className="flex-1 flex flex-col   bg-gray-50">
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
                        Fever
                      </p>
                    </div>
                    <p className="text-xl font-medium text-gray-600 text-end px-2">
                      12
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-2 justify-center items-center">
                      <p className="text-base font-medium text-gray-400">
                        Cholera
                      </p>
                      <div className="flex-grow h-px bg-gray-400"></div>
                    </div>
                    <p className="text-xl font-medium text-gray-600 text-end px-2">
                      13
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <p className="text-base font-medium text-gray-400">
                        Malaria
                      </p>
                      <div className="flex-grow h-px bg-gray-400"></div>
                    </div>
                    <p className="text-xl font-medium text-gray-600 text-end px-2">
                      25
                    </p>
                  </div>
                    
                </div>
              </div>
            </div>
            <div>
              <div className="px-6 py-4">
                <div className="w-full h-auto bg-white border border-gray-100 shadow-md">
                  <div>
                    <form className="w-full mx-auto px-6 py-4">
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search Appointment"
                          required
                        />
                      </div>
                    </form>
                  </div>

                  <div>
                    <div className="relative overflow-x-auto  sm:rounded-lg ">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 px-10">
                          <tr className="text-gray-500">
                            <th scope="col" className="p-4">
                              <div className="flex items-center">
                                <p>#</p>
                              </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Date & Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Consulting
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Injury/Condition
                            </th>

                            <th scope="col" className="px-6 py-3">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-10 p-4">
                              <div className="flex items-start">
                                <div className="w-8 ">
                                  <img
                                    src={ava1}
                                    className="w-8 h-8 rounded-full"
                                  />
                                </div>
                              </div>
                            </td>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              <p>Jason Porter</p>
                              <p>+ 264-625-5858</p>{" "}
                            </th>
                            <td className="px-6 py-4 whitespace-nowrap">
                              jason-porter@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <p>13 June 2019</p>
                              <p>7:12PM to 8:30PM </p>
                            </td>
                            <td className="px-6 py-4">Dr. David</td>
                            <td className="px-6 py-4">Fever</td>
                            <td className="flex items-center px-6 py-4">
                              <div className="flex gap-0">
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/61/61456.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-10 p-4">
                              <div className="flex items-start">
                                <div className="w-8 ">
                                  <img
                                    src={ava2}
                                    className="w-8 h-8 rounded-full"
                                  />
                                </div>
                              </div>
                            </td>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              <p>Jason Porter</p>
                              <p>+ 264-625-5858</p>{" "}
                            </th>
                            <td className="px-6 py-4 whitespace-nowrap">
                              Carol-coke@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <p>13 June 2019</p>
                              <p>7:24PM to 8:30PM </p>
                            </td>
                            <td className="px-6 py-4">Dr. David</td>
                            <td className="px-6 py-4">Cholera </td>
                            <td className="flex items-center px-6 py-4">
                              <div className="flex gap-0">
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/61/61456.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-10 p-4">
                              <div className="flex items-start">
                                <div className="w-8 ">
                                  <img
                                    src={ava3}
                                    className="w-8 h-8 rounded-full"
                                  />
                                </div>
                              </div>
                            </td>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              <p>Jason Porter</p>
                              <p>+ 264-625-5858</p>{" "}
                            </th>
                            <td className="px-6 py-4 whitespace-nowrap">
                              jason-porter@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <p>13 June 2019</p>
                              <p>7:25PM to 8:30PM </p>
                            </td>
                            <td className="px-6 py-4">Dr. David</td>
                            <td className="px-6 py-4">Cholera </td>
                            <td className="flex items-center px-6 py-4">
                              <div className="flex gap-0">
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/61/61456.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-10 p-4">
                              <div className="flex items-start">
                                <div className="w-8 ">
                                  <img
                                    src={ava4}
                                    className="w-8 h-8 rounded-full"
                                  />
                                </div>
                              </div>
                            </td>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              <p>Jason Porter</p>
                              <p>+ 264-625-5858</p>{" "}
                            </th>
                            <td className="px-6 py-4 whitespace-nowrap">
                              denise-Alvarado@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <p>13 June 2019</p>
                              <p>7:30PM to 9:30PM </p>
                            </td>
                            <td className="px-6 py-4">Dr. Theresa </td>
                            <td className="px-6 py-4">Malaria</td>
                            <td className="flex items-center px-6 py-4">
                              <div className="flex gap-0">
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/61/61456.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-10 p-4">
                              <div className="flex items-start">
                                <div className="w-8 ">
                                  <img
                                    src={ava7}
                                    className="w-8 h-8 rounded-full"
                                  />
                                </div>
                              </div>
                            </td>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              <p>Jason Porter</p>
                              <p>+ 264-625-5858</p>{" "}
                            </th>
                            <td className="px-6 py-4 whitespace-nowrap">
                              jason-porter@example.com{" "}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <p>13 June 2019</p>
                              <p>8:08PM to 8:30PM </p>
                            </td>
                            <td className="px-6 py-4">Dr. Theresa </td>
                            <td className="px-6 py-4">Malaria</td>
                            <td className="flex items-center px-6 py-4">
                              <div className="flex gap-0">
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/61/61456.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-10 p-4">
                              <div className="flex items-start">
                                <div className="w-8 ">
                                  <img
                                    src={ava8}
                                    className="w-8 h-8 rounded-full"
                                  />
                                </div>
                              </div>
                            </td>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              <p>Jason Porter</p>
                              <p>+ 264-625-5858</p>{" "}
                            </th>
                            <td className="px-6 py-4 whitespace-nowrap">
                              jason-porter@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <p>13 June 2019</p>
                              <p>8:11PM to 8:30PM </p>
                            </td>
                            <td className="px-6 py-4">Dr. David</td>
                            <td className="px-6 py-4">Fever</td>
                            <td className="flex items-center px-6 py-4">
                              <div className="flex gap-0">
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/61/61456.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-10 p-4">
                              <div className="flex items-start">
                                <div className="w-8 ">
                                  <img
                                    src={ava9}
                                    className="w-8 h-8 rounded-full"
                                  />
                                </div>
                              </div>
                            </td>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              <p>Jason Porter</p>
                              <p>+ 264-625-5858</p>{" "}
                            </th>
                            <td className="px-6 py-4 whitespace-nowrap">
                              jason-porter@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <p>13 June 2019</p>
                              <p>7:12PM to 8:30PM </p>
                            </td>
                            <td className="px-6 py-4">Dr. David</td>
                            <td className="px-6 py-4">Fever</td>
                            <td className="flex items-center px-6 py-4">
                              <div className="flex gap-0">
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/61/61456.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-10 p-4">
                              <div className="flex items-start">
                                <div className="w-8 ">
                                  <img
                                    src={ava7}
                                    className="w-8 h-8 rounded-full"
                                  />
                                </div>
                              </div>
                            </td>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              <p>Jason Porter</p>
                              <p>+ 264-625-5858</p>{" "}
                            </th>
                            <td className="px-6 py-4 whitespace-nowrap">
                              jason-porter@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <p>13 June 2019</p>
                              <p>7:12PM to 8:30PM </p>
                            </td>
                            <td className="px-6 py-4">Dr. David</td>
                            <td className="px-6 py-4">Fever</td>
                            <td className="flex items-center px-6 py-4">
                              <div className="flex gap-0">
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/61/61456.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-10 p-4">
                              <div className="flex items-start">
                                <div className="w-8 ">
                                  <img
                                    src={ava3}
                                    className="w-8 h-8 rounded-full"
                                  />
                                </div>
                              </div>
                            </td>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              <p>Jason Porter</p>
                              <p>+ 264-625-5858</p>{" "}
                            </th>
                            <td className="px-6 py-4 whitespace-nowrap">
                              jason-porter@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <p>13 June 2019</p>
                              <p>7:12PM to 8:30PM </p>
                            </td>
                            <td className="px-6 py-4">Dr. David</td>
                            <td className="px-6 py-4">Fever</td>
                            <td className="flex items-center px-6 py-4">
                              <div className="flex gap-0">
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/61/61456.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                                <div className="w-8 h-8 border p-2">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                                    className="w-4 h-4"
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <nav
                      className="flex items-center flex-column flex-wrap md:flex-row justify-between p-3"
                      aria-label="Table navigation"
                    >
                      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-lime-500 bg-white border border-gray-300  hover:bg-blue-500 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            Previous
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-lime-500 bg-white border border-gray-300 hover:bg-blue-500 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            1
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-lime-500 bg-white border border-gray-300 hover:bg-blue-500 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            2
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-lime-500 bg-white border border-gray-300 hover:bg-blue-500 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            3
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-lime-500 bg-white border border-gray-300 hover:bg-blue-500 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointment;
