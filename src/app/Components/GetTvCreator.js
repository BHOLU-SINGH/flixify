/* eslint-disable @next/next/no-img-element */
const getEpisodesCreator = async (props) => {
  let data = await fetch("http://localhost:3000/api/" + props);
  data = await data.json();
  return data.result;
};

export default async function GetTvCreator(props) {
  const page = props.page;
  let query = page;
  query = query.replaceAll("/", "_");
  query = query.replaceAll(",", "_");
  const episode = await getEpisodesCreator(query);

  return (
    <p>
      <span className="fw-600">Creator: </span>
      {episode.created_by.map((item) => (
        <>{item.name+", "}</>
      ))}
    </p>
  );
}