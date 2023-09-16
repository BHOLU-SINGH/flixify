/* eslint-disable @next/next/no-img-element */
const getProdCom = async (props) => {
  let data = await fetch("http://localhost:3000/api/" + props);
  let response = await data.json();
  return response.result;
};

export default async function ProductionCom(props) {
  const page = props.page;
  const res = await getProdCom(page);

  const comLength = res.production_companies.length;
  let company = [];
  for (let i = 0; i < comLength; i++) {
    company.push(
      <p>
        <span className="imgBx"><img
          src={
            "https://image.tmdb.org/t/p/w500" +
            res.production_companies[i].logo_path
          }
          alt={res.production_companies[i].name}
        /></span>
        <span>Name: {res.production_companies[i].name}</span>
        <span>Origin: {res.production_companies[i].origin_country}</span>
      </p>
    );
  }

  return (
    <div className="production_com">
      <h3>Production Company</h3>
      <div className="pro_com_list flex">{company}</div>
    </div>
  );
}
