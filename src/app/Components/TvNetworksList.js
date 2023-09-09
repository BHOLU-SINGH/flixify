/* eslint-disable @next/next/no-img-element */
const getTvNetworkData = async (props) => {
  let data = await fetch("http://localhost:3000/api/" + props);
  data = await data.json();
  return data.result;
};

export default async function TvNetworksList(props) {
  const page = props.page;
  const series = await getTvNetworkData(page);

  return (
    <p>
      <span>Network</span>
      {series.networks.map((item) => (
        <>
          <span style={{ marginTop: "2px" }}>
            <img
              src={
                "https://image.tmdb.org/t/p/w500" + item.logo_path
              }
              width={100}
              height={30}
              alt={item.name}
            />
          </span>
        </>
      ))}
    </p>
  );
}
