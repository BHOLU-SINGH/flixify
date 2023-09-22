import Image from "next/image";
import Button from "./Button";

const TvCard = ({ data, page }) => {
    return (
        <div className="content center">
            <div className="cardBox">
                {data.results.map((item) => (
                    <>
                        <div className="card">
                            <Image
                                src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                                alt="{item.title}"
                                width={200}
                                height={50}
                                priority
                            />
                            <span className="title">{item.name}</span>
                            <div>
                                <span>{item.release_date}</span>
                                <span className="popularity">{item.vote_average}⭐</span>
                            </div>
                            <span className="overview">
                                <small className="ow-title">Title: {item.name}</small>
                                <small className="ow-rel-date">
                                    Release Date: {item.first_air_date}
                                </small>
                                <small className="overw">OverView: {item.overview}</small>
                                <Button id={item.id} page={page} />
                            </span>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default TvCard;