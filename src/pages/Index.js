import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import IndexSectionHeadersDarkReversePattern1 from "../components/headers-dark-reverse-pattern/IndexSectionHeadersDarkReversePattern1";
import IndexSectionFeaturesLightReverse2 from "../components/features-light-reverse/IndexSectionFeaturesLightReverse2";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

const logos = [
  {
    name: "tiller",
  },
  {
    name: "script",
  },
];

export default function Index() {
  const [activeLogo, setActiveLogo] = React.useState(logos[0]);
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeadersDarkReversePattern1
        activeLogo={activeLogo}
        changeLogo={() =>
          setActiveLogo(
            () =>
              logos[logos.findIndex((logo) => logo.name !== activeLogo.name)]
          )
        }
      />
      <IndexSectionFeaturesLightReverse2 activeLogo={activeLogo} />
    </React.Fragment>
  );
}
