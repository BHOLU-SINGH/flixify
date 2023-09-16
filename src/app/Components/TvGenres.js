const getTvGenres = async (props) => {
  let data = await fetch("http://localhost:3000/api/" + props);
  let response = await data.json();
  return response.result;
};

export default async function TvGenres(props) {
  const page = props.page;
  const res = await getTvGenres(page);
  let lengthVal = res.genres.length;

  let genres = [];
  for (let i = 0; i < lengthVal; i++) {
    genres.push(res.genres[i].name + ", ");
  }

  const date = res.first_air_date;
  console.log("Item date is : " + date);
  const parsedDate = new Date(date);
  const first_air_date = parsedDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="genres flex">
      {first_air_date} <span>.</span> {genres}
    </div>
  );
}
