import React from "react";

export default function IndexSectionHeadersDarkReversePattern1() {
  React.useEffect(() => {
    var promise = ref.current.pause();

    if (promise !== undefined) {
      promise
        .then((_) => {
          // Autoplay started!
        })
        .catch((error) => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
          console.log(error);
        });
    }
  }, []);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);
  const ref = React.useRef(null);

  const handleClick = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <React.Fragment>
      <>
        <section className="pt-6 pb-20 bg-gray-800 overflow-hidden bg-green-800 ">
          {" "}
          <div className="container mx-auto px-4">
            {" "}
            <div className="mb-6">
              {" "}
              <div className="flex items-center justify-between px-6 py-3.5 bg-gray-900 rounded-full">
                {" "}
                <div className="w-auto">
                  {" "}
                  <div className="flex flex-wrap items-center">
                    {" "}
                    <div className="w-auto">
                      {" "}
                      <a href="#">
                        {" "}
                        <img
                          src="https://static.shuffle.dev/uploads/files/b0/b0f89fa6cd6263ad0469015a5dd9e4a83056f302/logo-png-1726158335343.webp"
                          alt
                          className
                        />{" "}
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="w-auto">
                  {" "}
                  <div className="flex flex-wrap items-center">
                    {" "}
                    <div className="w-auto hidden lg:block">
                      {" "}
                      <ul className="flex items-center justify-center">
                        {" "}
                        <li className="mr-9">
                          <a
                            className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                            href="#"
                          >
                            Store
                          </a>
                        </li>{" "}
                        <li className="mr-9">
                          <a
                            className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                            href="#"
                          >
                            Commodities
                          </a>
                        </li>{" "}
                        <li className="mr-9">
                          <a
                            className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                            href="#"
                          >
                            Feed
                          </a>
                        </li>{" "}
                        <li className="mr-9">
                          <a
                            className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                            href="#"
                          >
                            Seed
                          </a>
                        </li>{" "}
                        <li className>
                          <a
                            className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                            href="#"
                          >
                            Garden Center
                          </a>
                        </li>{" "}
                        <li> </li>
                      </ul>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="w-auto">
                  {" "}
                  <div className="flex flex-wrap items-center">
                    {" "}
                    <div className="w-auto hidden lg:block">
                      {" "}
                      <div className="flex flex-wrap -m-2">
                        {" "}
                        <div className="w-full md:w-auto p-2" />{" "}
                        <div className="w-full md:w-auto p-2" />{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="w-auto lg:hidden">
                      {" "}
                      <button
                        className="inline-block"
                        onClick={() => setNavOpen((prevState) => !prevState)}
                      >
                        {" "}
                        <svg
                          className="text-green-600"
                          width={45}
                          height={45}
                          viewBox="0 0 56 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <rect
                            width={56}
                            height={56}
                            rx={28}
                            fill="currentColor"
                          />{" "}
                          <path
                            d="M37 32H19M37 24H19"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                        </svg>{" "}
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="w-auto md:hidden lg:block" />{" "}
              </div>{" "}
              <div className="fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50 block">
                {" "}
                <div
                  className={`inset-0 bg-gray-800 opacity-80 ${
                    navOpen ? `fixed` : `hidden`
                  }`}
                />
                <nav
                  className={`relative z-10 px-9 pt-8 bg-gray-900 h-full overflow-y-auto ${
                    navOpen ? `relative` : `hidden`
                  }`}
                >
                  {" "}
                  <div className="flex flex-wrap justify-between h-full">
                    {" "}
                    <div className="w-full">
                      {" "}
                      <div className="flex items-center justify-between -m-2">
                        {" "}
                        <div className="w-auto p-2">
                          {" "}
                          <a className="inline-block" href="#">
                            {" "}
                            <img
                              src="https://static.shuffle.dev/uploads/files/b0/b0f89fa6cd6263ad0469015a5dd9e4a83056f302/logo-png-1726158335343.webp"
                              alt
                            />{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="w-auto p-2">
                          {" "}
                          <button
                            className="inline-block"
                            onClick={() =>
                              setNavOpen((prevState) => !prevState)
                            }
                          >
                            {" "}
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {" "}
                              <path
                                d="M6 18L18 6M6 6L18 18"
                                stroke="#ffffff"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />{" "}
                            </svg>{" "}
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="flex flex-col justify-center py-8 w-full">
                      {" "}
                      <ul>
                        {" "}
                        <li className="mb-9">
                          <a
                            className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                            href="#"
                          >
                            Store
                          </a>
                        </li>{" "}
                        <li className="mb-9">
                          <a
                            className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                            href="#"
                          >
                            Commodities
                          </a>
                        </li>{" "}
                        <li className="mb-9">
                          <a
                            className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                            href="#"
                          >
                            Feed
                          </a>
                        </li>{" "}
                        <li className="mb-9">
                          <a
                            className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                            href="#"
                          >
                            Seed
                          </a>
                        </li>{" "}
                        <li className="mb-9">
                          <a
                            className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                            href="#"
                          >
                            Garden Center
                          </a>
                        </li>{" "}
                      </ul>{" "}
                    </div>{" "}
                  </div>{" "}
                </nav>{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative bg-gray-900 overflow-hidden rounded-t-3xl">
              {" "}
              <div className="absolute top-1/2 left-1/2 min-w-max transform -translate-x-1/2 -translate-y-1/2">
                {" "}
                <div className="absolute bg-gradient-radial-dark w-full h-full" />{" "}
                <img src="zanrly-assets/images/pattern-dark.png" alt />{" "}
              </div>{" "}
              <div className="relative px-8 pt-20">
                {" "}
                <div className="md:max-w-2xl text-center mx-auto">
                  {" "}
                  <span className="inline-block mb-3 text-sm font-bold uppercase tracking-widest text-green-500">
                    WELCOME TO HARVEY'S
                  </span>{" "}
                  <h1 className="font-heading mb-6 text-5xl lg:text-6xl text-white font-black tracking-tight">
                    A family of agriculture-focused companies
                  </h1>{" "}
                  <p className="mb-8 text-xl text-gray-500 font-bold">
                    Harvey's has grown from a single feed mill into a
                    multi-disciplinary group of direct-to-consumer and B2B
                    ventures
                  </p>{" "}
                  <div className="flex flex-wrap justify-center mb-20 -m-2" />{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative">
              {" "}
              <div className="relative z-20 px-8 max-w-max mx-auto">
                {" "}
                <video
                  muted
                  loop
                  poster="https://static.shuffle.dev/uploads/files/cc/cce6580999c8067e23bb4a662dea535a74b463e5/Screen-Shot-2024-09-12-at-12-19-20-PM.jpg"
                  id="bgvid"
                  ref={ref}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="bg.webm" type="video/webm" />
                  <source src="bg.mp4" type="video/mp4" />
                </video>
                <a
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block px-8 py-3.5 text-lg text-center text-gray-900 font-bold bg-gray-50 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-full ${
                    isPlaying ? `hidden` : ``
                  }`}
                  onClick={handleClick}
                >
                  Watch Video
                </a>{" "}
              </div>{" "}
              <div className="absolute left-0 top-0 w-full h-1/2 bg-gray-900 rounded-b-3xl" />{" "}
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
