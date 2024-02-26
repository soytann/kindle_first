
function Card(props) {

    return (
        <>
            <h1>CARD</h1>
            {/* <button onClick={props.getAllCountriesData}>せじゃう</button> */}
            {props.allCountriesData.map((country,index) => (
                <div
                    className="card"
                    key={index}>
                    <div className="details">
                        <h2>{country.Country}</h2>
                        <p>新規感染者数：<span>{country.NewConfirmed.toLocaleString()}</span></p>
                        <p>総感染者数：<span>{country.TotalConfirmed.toLocaleString()}</span></p>
                        
                    </div>
                </div>
                
            ))}
        </>
    );
}

export default Card;
