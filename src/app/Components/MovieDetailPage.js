/* eslint-disable @next/next/no-img-element */
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import Link from "next/link";
import MovieGenres from "@/app/Components/MovieGenres";
import SpokenLang from "./SpokenLang";
import ProductionCom from "./ProductionCom";
import ProductionCountry from "./ProductionCountry";

const getMovieData = async (props) => {
  let data = await fetch("http://localhost:3000/api/" + props);
  let response = await data.json();
  return response.result;
};

export default async function MovieDetailPage(props) {
  // const movieId = props.id;
  const page = props.page;
  const res = await getMovieData(page);

  // Get movie rating in starting two digits only
  let number = "" + res.vote_average;
  const vote_average = number.substring(0, 3);

  // Convert original language in proper readable format
  let original_language = res.original_language;
  if (original_language == "en") {
    original_language = "English";
  }

  //Convert revenue in proper readable format
  // let revenue = res.revenue;
  // let result = "";
  // if(revenue.length >= 3){
  //   for(let i = 0; i >= revenue.length; i++){
  //     result = revenue[i]+revenue[i]+",";
  //     i += 2;
  //   }
  // }

  const date = res.release_date;
  const parsedDate = new Date(date);
  const movieYear = parsedDate.toLocaleDateString("en-US", {
    year: "numeric",
  });
  let homepageVal, homepageLink = "";
  if (res.homepage.length > 0) {
    homepageLink = res.homepage;
    homepageVal = res.homepage;
  } else {
    homepageLink = "#";
    homepageVal = "Not Available!";
  }

  return (
    <main className="container">
      <Header />
      <div className="content">
        <div className="card-expand">
          <div className="bg_img">
            <img
              src={"https://image.tmdb.org/t/p/w500" + res.poster_path}
              alt={res.title}
            />
            <img
              src={"https://image.tmdb.org/t/p/w500" + res.backdrop_path}
              alt={res.title}
            />
          </div>
          <div className="card-data">
            <h1>
              {res.title}
              <span>({movieYear})</span>
            </h1>
            <MovieGenres page={page} />
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
                  {res.original_title}
                </p>
                <p>
                  <span className="fw-600">Overview: </span> {res.overview}
                </p>
                <SpokenLang page={page} />
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
              <ProductionCom page={page} />
              <ProductionCountry page={page} /> 
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
              {/* <p>
                <span>Audio</span> <span>{res.spoken_languages[0].name}</span>
              </p> */}
              <SpokenLang page={page} />
              <p>
                <span>Original Language</span> <span>{original_language}</span>
              </p>
              <p>
                <span>Budget</span> <span>{res.budget}</span>
              </p>
              <p>
                <span>Revenue</span> <span>{res.revenue}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Search By ID: https://api.themoviedb.org/3/movie/667538?api_key=04bb17c0897894ac573e81dad9bd0d64

            Search URL: https://api.themoviedb.org/3/search/movie?query=elemental&api_key=04bb17c0897894ac573e81dad9bd0d64

            Discover URL: https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&year=2023&api_key=04bb17c0897894ac573e81dad9bd0d64 */}
    </main>
  );
}
