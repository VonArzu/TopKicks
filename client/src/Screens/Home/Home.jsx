import React from "react";
import "./Home.css";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import HomeKickCards from "../../components/HomeKickCards/HomeKickCards";
import BigSneakerSection from "../../components/BigSneakerSection/BigSneakerSection";
import Layout from "../../components/shared/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div>
        <HeaderImage />
        <HomeKickCards />
        <BigSneakerSection />
      </div>
    </Layout>
  );
};

export default Home;
