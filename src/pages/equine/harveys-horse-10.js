import React from "react";
import Analysis from "./analysis.json";

export default function HarveysHorse() {
  return (
    <React.Fragment>
      <>
        <section className="py-10 bg-gray-900 overflow-hidden">
          {" "}
          <div className="container mx-auto px-4">
            <img
              className="relative z-10 md:absolute md:top-1/2 md:right-4 md:w-1/2 md:transform md:-translate-y-1/2 xl:w-auto mx-auto md:mr-0 pl-8 pb-8 md:pl-0 md:pb-0 rounded-lg"
              src="https://static.shuffle.dev/uploads/files/b0/b0f89fa6cd6263ad0469015a5dd9e4a83056f302/mockup.png"
              alt="Harvey's Horse"
            />
            <div className="relative pt-16 lg:pt-40 lg:pb-44 bg-gray-800 overflow-hidden border border-gray-800 rounded-3xl">
              {" "}
              <div className="max-w-7xl mx-auto">
                {" "}
                <div className="flex flex-wrap items-center -m-8">
                  {" "}
                  <div className="w-full md:w-1/2 p-8 mb-16 lg:mb-0">
                    {" "}
                    <div className="md:max-w-xl px-8">
                      {" "}
                      <span className="inline-block mb-5 text-sm text-green-500 font-bold uppercase tracking-widest">
                        Equine Feed
                      </span>{" "}
                      <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight">
                        Harvey's Horse 10%
                      </h2>{" "}
                      <p className="mb-6 text-gray-400 font-bold">
                        <ul>
                          <li className="list-disc">
                            Includes a tailored blend of prebiotics and
                            probiotics to support overall gut health
                          </li>
                          <li className="list-disc">
                            Essential omega-3 and -6 fatty acids to support
                            performance and overall health
                          </li>
                          <li className="list-disc">
                            Fortified with GRO 'N WIN™ for balanced nutrition
                          </li>
                        </ul>
                      </p>{" "}
                      <div className="md:max-w-md">
                        {" "}
                        <div className="flex flex-wrap -m-2">
                          {" "}
                          <div className="w-auto p-2">
                            {" "}
                            <div className="flex flex-nowrap items-center px-3 py-2 bg-gray-700 rounded-full">
                              {" "}
                              <div className="w-auto mr-2 pt-1">
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  viewBox="0 0 24 24"
                                  width={24}
                                  height={24}
                                  fill="#10b981"
                                >
                                  <g>
                                    <g id="Layer_1">
                                      <path
                                        class="cls-1"
                                        d="M5,22.1c-.4-4.4,4.4-10.4,4.5-11.5,0,0,0,0-.1,0-.5,0-2.1,1.7-3.9,1.1-1.2-.4-1.9-1.7-2-2.8,0-1,.4-1.9,1.2-2.2,1-.5,1.3-1.2,1.6-2,.2-.5.7-2.2,2.7-2.2s.6,0,.8,0C9.9,1.8,9.5.5,8.9,0c8.3,0,11.2,6,11.2,9.7s-2.7,10.2-1.4,12.4c.9,0,2.3,0,2.3.8,0,1.4-.7,1.2-2.5,1.2H5.5c-1.5,0-2.5,0-2.5-1s.5-.9,2-.9ZM17.9,8c-.6-2.2-2.4-4.7-6-5.7.3,1.3-.5,2.3-2.4,2-1-.2-1,0-1.4.9-.4.9-.9,2.3-2.6,3.1-.2.2.1,1.2.5,1.3.9.3,1.9-1.2,3.3-1.2s2.1,1.1,2.1,2c0,1.1-.9,2.1-2,3.2-1.4,1.4-2.7,6.2-2.5,8.3h9.5c-.3-.9-.2-5.2.4-7h-1.2c-.2,0-.5-.2-.5-.5s.3-.5.5-.5h1.5c.1-.3.2-.7.3-1h-1.3c-.3,0-.5-.3-.5-.5s.2-.5.5-.5h1.5c0-.3.1-.6.2-1h-1.3c-.2,0-.5-.2-.5-.5s.3-.5.5-.5h1.4c0-.4,0-.6,0-1h-1.5c-.2,0-.5-.2-.5-.5s.3-.5.5-.5c0,0,1.3,0,1.3,0ZM9.9,5.3c.5,0,.9.4.9.8s-.4.8-.9.8-.9-.4-.9-.8.4-.8.9-.8Z"
                                      />
                                    </g>
                                  </g>
                                </svg>
                              </div>{" "}
                              <div className="flex-1">
                                {" "}
                                <p className="text-sm text-white font-bold text-nowrap">
                                  Equine-specific formula
                                </p>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="w-auto p-2">
                            {" "}
                            <div className="flex flex-nowrap items-center px-3 py-2 bg-gray-700 rounded-full">
                              {" "}
                              <div className="w-auto mr-2 pt-1">
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="#10b981"
                                >
                                  <path d="M15.787 7.531c-5.107 2.785-12.72 9.177-15.787 15.469h2.939c.819-2.021 2.522-4.536 3.851-5.902 8.386 3.747 17.21-2.775 17.21-11.343 0-1.535-.302-3.136-.92-4.755-2.347 3.119-5.647 1.052-10.851 1.625-7.657.844-11.162 6.797-8.764 11.54 3.506-3.415 9.523-6.38 12.322-6.634z" />
                                </svg>
                              </div>{" "}
                              <div className="flex-1">
                                {" "}
                                <p className="text-sm text-white font-bold text-nowrap">
                                  100% traceable, pure ingredients
                                </p>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="w-auto p-2">
                            {" "}
                            <div className="flex flex-nowrap items-center px-3 py-2 bg-gray-700 rounded-full">
                              {" "}
                              <div className="w-auto mr-2 pt-1">
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  viewBox="0 0 24 24"
                                  width="24"
                                  height="24"
                                  fill="#10b981"
                                >
                                  <g>
                                    <g id="Layer_1">
                                      <path
                                        class="cls-1"
                                        d="M9.7,19.9l-.4.6c-1.4,2.4-4.4,3.2-6.8,1.8C.1,21-.7,17.9.7,15.5L7.5,3.5c.9-1.6,2.6-2.5,4.4-2.5.8,0,1.7.2,2.5.7,1.8,1.1,2.8,3.1,2.4,5.1,0,.4-.2.9-.4,1.3-1,.1-1.9.4-2.8.8l.8-1.4c.8-1.4.3-3.3-1.1-4.1s-3.3-.3-4.1,1.1l-3.4,5.9,4,2.3c-.6,1.1-.9,2.4-.9,3.8s.2,2.3.7,3.4Z"
                                      />
                                      <path d="M17.5,10c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5,6.5-2.9,6.5-6.5-2.9-6.5-6.5-6.5ZM22.4,16.5c0,1.1-.3,2-.9,2.8l-6.8-6.8c.8-.6,1.8-.9,2.8-.9,2.7,0,4.9,2.2,4.9,4.9ZM12.6,16.5c0-1.1.3-2,.9-2.8l6.8,6.8c-.8.6-1.8.9-2.8.9-2.7,0-4.9-2.2-4.9-4.9Z" />
                                    </g>
                                  </g>
                                </svg>
                              </div>{" "}
                              <div className="flex-1">
                                {" "}
                                <p className="text-sm text-white font-bold text-nowrap">
                                  100% med-free facility
                                </p>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-8">
                  <h5 className="text-gray-300">Ingredients</h5>
                  <p className="text-gray-100 text-xs">
                    Wheat Middlings, Ground Corn, Soybean Meal, Soybean Hulls,
                    Calcium Carbonate, Soybean Oil, Dehydrated Alfalfa Meal,
                    Calcium Phosphate, Active Dried Yeast Culture, Salt,
                    L-Lysine, Vitamin E Supplement, Manganese Sulfate, Zinc
                    Sulfate, Zinc Proteinate, Manganese Proteinate, Copper
                    Sulfate, Ferrous Sulfate, Choline Chloride, Copper
                    Proteinate, Sodium Selenite, Selenium Yeast, Thiamine
                    Mononitrate, Vitamin D3 Supplement, Vitamin A Supplement,
                    Riboflavin, Ascorbyl-2-Polyphosphate.{" "}
                  </p>
                </div>
              </div>{" "}
              <div className="ml-4 mr-4 relative overflow-x-auto my-10 lg:mx-80 rounded-lg lg:top-52">
                {" "}
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  {" "}
                  <thead className="text-xs text-gray-100 uppercase bg-gray-700">
                    {" "}
                    <tr>
                      <th colSpan={2} className="px-6 py-3">
                        GUARANTEED ANALYSIS
                      </th>
                    </tr>{" "}
                  </thead>{" "}
                  <tbody>
                    {Analysis.map((item) => (
                      <tr className="border-b bg-gray-600 border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap"
                        >
                          {item.name} {item.qualifier && `(${item.qualifier})`}
                        </th>
                        <td className="px-6 py-4 text-gray-200">
                          {item.value}
                          {item.unit}
                        </td>
                      </tr>
                    ))}
                  </tbody>{" "}
                </table>{" "}
              </div>{" "}
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
