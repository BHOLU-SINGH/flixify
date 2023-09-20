const ProductionCountry = (props) => {
    const data = props.data;

    const countryLength = data.length;
    let country = [];
    for (let i = 0; i < countryLength; i++) {
        country.push(data[i].name + "(" + data[i].iso_3166_1 + ")" + ", ");
    }

    return (
        <div className="production_country">
            <h3>Production Country</h3>
            <p>{country}</p>
        </div>
    );
}
export default ProductionCountry;