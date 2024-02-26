import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import Header from "../components/Header";

const WorldPage = (props) => {
    return(
        <div>
            <Header />
            <Title />
            <Card
                allCountriesData={props.allCountriesData}/>
        </div>
    );
};

export default WorldPage;
