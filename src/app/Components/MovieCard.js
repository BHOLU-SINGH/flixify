import Image from "next/image";
import Button from "./Button";

const MovieCard = async ({ data, page }) => {
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