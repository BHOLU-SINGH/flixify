/* eslint-disable @next/next/no-img-element */
const getEpisodesCreator = async (props) => {
  let data = await fetch("http://localhost:3000/api/" + props);
  data = await data.json();
  return data.result;
};

export default async function GetTvCreator(props) {
  const page = props.page;
  const episode = await getEpisodesCreator(page);

  return (
    <p>
      <span className="fw-600">Creator: </span>
      {episode.created_by.map((item) => (
        <>{item.name+", "}</>
      ))}
    </p>
  );
}