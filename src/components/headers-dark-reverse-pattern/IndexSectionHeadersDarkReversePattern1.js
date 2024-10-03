import React from "react";
import { ReactNestedMenu } from "react-nested-menu";

const menu = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Store",
    url: "/#",
    children: [
      {
        id: 3,
        title: "Men",
        url: "/#",
      },
      {
        id: 4,
        title: "Women",
        url: "/#",
      },
      {
        id: 5,
        title: "Kids",
        url: "/#",
      },
      {
        id: 6,
        title: "Footwear",
        url: "/#",
      },
      {
        id: 7,
        title: "Pet",
        url: "/#",
      },
      {
        id: 8,
        title: "Brands",
        url: "/#",
      },
      {
        id: 9,
        title: "Events",
        url: "/#",
      },
    ],
  },
  {
    id: 12,
    title: "Seed",
    url: "/#",
    children: [
      {
        id: 13,
        title: "Corn",
        url: "/#",
      },
      {
        id: 14,
        title: "Soybeans",
        url: "/#",
      },
      {
        id: 15,
        title: "Wheat",
        url: "/#",
      },
      {
        id: 16,
        title: "Cover Crop",
        url: "/#",
      },
      {
        id: 17,
        title: "Pasture Mix",
        url: "/#",
      },
      {
        id: 18,
        title: "Food Plot",
        url: "/#",
      },
    ],
  },
  {
    title: "Feed",
    url: "/#",
    children: [
      {
        id: 23,
        title: "Equine",
        url: "/#",
      },
      {
        id: 24,
        title: "Swine",
        url: "/#",
      },
      {
        id: 25,
        title: "Calf",
        url: "/#",
      },
      {
        id: 26,
        title: "Sheep",
        url: "/#",
      },
      {
        id: 27,
        title: "Goat",
        url: "/#",
      },
      {
        id: 28,
        title: "Poultry",
        url: "/#",
      },
      {
        id: 29,
        title: "Beef",
        url: "/#",
      },
      {
        id: 30,
        title: "Dairy",
        url: "/#",
      },
      {
        id: 31,
        title: "Pet",
        url: "/#",
      },
      {
        id: 32,
        title: "Rabbit",
        url: "/#",
      },
      {
        id: 33,
        title: "Lactation",
        url: "/#",
      },
      {
        id: 34,
        title: "Full truckloads",
        url: "/#",
      },
    ],
  },
  {
    title: "Commodities",
    url: "/#",
    children: [
      {
        id: 48,
        title: "About",
        url: "/#",
      },
      {
        id: 49,
        title: "Products",
        url: "/#",
      },
      {
        id: 40,
        title: "Team",
        url: "/#",
      },
    ],
  },
  {
    title: "Garden Center",
    url: "/#",
    children: [
      {
        id: 55,
        title: "Hours",
        url: "/#",
      },
      {
        id: 56,
        title: "Fertilizer",
        url: "/#",
      },
      {
        id: 57,
        title: "Soil",
        url: "/#",
      },
    ],
  },
];

const logos = [
  {
    name: "tiller",
  },
  {
    name: "script",
  },
];

export default function IndexSectionHeadersDarkReversePattern1({
  activeLogo,
  changeLogo,
}) {
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

  const linkTransformer = (menuItem) => {
    return (
      <a
        className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300 text-nowrap p-2"
        href={menuItem.url}
      >
        {menuItem.title}
      </a>
    );
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
                      {/* eslint-disable-next-line */}
                      <a href="#" onClick={changeLogo}>
                        {" "}
                        <img
                          src={`/zanrly-assets/logos/harveys-${activeLogo.name}-white.svg`}
                          alt="Harvey's"
                          className="w-32"
                        />{" "}
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="w-auto h-8">
                  {" "}
                  <div className="flex flex-wrap items-center">
                    {" "}
                    <div className="w-auto hidden lg:block">
                      <ReactNestedMenu
                        navParentClassname="nested flex items-start justify-center"
                        navTopLevelParentClassname="nested"
                        navChildClassname="w-full text-center ml-2"
                        linkTransformer={linkTransformer}
                        menuData={menu}
                      />
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
              </div>{" "}
              <div
                className={`fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50 block ${
                  navOpen ? `visible` : `hidden`
                }`}
              >
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
                          {/* eslint-disable-next-line */}
                          <a
                            className="inline-block"
                            href="#"
                            onClick={() =>
                              setLogoURL(
                                logos[
                                  logos.findIndex(
                                    (logo) => logo.name !== activeLogo.name
                                  )
                                ]
                              )
                            }
                          >
                            {" "}
                            <img
                              src={`/zanrly-assets/logos/harveys-${activeLogo.name}-white.svg`}
                              alt="Harvey's"
                              className="w-32"
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
                      <ReactNestedMenu
                        navParentClassname="not-nested"
                        navTopLevelParentClassname="vertical menu"
                        navChildClassname="ml-8"
                        linkTransformer={linkTransformer}
                        menuData={menu}
                      />
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
                <img
                  src="zanrly-assets/images/pattern-dark.png"
                  alt="pattern"
                />{" "}
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
                {/* eslint-disable-next-line */}
                <a
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block px-8 py-3.5 text-lg text-center text-gray-900 font-bold bg-gray-50 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-full ${
                    isPlaying ? `hidden` : ``
                  }`}
                  onClick={handleClick}
                  tabIndex={-1}
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
