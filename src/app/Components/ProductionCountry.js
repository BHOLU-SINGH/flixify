/* eslint-disable @next/next/no-img-element */
const getProductionCountry = async (props) => {
  let data = await fetch("http://localhost:3000/api/" + props);
  let response = await data.json();
  return response.result;
};

export default async function ProductionCountry(props) {
  const page = props.page;
  let query = page;
  query = query.replaceAll("/", "_");
  query = query.replaceAll(",", "_");
  const res = await getProductionCountry(query);

  const countryLength = res.production_countries.length;
  let country = [];
  for (let i = 0; i < countryLength; i++) {
    country.push(res.production_countries[i].name + "("+res.production_countries[i].iso_3166_1+")" + ", ");
  }

  return (
    <div className="production_country">
      <h3>Production Country</h3>
      <p>{country}</p>
    </div>
  );
}
