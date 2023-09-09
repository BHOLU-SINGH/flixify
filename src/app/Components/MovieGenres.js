const getMovieGenres = async (props) => {
  let data = await fetch("http://localhost:3000/api/" + props );
  let response = await data.json();
  return response.result;
};

export default async function MovieGenres(props) {
  const page = props.page;
  const res = await getMovieGenres(page);
  let lengthVal = res.genres.length;

  let genres = [];
  for (let i = 0; i < lengthVal; i++) {
    genres.push(res.genres[i].name + ", ");
  }

  // Convert runtime in proper hours and minutes format
  let runtime = res.runtime;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  if(hours >= 1){
    runtime = hours + "h " + minutes + "m";
  } else{
    runtime = minutes + "m";
  }
  

  const date = res.release_date;
  const parsedDate = new Date(date);
  const release_date = parsedDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="genres flex">
      {release_date} <span>.</span> {genres} <span>.</span> {runtime}
    </div>
  );
}
