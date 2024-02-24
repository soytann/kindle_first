import React, { useState } from 'react';
import countriesJson from "./countries.json";
import './App.css';
import TopPage from './pages/TopPage';

function App() {

  //Selector.jsxからお引越し。Top down Data Flowのため、親から情報を流さないいかん
  //propsで上位コンポーネントから下位コンポーネントへ渡したいものを包み込むふくさ
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState({
    date : "",
    newConfirmed : "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: "",
  });

	function handleChangeCountry (e){
		setCountry(e.target.value);
	}

	function getCountryData() {
		fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
			.then(res => res.json())
      .then(data => setCountryData({
        date: data[data.length-1].Date,
        newConfirmed : data[data.length-1].Confirmed - data[data.length-2].Confirmed,
        totalConfirmed: data[data.length-1].Confirmed,
        newRecovered: data[data.length-1].Recovered - data[data.length-2].Recovered,
        totalRecovered: data[data.length-1].Recovered,
      }))
			// .then(data =>  console.log(data[data.length-1]))
	}

  return (
    <>
      {console.log(countryData)}
      <TopPage
        handleChangeCountry={handleChangeCountry}
        countriesJson={countriesJson}
        // setCountry={setCountry}
        getCountryData={getCountryData}
        countryData={countryData} />
    </>
  );
}

export default App;
