import React from "react";

function AddDoctor() {
  return (
    <>
      <div>
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
              <div>
                <button
                  type="submit"
                  className="w-16 h-8 bg-black text-white text-sm "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="px-6">
            <div className="w-full h-auto bg-white">
              <div>
                <div className="grid grid-cols-2 place-content-center place-items-center py-6">
                  <div className="">
                    <div className=" w-[550px] h-20 border border-gray-200">
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block p-2 text-sm font-medium text-gray-500 dark:text-white"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full h-10 p-2 focus:outline-none border-0"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="px-8">
                    <div className="w-[550px] h-20 border border-gray-200">
                      <div>
                        <label
                          htmlFor="last_name"
                          className="block p-2 text-sm font-medium text-gray-500 dark:text-white"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full h-10 p-2 focus:outline-none border-0"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="px-5">
                          <div className="w-[270px] h-[90px] border border-gray-200 ">
                            <label
                              htmlFor="date"
                              className="block p-2 text-sm font-medium text-gray-500 dark:text-white"
                            >
                              Date of Birth
                            </label>
                            <input
                              type="date"
                              className="w-full h-10 px-2 focus:outline-none border-0"
                            ></input>
                          </div>
                        </div>
                        <div className="">
                          <div className="w-[270px] h-[90px] border border-gray-200 ">
                            <label
                              htmlFor="Gender"
                              className="block p-2 text-sm font-medium text-gray-500 dark:text-white"
                            >
                              Gender{" "}
                            </label>
                            <select className="p-4 w-full text-lime-500  focus:outline-none ">
                              <option className="text-lime-500">
                                -Gender-
                              </option>
                              <option className="text-lime-500">Male</option>
                              <option className="text-lime-500">Female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="px-5">
                          <div className="w-[270px] h-[90px] border border-gray-200 ">
                            <label
                              htmlFor="speciality"
                              className="block p-2 text-sm font-medium text-gray-500 dark:text-white"
                            >
                              Speciality{" "}
                            </label>
                            <input
                              type="text"
                              className="w-full h-10 p-2 focus:outline-none border-0"
                            ></input>
                          </div>
                        </div>
                        <div className="">
                          <div className="w-[270px] h-[90px] border border-gray-200 ">
                            <label
                              htmlFor="Gender"
                              className="block p-2 text-sm font-medium text-gray-500 dark:text-white"
                            >
                              Phone{" "}
                            </label>
                            <input
                              type="number"
                              className="w-full h-10 p-2 focus:outline-none border-0"
                            ></input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 place-content-center place-items-center">
                  <div className="py-4">
                    <div className=" w-[550px] h-20 border border-gray-200">
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block p-2 text-sm font-medium text-gray-500 dark:text-white"
                        >
                          Enter your Email{" "}
                        </label>
                        <input
                          type="email"
                          className="w-full h-10 p-2 focus:outline-none border-0"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="px-8">
                    <div className="w-[550px] h-20 border border-gray-200">
                      <div>
                        <label
                          htmlFor="last_name"
                          className="block p-2 text-sm font-medium text-gray-500 dark:text-white"
                        >
                          Website URL{" "}
                        </label>
                        <input
                          type="text"
                          className="w-full h-10 p-2 focus:outline-none border-0"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center w-full px-5">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border border-gray-200  rounded-md cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Drag and drop a file here or click
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <div className="px-5 py-4">
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Please type what you want..."
                ></textarea>
              </div>
              <div>
                <div className="flex justify-start items-start gap-2 px-6 py-4">
                  <div>
                    <button
                      type="button"
                      className="w-20 h-10 bg-lime-500 text-white hover:bg-blue-500"
                    >
                      Submit
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="w-20 h-10 bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-3">
            <div className="h-auto w-full bg-white">
              <div>
                <h1 className="text-gray-600 font-medium text-lg px-6 py-4">
                  Doctor's Account Information
                </h1>
              </div>
              <div>
                <div className="px-6">
                  <div className=" w-full h-20 border border-gray-200">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block p-2 text-sm font-medium text-gray-500 dark:text-white"
                      >
                        User Name
                      </label>
                      <input
                        type="text"
                        className="w-full h-10 p-2 focus:outline-none border-0"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 place-content-center place-items-center">
                <div className="">
                  <div className=" w-[540px] h-20 border border-gray-200">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block p-2 text-sm font-medium text-gray-500 dark:text-white"
                      >
                        Password{" "}
                      </label>
                      <input
                        type="password"
                        className="w-full h-10 p-2 focus:outline-none border-0"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="px-2 py-4">
                  <div className="w-[540px] h-20 border border-gray-200">
                    <div>
                      <label
                        htmlFor="last_name"
                        className="block p-2 text-sm font-medium text-gray-500 dark:text-white"
                      >
                        Confirm Password{" "}
                      </label>
                      <input
                        type="password"
                        className="w-full h-10 p-2 focus:outline-none border-0"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-start items-start gap-2 p-6">
                  <div>
                    <button
                      type="button"
                      className="w-20 h-10 bg-lime-500 text-white hover:bg-blue-500"
                    >
                      Submit
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="w-20 h-10 bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="h-auto w-full bg-white">
              <div>
                <h1 className="text-gray-600 font-medium text-lg px-6 py-4">
                  Doctor Social Media Info{" "}
                </h1>
              </div>
              <div>
                <div className="grid grid-cols-2 place-content-center place-items-center">
                  <div className="">
                    <div className=" w-[550px] h-20 border border-gray-200">
                      <div>
                        <label
                          htmlFor="facebook"
                          className="block p-2 text-sm font-medium text-gray-500 dark:text-white"
                        >
                          Facebook{" "}
                        </label>
                        <div>
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/106/106897.png"
                            className="h-5 w-5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-8">
                    <div className="w-[550px] h-20 border border-gray-200">
                      <div>
                        <label
                          htmlFor="twitter"
                          className="block p-2 text-sm font-medium text-gray-500 dark:text-white"
                        >
                          Twitter{" "}
                        </label>
                        <div>
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/107/107195.png"
                            className="w-5 h-5 ml-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 place-content-center place-items-center">
                <div className="">
                  <div className=" w-[550px] h-20 border border-gray-200">
                    <div>
                      <label
                        htmlFor="linkdein"
                        className="block p-2 text-sm font-medium text-gray-500 dark:text-white"
                      >
                        Linkdein{" "}
                      </label>
                      <div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
                          className="h-5 w-5 ml-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-4">
                  <div className="w-[550px] h-20 border border-gray-200">
                    <div>
                      <label
                        htmlFor="instagram"
                        className="block p-2 text-sm font-medium text-gray-500 dark:text-white"
                      >
                        Instagram{" "}
                      </label>
                      <div>
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/15678/15678556.png"
                          className="h-5 w-5 ml-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-start items-start gap-2 px-6 py-4">
                  <div>
                    <button
                      type="button"
                      className="w-20 h-10 bg-lime-500 text-white hover:bg-blue-500"
                    >
                      Submit
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="w-20 h-10 bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                      Cancel
                    </button>
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

export default AddDoctor;
