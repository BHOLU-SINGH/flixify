const TvGenres = ({ data, date_data }) => {
    let lengthVal = data.length;

    let genres = [];
    for (let i = 0; i < lengthVal; i++) {
        genres.push(data[i].name + ", ");
    }

    const date = date_data;
    // console.log("Item date is : " + date);
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
export default TvGenres;