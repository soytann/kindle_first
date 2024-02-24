import React, { useState } from 'react';
import countriesJson from "./countries.json";
import './App.css';
import TopPage from './pages/TopPage';

function App() {

  //Selector.jsxからお引越し。Top down Data Flowのため、親から情報を流さないいかん
  //propsで上位コンポーネントから下位コンポーネントへ渡したいものを包み込むふくさ
  const [country, setCountry] = useState("");
	function handleChangeCountry (e){
		setCountry(e.target.value);
	}

	function getCountryData() {
		fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
			.then(res => res.json())
			.then(data =>  console.log(data))
	}

  return (
    <>
      <TopPage
        handleChangeCountry={handleChangeCountry}
        countriesJson={countriesJson}
        setCountry={setCountry}
        getCountryData={getCountryData} />
    </>
  );
}

export default App;
