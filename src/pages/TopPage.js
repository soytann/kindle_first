import React from 'react'
import Title from '../components/Title';
import Selector from '../components/Selector';
import Results from '../components/Results';
import Header from "../components/Header";
// const TopPage = ({countriesJson, setCountry, getCountryData}) => {
const TopPage = (props) => {
    // console.log(props)
  return (
    <div>
        <Header />
        <Title />
          <Selector
            handleChangeCountry={props.handleChangeCountry}
            countriesJson={props.countriesJson}
            // setCountry={props.setCountry}
            getCountryData={props.getCountryData}/>
          <Results
            countryData={props.countryData } />
    </div>
  )
}

export default TopPage
