

// const Selector = ({countriesJson, handleChangeCountry, getCountryData}) => {
const Selector = (props) => {
	console.log(props);
	return (
		<>
			<select onChange={props.handleChangeCountry}>
				{	props.countriesJson.map((country, index) => (
					<option
						key={index}
						value={country.Slug}>
						{country.Country}
					</option>
	))};
				
			</select>
			<button onClick={props.getCountryData}>GO</button>

    </>
  )
}

export default Selector
