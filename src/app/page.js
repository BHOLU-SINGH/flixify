import Image from "next/image";
import Header from "./Components/Header";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Link from "next/link";

const getMoviesList = async () => {
  let data = await fetch("http://localhost:3000/api/movie/");
  let response = await data.json();
  return response.result;
};

async function Page() {
  const res = await getMoviesList();

  return (
    <main className="container">
      <Header />
      <div className="content center">
        <div className="searchBox">lorem500</div>
        <div className="cardBox">
          {res.results.map((movie) => (
            <>
              <div className="card">
                <Image
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
                  {/* <Link href="/movie" id={movie.id}> View More </Link> */}
                </span>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="pagination">
        <ul className="center">
          <li className="active">
            <Link href="1">{res.page}</Link>
          </li>
          <li>
            <Link href="2">2</Link>
          </li>
          <li>
            <Link href="3">3</Link>
          </li>
          <li>
            <Link href="4">4</Link>
          </li>
          <li>
            <Link href="5">5</Link>
          </li>
          <li>
            <Link href="6">6</Link>
          </li>
          <li>
            <Link href="#">...</Link>
          </li>
          <li>
            <Link href="74">{res.total_pages}</Link>
          </li>
          <li>
            <Link href="2">next</Link>
          </li>
        </ul>
      </div>
      <Footer />
    </main>
  );
}

export default Page();