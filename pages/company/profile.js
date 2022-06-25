import Image from "next/image";
import Link from "next/link";

const images = [
  {
    id: 100,
    img: "/img/1.png",
  },
  {
    id: 101,
    img: "/img/2.png",
  },
   
];

function profile() {
  return (
    <div className="conatainer my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2 ">
        {/* <!-- Left Side --> */}
        <div className="w-full md:w-3/12 md:mx-2">
          {/* <!-- Profile Card --> */}
          <div className="bg-white p-3 border-t-4 border-gray-400">
            <div className="image overflow-hidden">
              <Image
                className="h-auto w-full mx-auto"
                src="/img/me.jpg"
                alt="profile pic"
                width={512}
                height={512}
              />
            </div>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
              Ahmed Attallah
            </h1>
            <h3 className="text-gray-600 font-lg text-semibold leading-6">
              Software Engineer
            </h3>
            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
              {" "}
              Hello, <br /> I am a Web Developer, working as a Software Engineer
              at Towebia. I create awesome websites using Next.js as my frontend
              framework, and Node.js along-side with MongoDB as my backend.
            </p>
            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span>Profile Status</span>
                <span className="ml-auto">
                  <span className="bg-blue-500 py-1 px-2 rounded text-white text-sm">
                    Verified
                  </span>
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>Work Status</span>
                <span className="ml-auto">
                  <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                    Employed
                  </span>
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>Member since</span>
                <span className="ml-auto">Nov 07, 2016</span>
              </li>
            </ul>
          </div>
          {/* <!-- End of profile card --> */}
          <div className="my-4"></div>
        </div>
        {/* <!-- Right Side --> */}
        <div className="w-full md:w-9/12 mx-2">
          {/* <!-- Profile tab --> */}
          {/* <!-- About Section --> */}
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span clas="text-green-500">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">About</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Name</div>
                  <div className="px-4 py-2">Ahmed Attallah</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Birthday</div>
                  <div className="px-4 py-2">Jan 07, 1998</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Gender</div>
                  <div className="px-4 py-2">Male</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Contact No.</div>
                  <div className="px-4 py-2">+11 998001001</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Current Address</div>
                  <div className="px-4 py-2">Greek Campus, CA, Egypt</div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email.</div>
                  <div className="px-4 py-2">
                    <a className="text-blue-800" href="mailto:jane@example.com">
                      jane@example.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="block w-full text-blue-800 text-sm font-semibold rounded-lg focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
              <hr />
            </div>
          </div>
          {/* <!-- End of about section --> */}

          {/* <!-- Experience and education --> */}
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="grid grid-cols-2">
              <div>
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                  <span clas="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        fill="#fff"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">Education</span>
                </div>
                <ul className="list-inside space-y-2">
                  <li>
                    <div className="text-teal-600">
                      Masters in Computer Science
                    </div>
                    <div className="text-gray-500 text-xs">MIT</div>
                    <div className="text-gray-500 text-xs">
                      March 2022 - Now
                    </div>
                  </li>
                  <li>
                    <div className="text-teal-600">
                      Bachelor of Computer Science
                    </div>
                    <div className="text-gray-500 text-xs">
                      Benha University
                    </div>
                    <div className="text-gray-500 text-xs">
                      Septemper 2016 - May 2020
                    </div>
                  </li>
                  <li>
                    <div className="bg-white">
                      <button className="inline-flex items-center mt-3 px-2 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        Add Education
                      </button>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                  <span clas="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        fill="#fff"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">Experience</span>
                </div>
                <ul className="list-inside space-y-2">
                  <li>
                    <div className="text-teal-600">Software Engineer</div>
                    <Link href="/">
                      <button
                        type="button"
                        className="text-gray-900 bg-white hover:bg-gray-100  outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2"
                      >
                        <div className="mr-4">
                          <Image
                            src="/img/towebia.png"
                            alt="Towebia"
                            width={30}
                            height={30}
                          ></Image>
                        </div>
                        Towebia
                      </button>
                    </Link>
                    <div className="text-gray-500 text-xs">
                      March 2022 - Now
                    </div>
                  </li>

                  <li>
                    <div className="bg-white">
                      <button className="inline-flex items-center mt-3 px-2 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        Add Experience
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End of Experience and education grid --> */}
            <div className="block w-full text-blue-800 text-sm font-semibold rounded-lg focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
              <hr />
            </div>
          </div>
          {/* <!-- End of profile tab --> */}

          {/* Skills Section */}
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span clas="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <polyline points="17 11 19 13 23 9"></polyline>
                </svg>
              </span>
              <span className="tracking-wide">Skills</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Skill</div>
                  <div className="px-4 py-2 mr-2">Proficiency </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Skill</div>
                  <div className="px-4 py-2">Proficiency</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Node.js</div>
                  <div className="w-20 bg-gray-200 rounded-full h-2 mt-2.5 ml-4">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Next.js</div>
                  <div className="w-20 bg-gray-200 rounded-full h-2 mt-2.5 ml-4">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">MongoDB</div>
                  <div className="w-20 bg-gray-200 rounded-full h-2 mt-2.5 ml-4">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">JavaScript</div>
                  <div className="w-20 bg-gray-200 rounded-full h-2 mt-2.5 ml-4">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Git</div>
                  <div className="w-20 bg-gray-200 rounded-full h-2 mt-2.5 ml-4">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Deployment</div>
                  <div className="w-20 bg-gray-200 rounded-full h-2 mt-2.5 ml-4">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of Skills Section */}
          <div className="block w-full text-blue-800 text-sm font-semibold rounded-lg focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
            <hr />
          </div>
          {/* Start of Certificates section */}

          <div className="p-6">
            <div className=" flex justify-end">
              <div className="bg-white">
                <button className="inline-flex items-center mt-3 px-2 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Add Certificate
                </button>
              </div>
            </div>
            <div className="flex mt-5 flex-wrap justify-center gap-4">
              {images.map((image) => (
                <div
                  key={image.idS}
                  className="max-w-sm rounded overflow-hidden shadow-lg "
                >
                  <figure>
                    <Image src={image.img} alt="placeholder" width={390} height={300} />
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
