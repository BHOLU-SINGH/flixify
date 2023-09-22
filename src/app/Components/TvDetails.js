import Image from "next/image";
import Link from "next/link";
import TvGenres from "./TvGenres";
import SpokenLang from "./SpokenLang";
import ProductionCom from "./ProductionCom";
import ProductionCountry from "./ProductionCountry";
import GetTvCreator from "./GetTvCreator";
import GetTvSeasons from "./GetTvSeasons";
import TvNetworksList from "./TvNetworksList";

const TvDetails = ({ data }) => {

    // Get movie rating in starting two digits only
    let number = "" + data.vote_average;
    const vote_average = number.substring(0, 3);

    // Get item year
    const date = data.first_air_date;
    const parsedDate = new Date(date);
    const movieYear = parsedDate.toLocaleDateString("en-US", {
        year: "numeric",
    });

    const last_epi_date = data.last_episode_to_air.air_date;
    const last_parsedDate = new Date(last_epi_date);
    const last_epi_year = last_parsedDate.toLocaleDateString("en-US", {
        year: "numeric",
    });

    const convertDate = data.last_episode_to_air.air_date;
    const parsedConvertDate = new Date(convertDate);
    const newDateFormat = parsedConvertDate.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    let day = newDateFormat;
    day = day.substring(3, 5);

    let month = newDateFormat;
    month = month.substring(0, 2);
    const convertMonth = () => {
        if (month == 1) {
            month = "January";
        } else if (month == 2) {
            month = "February";
        } else if (month == 3) {
            month = "March";
        } else if (month == 4) {
            month = "April";
        } else if (month == 5) {
            month = "May";
        } else if (month == 6) {
            month = "June";
        } else if (month == 7) {
            month = "July";
        } else if (month == 8) {
            month = "August";
        } else if (month == 9) {
            month = "September";
        } else if (month == 10) {
            month = "October";
        } else if (month == 11) {
            month = "November";
        } else if (month == 12) {
            month = "December";
        }
    };
    convertMonth();

    const anotherDateFormat = `${month} ${day}, ${last_epi_year}`;

    const getNextEpisode = () => {
        if (data.next_episode_to_air) {
            console.log("Enter in function")
            return (
                <p>
                    <span className="type">{"Episode " + data.last_episode_to_air.episode_type}</span>
                    <span><i className="bi bi-calendar3"></i> <Link href="#"> {data.next_episode_to_air.name}</Link> ({data.next_episode_to_air.season_number + "x" + data.next_episode_to_air.episode_number}), {anotherDateFormat}</span>
                </p>
            );
        } else {
            console.log("Still next episode is not available!");
        }
    };
    console.log("Calling fot next episode: " + getNextEpisode());

    let homepageVal,
        homepageLink = "";
    if (data.homepage.length > 0) {
        homepageLink = data.homepage;
        homepageVal = data.homepage;
    } else {
        homepageLink = "#";
        homepageVal = "Not Available!";
    }

    // Convert original language in proper readable format
    let original_language = data.original_language;
    if (original_language == "en") {
        original_language = "English";
    }

    return (
        <main className="container">
            <div className="content">
                <div className="card-expand">
                    <div className="bg_img">
                        <Image
                            src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
                            quality={100}
                            alt={data.name}
                            width={50}
                            height={50}
                        />
                        <Image
                            src={"https://image.tmdb.org/t/p/w500" + data.backdrop_path}
                            alt={data.name}
                            width={150}
                            height={50}
                        />
                    </div>
                    <div className="card-data">
                        <h1>
                            {data.name} <span>({movieYear})</span>
                        </h1>
                        <TvGenres data={data.genres} date_data={data.first_air_date} />
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
                                    <span className="fw-600">Original title: </span>
                                    {data.original_name}
                                </p>
                                <p>
                                    <span className="fw-600">Overview: </span> {data.overview}
                                </p>
                                <GetTvCreator data={data.created_by} />
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
                    <div className="section">
                        <div className="series-data">
                            <h2>Last episode - {data.last_episode_to_air.name}</h2>
                            <div className="data">
                                <div className="imgBx">
                                    <Image
                                        src={
                                            "https://image.tmdb.org/t/p/w500" +
                                            data.last_episode_to_air.still_path
                                        }
                                        alt={data.last_episode_to_air.name}
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <div className="card">
                                    <h3>Season {data.last_episode_to_air.season_number}</h3>
                                    <p className="flex">
                                        <span className="rating flex">
                                            {data.last_episode_to_air.vote_average + "⭐"}
                                        </span>
                                        {last_epi_year} <span className="dot">.</span>
                                        {data.last_episode_to_air.episode_number} Episodes
                                    </p>
                                    <p>
                                        <i className="bi bi-chevron-double-right"></i> Last episode
                                        of {data.name} on {anotherDateFormat}.
                                    </p>
                                    <p>
                                        <i className="bi bi-chevron-double-right"></i>
                                        {" " + data.last_episode_to_air.overview}
                                    </p>
                                    <p><span className="type">{"Episode " + data.last_episode_to_air.episode_type}</span></p>
                                    {/* <p>
                    <span className="type">{"Episode " + data.last_episode_to_air.episode_type}</span> <span><i className="bi bi-calendar3"></i> <Link href="#"> {data.next_episode_to_air.name}</Link> ({data.next_episode_to_air.season_number + "x" +data.next_episode_to_air.episode_number}), {anotherDateFormat}</span>
                  </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="series-data w-100">
                            <h2>
                                Seasons: {data.number_of_seasons} & Episodes:
                                {" " + data.number_of_episodes}
                            </h2>
                            <GetTvSeasons data={data.seasons} />
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
                            {/* <SpokenLang page={page} /> */}
                            <TvNetworksList data={data.networks} />
                            <p>
                                <span>Type</span> <span>{data.type}</span>
                            </p>
                            <p>
                                <span>Original Language</span> <span>{original_language}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default TvDetails;