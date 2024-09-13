import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeadersDarkReversePattern1 from '../components/headers-dark-reverse-pattern/IndexSectionHeadersDarkReversePattern1';
import IndexSectionFeaturesLightReverse2 from '../components/features-light-reverse/IndexSectionFeaturesLightReverse2';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeadersDarkReversePattern1 />
      <IndexSectionFeaturesLightReverse2 />
    </React.Fragment>
  );
}

