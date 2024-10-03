import React from "react";

export default function IndexSectionFeaturesLightReverse2({
  activeLogo,
  changeLogo,
}) {
  return (
    <React.Fragment>
      <>
        <section className="py-10 bg-gray-50 overflow-hidden">
          {" "}
          <div className="container mx-auto px-4">
            {" "}
            <div className="py-16 px-8 md:px-16 bg-white rounded-3xl">
              {" "}
              <div className="flex flex-wrap -m-8">
                {" "}
                <div className="w-full md:w-1/2 p-8 fill-green-600">
                  {" "}
                  <div className="md:max-w-sm">
                    {" "}
                    <span className="inline-block mb-5 text-sm font-bold uppercase tracking-widest text-green-600">
                      HARVEY'S DIVISIONS
                    </span>{" "}
                    <h2 className="font-heading mb-8 text-4xl text-gray-900 font-black tracking-tight">
                      Five flexible divisions to cover every acre of the ag
                      landscape
                    </h2>{" "}
                    <div className="flex flex-wrap -m-2" />{" "}
                  </div>{" "}
                </div>{" "}
                <div className="w-full md:w-1/2 p-8">
                  {" "}
                  <div className="flex flex-wrap">
                    {" "}
                    <div className="flip w-full xl:w-2/5" tabIndex={0}>
                      {" "}
                      <div className="card p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                        <img
                          src={`/zanrly-assets/logos/harveys-${activeLogo.name}-store.png`}
                          alt="Harvey's Store"
                        />
                      </div>
                      <div className="card back p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                        <h3 className="font-heading text-xl font-black xl:w-40 text-red-700">
                          Workwear, footwear, premium lifestyle clothing, pet
                          and birdfeeder supplies, &amp; much more.
                        </h3>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="flip w-full xl:w-2/5" tabIndex={1}>
                      {" "}
                      <div className="card p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                        <img
                          src={`/zanrly-assets/logos/harveys-${activeLogo.name}-commodities.png`}
                          alt="Harvey's Commodities"
                        />
                      </div>{" "}
                      <div className="card back p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                        <h3 className="font-heading text-xl font-black xl:w-40 text-orange-600">
                          Livestock feed merchandising, freight brokerage,
                          end-to-end logistics.
                        </h3>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="flip w-full xl:w-2/5" tabIndex={2}>
                      {" "}
                      <div className="card p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                        <img
                          src={`/zanrly-assets/logos/harveys-${activeLogo.name}-feed.png`}
                          alt="Harvey's Feed"
                        />
                      </div>{" "}
                      <div className="card back p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                        <h3 className="font-heading text-xl font-black xl:w-40 text-green-700">
                          Calf, cattle, dairy, equine, goat, poultry, rabbit,
                          swine custom mixes and stock mixes.
                        </h3>{" "}
                      </div>{" "}
                    </div>
                    <div className="flip w-full xl:w-2/5" tabIndex={3}>
                      <div className="card p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                        <img
                          src={`/zanrly-assets/logos/harveys-${activeLogo.name}-seed.png`}
                          alt="Harvey's Seed"
                        />
                      </div>{" "}
                      <div className="card back p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                        <h3 className="font-heading text-xl font-black xl:w-40 text-yellow-500">
                          Alfalfa, corn, soybeans, silage, wheat, and a full
                          catalogue of cover cropping and food plot solutions.
                        </h3>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="flip w-full xl:w-2/5" tabIndex={4}>
                      {" "}
                      <div className="card p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                        <img
                          src={`/zanrly-assets/logos/harveys-${activeLogo.name}-gc.png`}
                          alt="Harvey's Garden Center"
                        />
                      </div>{" "}
                      <div className="card back p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                        <h3 className="font-heading text-xl font-black xl:w-40 text-purple-500">
                          Seasonal fertilizer, soil, annuals, perennials,
                          shrubs, trees, and much more.
                        </h3>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
