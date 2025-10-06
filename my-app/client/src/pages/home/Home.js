import React from "react";
import "./Home.css";
import Programs from "../../component/homeComponents/programs/Programs";
import HomeSections from "../../component/homeComponents/homesection/HomeSections";
import NewsEvents from "../../component/homeComponents/news&events/NewsEvents";




const Home = () => {
    return (
        <div className="home">
             <HomeSections/>
          <Programs/>
          <NewsEvents/>
       
        </div>
    );
};

export default Home;
