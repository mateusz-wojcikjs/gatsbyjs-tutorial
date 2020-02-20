import React from "react";
import { Link } from "gatsby";
import Navbar from "../layout/Navbar";
import Layout from "../layout/Layout";
import SimpleHero from "../layout/SimpleHero";
import Banner from "../layout/Banner";
import About from "../layout/Home/About";
import Services from "../layout/Home/Services";

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="Szukam kogoś kto zrobi mi taki kalendarz rezerwacji na dany dzień i godzinę aby mogli"
      >
        <Link to="/tours" className="btn-white">
          Explore tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
);
