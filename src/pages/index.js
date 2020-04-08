import React from "react";

import Landing from "../components/landing";
import SEO from "../components/seo";
import { Hero } from '../components/landing/Hero';
import { Services } from '../components/landing/Services';
import { Work } from '../components/landing/Work';
import { About } from '../components/landing/About';
import { Footer } from '../components/Footer';

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Foundry MK"

    return (
      <Landing location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`development`, `web applications`, `javascript`, `react`]}
        />
        <Hero />
        <Services />
        <Work />
        <About />
        <Footer />
      </Landing>
    );
  }
}

export default IndexPage;
