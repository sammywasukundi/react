const Card = (props) => {
    const { country, index } = props;
    const { name, capital, flags } = country;

    return (
        <li className="card" key={index}>
            <img src={flags.png} alt={name.common} />
            <div className="data-container">
                <ul>
                    <li className="country-details">
                        {name.common}
                    </li>
                    <li className="country-details">
                        {capital ? capital[0] : "Pas de capitale"}
                    </li>
                    <li className="country-details">
                        {country.population.toLocaleString("fr-FR")} habitants
                    </li>
                </ul>
            </div>
        </li>
    )
}

export default Card;