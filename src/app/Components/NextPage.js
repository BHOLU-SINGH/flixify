/* eslint-disable @next/next/no-img-element */
import Header from "../Components/Header";
import Button from "../Components/Button";
import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";

const getMovieData = async (props) => {
  let data = await fetch(
    "http://localhost:3000/api/" + props
  );
  let response = await data.json();
  return response.result;
};

export default async function NextPage(props) {
  const page = props.page;
  const res = await getMovieData(page);

  return (
    <main className="container">
      <Header />
      <div className="content center">
        <div className="cardBox">
          {res.results.map((movie) => (
            <>
              <div className="card">
                <img
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                  alt="{movie.title}"
                  width={200}
                  height={50}
                  priority
                />
                <span className="title">{movie.title}</span>
                <div>
                  <span>{movie.release_date}</span>
                  <span className="popularity">{movie.vote_average}⭐</span>
                </div>
                <span className="overview">
                  <small className="ow-title">Title: {movie.title}</small>
                  <small className="ow-rel-date">
                    Release Date: {movie.release_date}
                  </small>
                  <small className="overw">OverView: {movie.overview}</small>
                  <Button id={movie.id} page="movie" />
                </span>
              </div>
            </>
          ))}
        </div>
      </div>
      <Pagination page={page} />
      <Footer />
    </main>
  );
}
