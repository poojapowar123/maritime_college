import React from "react";
import "./Home.css";
import Programs from "../../component/homeComponents/programs/Programs";
import HomeSections from "../../component/homeComponents/homesection/HomeSections";
import NewsEvents from "../../component/homeComponents/news&events/NewsEvents";
import Placement from "../../component/homeComponents/placement/Placement";
import WhyManet from "../../component/homeComponents/why_manet/WhyManet";
import LifeAtManet from "../../component/homeComponents/life_at_manet/LifeAtManet";
import AlumniSpeak from "../../component/homeComponents/alumni_speak/AlumniSpeak";



const Home = () => {
    return (
        <div className="home">
             <HomeSections/>
          <Programs/>
          <NewsEvents/>
     <Placement/>
     <WhyManet/>
     <LifeAtManet/>
     <AlumniSpeak/>
        </div>
    );
};

export default Home;
