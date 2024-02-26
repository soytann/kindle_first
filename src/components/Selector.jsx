

// const Selector = ({countriesJson, handleChangeCountry, getCountryData}) => {
const Selector = (props) => {
	// console.log(props);
	return (
		<>
		<div className="selector-container">
			<select onChange={props.handleChangeCountry}>
				<option value="">Select A Country</option>
				{	props.countriesJson.map((country, index) => (
					<option
						key={index}
						value={country.Slug}>
						{country.Country}
					</option>
	))};
				
			</select>
			<button onClick={props.getCountryData}>GO</button>
			</div>
    </>
  )
}

export default Selector
