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
        url: "/equine",
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

const feed = [
  {
    id: 1,
    title: "Harvey's Horse 10%",
    protein: "10%",
    weight: "50 lbs",
    slug: "/harveys-horse-10",
  },
  {
    id: 2,
    title: "Buckeye - Supreme 14",
    protein: "14%",
    weight: "40 lbs",
    slug: "#",
  },
  {
    id: 3,
    title: "Buckeye - Safe 'N Easy Senior Pelleted",
    protein: "14%",
    weight: "40 lbs",
    slug: "#",
  },
  {
    id: 4,
    title: "Buckeye - Safe 'N Easy Complete",
    protein: "12%",
    weight: "50 lbs",
    slug: "#",
  },
  {
    id: 5,
    title: "Buckeye - Ultimate Finish 25",
    protein: "12%",
    weight: "40 lbs",
    slug: "#",
  },
  {
    id: 6,
    title: "Buckeye - Gro 'N Win",
    protein: "32%",
    weight: "50 lbs",
    slug: "#",
  },
  {
    id: 7,
    title: "Buckeye - EQ8 Gut Health",
    protein: "12%",
    weight: "50 lbs",
    slug: "#",
  },
  {
    id: 8,
    title: "Buckeye - Apple Snap Treats",
    protein: "12%",
    weight: "4 lbs",
    slug: "#",
  },
  {
    id: 9,
    title: "Buckeye - Carrot Crunchers Treats",
    protein: "12%",
    weight: "4 lbs",
    slug: "#",
  },
  {
    id: 10,
    title: "Buckeye - Peppermint Bits Treats",
    protein: "12%",
    weight: "4 lbs",
    slug: "#",
  },
];

const EquinePage = () => {
  /* eslint-disable-next-line */
  const [activeLogo, setActiveLogo] = React.useState(logos[0]);
  const [navOpen, setNavOpen] = React.useState(false);

  const linkTransformer = (menuItem) => {
    return (
      <a
        className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300 text-nowrap px-3 py-2"
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
                      <a href="#">
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
                          <a className="inline-block" href="#">
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
          </div>
          <section className="py-10 bg-gray-900 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="py-16 px-8 bg-gray-800 rounded-3xl">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-10 md:max-w-4xl mx-auto text-center">
                    <span className="inline-block mb-4 text-sm font-bold uppercase tracking-widest text-green-500">
                      Harvey's Feed
                    </span>
                    <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight">
                      Equine Mixes
                    </h2>
                    <p className="md:max-w-md mx-auto text-gray-500 font-bold">
                      Harvey's carries stock mixes from Buckeye Nutrition as
                      well as blending our own proprietary and custom mixes.
                    </p>
                  </div>
                  {feed.map((item) => (
                    <div className="flex flex-wrap -m-3">
                      <div className="w-full p-3">
                        <div className="p-10 bg-gray-900 rounded-3xl">
                          <div className="flex flex-wrap items-center md:items-start -m-2">
                            <div className="w-full md:w-1/2 p-2">
                              <h2 className="font-heading text-2xl text-white font-black tracking-tight">
                                {item.title}
                              </h2>
                            </div>
                            <div className="w-full md:w-1/2 p-2">
                              <div className="flex flex-wrap items-center justify-end -m-5">
                                <div className="w-full md:w-auto p-5">
                                  <div className="flex flex-wrap -m-3">
                                    <div className="flex flex-wrap items-center w-auto p-3">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#374151"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        className="bi bi-hammer mr-2"
                                      >
                                        <path d="M20.57 14.86 22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z" />
                                      </svg>
                                      <p className="text-gray-500 font-bold">
                                        {item.protein}
                                      </p>
                                    </div>
                                    <div className="flex flex-wrap items-center w-auto p-3">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#374151"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        className="mr-2"
                                      >
                                        <path d="M14 11V8c4.56-.58 8-3.1 8-6H2c0 2.9 3.44 5.42 8 6v3c-3.68.73-8 3.61-8 11h6v-2H4.13c.93-6.83 6.65-7.2 7.87-7.2s6.94.37 7.87 7.2H16v2h6c0-7.39-4.32-10.27-8-11zm4.87-7C17.5 5.19 15 6.12 12 6.12S6.5 5.19 5.13 4h13.74zM12 22c-1.1 0-2-.9-2-2 0-.55.22-1.05.59-1.41C11.39 17.79 16 16 16 16s-1.79 4.61-2.59 5.41c-.36.37-.86.59-1.41.59z" />
                                      </svg>
                                      <p className="text-gray-500 font-bold">
                                        {item.weight}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-full md:w-auto p-5">
                                  <div className="flex flex-wrap md:justify-center -m-2">
                                    <div className="w-full md:w-auto p-2">
                                      {/* eslint-disable-next-line */}
                                      <a
                                        className="block w-full px-4 py-2.5 text-sm text-center font-bold focus:ring-4 rounded-full bg-green-500 focus:ring-green-50 hover:bg-green-600"
                                        href={item.slug}
                                      >
                                        Buy Now
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
      </>
    </React.Fragment>
  );
};

export default EquinePage;
