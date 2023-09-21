const MovieGenres = (props) => {
    const data = props.data;

    let lengthVal = data.genres.length;

    let genres = [];
    for (let i = 0; i < lengthVal; i++) {
        genres.push(data.genres[i].name + ", ");
    }

    // Convert runtime in proper hours and minutes format
    let runtime = data.runtime;
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    if (hours >= 1) {
        runtime = hours + "h " + minutes + "m";
    } else {
        runtime = minutes + "m";
    }


    const date = data.release_date;
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
    )
}
export default MovieGenres;