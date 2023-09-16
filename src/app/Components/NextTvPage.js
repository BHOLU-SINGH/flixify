/* eslint-disable @next/next/no-img-element */
import Header from "../Components/Header";
import Button from "../Components/Button";
import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";

const getMovieData = async () => {
  let data = await fetch("http://localhost:3000/api/tv/airing-today/");
  let response = await data.json();
  return response.result;
};

export default async function NextTvPage() {
  const res = await getMovieData();

  return (
    <main className="container">
      <Header />
      <div className="content center">
        <div className="cardBox">
          {res.results.map((item) => (
            <>
              <div className="card">
                <img
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
                  <Button id={item.id} page="tv" />
                </span>
              </div>
            </>
          ))}
        </div>
      </div>
      <Pagination />
      <Footer />
    </main>
  );
}