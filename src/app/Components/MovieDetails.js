import Image from "next/image";
import MovieGenres from "./MovieGenres";   
import SpokenLang from "./SpokenLang"; 
import ProductionCom from "./ProductionCom";
import ProductionCountry from "./ProductionCountry";
import Link from "next/link";

const MovieDetails = async ({ data }) => {

    // Get movie rating in starting two digits only
    let number = "" + data.vote_average;
    const vote_average = number.substring(0, 3);

    // Convert original language in proper readable format
    let original_language = data.original_language;
    if (original_language == "en") {
        original_language = "English";
    }

    const date = data.release_date;
    const parsedDate = new Date(date);
    const movieYear = parsedDate.toLocaleDateString("en-US", {
        year: "numeric",
    });
    let homepageVal, homepageLink = "";
    if (data.homepage.length > 0) {
        homepageLink = data.homepage;
        homepageVal = data.homepage;
    } else {
        homepageLink = "#";
        homepageVal = "Not Available!";
    }

    return (
        <div className="content">
            <div className="card-expand">
                <div className="bg_img">
                    <Image
                        src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
                        alt={data.title}
                        width={100}
                        height={100}
                    />
                    <Image
                        src={"https://image.tmdb.org/t/p/w500" + data.backdrop_path}
                        alt={data.title}
                        width={100}
                        height={100}
                    />
                </div>
                <div className="card-data">
                    <h1>
                        {data.title}
                        <span>({movieYear})</span>
                    </h1>
                    <MovieGenres data={data} />
                    <div className="rating_div flex">
                        <p>{vote_average}⭐</p>
                        <Link href="#" className="flex">
                            <i class="bi bi-play-fill"></i> Play Trailer
                        </Link>
                    </div>
                    <div className="opposites_react">
                        <h2>Composites react</h2>
                        <div className="overview">
                            <p>
                                <span className="fw-600">Original title:</span>
                                {data.original_title}
                            </p>
                            <p>
                                <span className="fw-600">Overview: </span> {data.overview}
                            </p>
                            <SpokenLang data={data.spoken_languages} />
                            <p>
                                <span className="fw-600">Home page: </span>
                                <span>
                                    <i className="bi bi-link-45deg"></i>
                                    <Link href={homepageLink} target="_blank">{homepageVal}</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="other-composite">
                    <div className="production">
                        <ProductionCom data={data.production_companies} />
                        <ProductionCountry data={data.production_countries} />
                    </div>
                    <div className="sidebar">
                        <div className="icons">
                            <Link href="https://www.facebook.com/freeprojects1/" target="_blank"><i className="bi bi-facebook"></i></Link>
                            <Link href="https://instagram.com/freeprojects1/" target="_blank"><i className="bi bi-instagram"></i></Link>
                            <Link href="https://twitter.com/bholu7972/" target="_blank"><i className="bi bi-twitter"></i></Link>
                            <Link href="https://github.com/bholu-singh/" target="_blank"><i className="bi bi-github"></i></Link>
                            <Link href="https://www.youtube.com/@freeprojects1?sub_confirmation=1" target="_blank"><i className="bi bi-youtube"></i></Link>
                        </div>
                        <p>
                            <span>Status</span> <span>{data.status}</span>
                        </p>
                        {/* <SpokenLang page={"movie_now-playing_" + page} /> */}
                        <p>
                            <span>Original Language</span> <span>{original_language}</span>
                        </p>
                        <p>
                            <span>Budget</span> <span>{data.budget}</span>
                        </p>
                        <p>
                            <span>Revenue</span> <span>{data.revenue}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieDetails;