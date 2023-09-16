/* eslint-disable @next/next/no-img-element */
import Header from "@/app/Components/Header";
import Link from "next/link";
import Footer from "@/app/Components/Footer";
import TvGenres from "@/app/Components/TvGenres";
import SpokenLang from "@/app/Components/SpokenLang";
import ProductionCom from "@/app/Components/ProductionCom";
import ProductionCountry from "@/app/Components/ProductionCountry";
import GetTvSeasons from "@/app/Components/GetTvSeasons";
import TvNetworksList from "@/app/Components/TvNetworksList";
import GetTvCreator from "@/app/Components/GetTvCreator";

const getTvData = async (props) => {
  let data = await fetch("http://localhost:3000/api/tv_popular_" + props);
  let response = await data.json();
  return response.result;
};

export default async function TvDetailPage(props) {
  let page = props.params.page;
  const res = await getTvData(page);

  // Get movie rating in starting two digits only
  let number = "" + res.vote_average;
  const vote_average = number.substring(0, 3);

  // Get item year
  const date = res.first_air_date;
  const parsedDate = new Date(date);
  const movieYear = parsedDate.toLocaleDateString("en-US", {
    year: "numeric",
  });

  const last_epi_date = res.last_episode_to_air.air_date;
  const last_parsedDate = new Date(last_epi_date);
  const last_epi_year = last_parsedDate.toLocaleDateString("en-US", {
    year: "numeric",
  });

  const convertDate = res.last_episode_to_air.air_date;
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
    if (res.next_episode_to_air) {
      console.log("Enter in function");
      return (
        <p>
          <span className="type">
            {"Episode " + res.last_episode_to_air.episode_type}
          </span>
          <span>
            <i className="bi bi-calendar3"></i>{" "}
            <Link href="#"> {res.next_episode_to_air.name}</Link> (
            {res.next_episode_to_air.season_number +
              "x" +
              res.next_episode_to_air.episode_number}
            ), {anotherDateFormat}
          </span>
        </p>
      );
    } else {
      console.log("Still next episode is not available!");
    }
  };
  console.log("Calling fot next episode: " + getNextEpisode());

  let homepageVal,
    homepageLink = "";
  if (res.homepage.length > 0) {
    homepageLink = res.homepage;
    homepageVal = res.homepage;
  } else {
    homepageLink = "#";
    homepageVal = "Not Available!";
  }

  // Convert original language in proper readable format
  let original_language = res.original_language;
  if (original_language == "en") {
    original_language = "English";
  }

  return (
    <main className="container">
      <Header />
      <div className="content">
        <div className="card-expand">
          <div className="bg_img">
            <img
              src={"https://image.tmdb.org/t/p/w500" + res.poster_path}
              alt={res.name}
            />
            <img
              src={"https://image.tmdb.org/t/p/w500" + res.backdrop_path}
              alt={res.name}
            />
          </div>
          <div className="card-data">
            <h1>
              {res.name} <span>({movieYear})</span>
            </h1>
            <TvGenres page={"tv_popular_" + page} />
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
                  {res.original_name}
                </p>
                <p>
                  <span className="fw-600">Overview: </span> {res.overview}
                </p>
                <GetTvCreator page={"tv_popular_" + page} />
                <SpokenLang page={"tv_popular_" + page} />
                <p>
                  <span className="fw-600">Home page: </span>
                  <span>
                    <i className="bi bi-link-45deg"></i>
                    <Link href={homepageLink} target="_blank">
                      {homepageVal}
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="series-data">
              <h2>Last episode - {res.last_episode_to_air.name}</h2>
              <div className="data">
                <div className="imgBx">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w500" +
                      res.last_episode_to_air.still_path
                    }
                    alt={res.last_episode_to_air.name}
                  />
                </div>
                <div className="card">
                  <h3>Season {res.last_episode_to_air.season_number}</h3>
                  <p className="flex">
                    <span className="rating flex">
                      {res.last_episode_to_air.vote_average + "⭐"}
                    </span>
                    {last_epi_year} <span className="dot">.</span>
                    {res.last_episode_to_air.episode_number} Episodes
                  </p>
                  <p>
                    <i className="bi bi-chevron-double-right"></i> Last episode
                    of {res.name} on {anotherDateFormat}.
                  </p>
                  <p>
                    <i className="bi bi-chevron-double-right"></i>
                    {" " + res.last_episode_to_air.overview}
                  </p>
                  <p>
                    <span className="type">
                      {"Episode " + res.last_episode_to_air.episode_type}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="series-data w-100">
              <h2>
                Seasons: {res.number_of_seasons} & Episodes:
                {" " + res.number_of_episodes}
              </h2>
              <GetTvSeasons page={"tv_popular_" + page} />
            </div>
          </div>
          <div className="other-composite">
            <div className="production">
              <ProductionCom page={"tv_popular_"+page} />
              <ProductionCountry page={"tv_popular_"+page} />
            </div>
            <div className="sidebar">
              <div className="icons">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-github"></i>
                <i className="bi bi-youtube"></i>
              </div>
              <p>
                <span>Status</span> <span>{res.status}</span>
              </p>
              <TvNetworksList page={"tv_popular_" + page} />
              <p>
                <span>Type</span> <span>{res.type}</span>
              </p>
              <p>
                <span>Original Language</span> <span>{original_language}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}