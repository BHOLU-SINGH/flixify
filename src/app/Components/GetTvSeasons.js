/* eslint-disable @next/next/no-img-element */
const getEpisodesData = async (props) => {
  let data = await fetch("http://localhost:3000/api/" + props);
  data = await data.json();
  return data.result;
};

export default async function GetTvSeasons(props) {
  const page = props.page;
  const episode = await getEpisodesData(page);

  return (
    <div className="data column">
      {episode.seasons.slice().reverse().map((item) => (
        <>
          <div className="card center">
            <div className="imgBx">
              <img
                src={
                  "https://image.tmdb.org/t/p/w500" +
                  item.poster_path
                }
                alt={item.name}
              />
            </div>
            <h3>{item.name}</h3>
            <p>Episode {item.episode_count}</p>
            <p className="rating">{item.vote_average}⭐</p>
          </div>
        </>
      ))}
    </div>
  );
}
