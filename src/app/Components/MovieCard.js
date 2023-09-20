import Image from "next/image";
import Button from "./Button";

const { API_URL, API_KEY } = process.env;

async function getServerSideProps(props) {
    const response = await fetch(props)
    const data = await response.json();

    return data;
}

const MovieCard = async ({ API_PAGE, page }) => {
    const API_PATH = API_PAGE;
    const API = API_URL + API_PATH + "?api_key=" + API_KEY;
    const data = await getServerSideProps(API);
    return (
        <div className="content center">
            <div className="cardBox">
                {data.results.map((item) => (
                    <div className="card" key={item.id}>
                        <Image
                            src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                            alt={item.title}
                            width={200}
                            height={50}
                            priority
                        />
                        <span className="title">{item.title}</span>
                        <div>
                            <span>{item.release_date}</span>
                            <span className="popularity">{item.vote_average}⭐</span>
                        </div>
                        <span className="overview">
                            <small className="ow-title">Title: {item.title}</small>
                            <small className="ow-rel-date">
                                Release Date: {item.release_date}
                            </small>
                            <small className="overw">OverView: {item.overview}</small>
                            <Button id={item.id} page={page} />
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieCard;