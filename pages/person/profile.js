import Image from "next/image";

function profile() {
  return (
    <div className="container mx-auto mt-20">
      <div className="relative max-w-3xl mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full shadow-lg rounded-xl">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <Image
                  src="/img/me.jpg"
                  className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                  width={150}
                  height={150}
                  alt="profile pic"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
              Ahmed Attallah
            </h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              Full Stack Web Developer
            </div>
          </div>
          <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  Hello, <br /> I am a Web Developer, working as a Software
                  Engineer at Towebia. I create awesome websites using Next.js
                  as my frontend framework, and Node.js along-side with MongoDB
                  as my backend.
                </p>
                <a
                  href="javascript:;"
                  className="font-normal text-slate-700 hover:text-slate-400"
                >
                  Follow Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default profile;
