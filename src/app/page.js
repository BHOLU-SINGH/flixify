import Image from "next/image";
import Header from "./Components/Header";
import Button from "./Components/Button";
import Footer from "./Components/Footer";


export default async function Page() {
  const res = await getMoviesList();

  return (
    <main className="container">
      <Header />
      <div className="content center">
        <div className="searchBox">lorem500</div>
        <div className="cardBox">

              <div className="card">
                <Image
                  src="flixify.png"
                  alt="image loading error"
                  width={200}
                  height={50}
                  priority
                />
                <span className="title">The Godfather</span>
                <div>
                  <span>{movie.release_date}</span>
                  <span className="popularity">9.1⭐</span>
                </div>
                <span className="overview">
                  <small className="ow-title">Title: The Godfather</small>
                  <small className="ow-rel-date">
                    Release Date: 01/01/2001
                  </small>
                  <small className="overw">OverView: This is a movie</small>
                  <Button id=""123456" page="movie" />
                </span>
              </div>
        </div>
      </div>
      <div className="pagination">
        <ul className="center">
          <li className="active">
            <Link href="1">1</Link>
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
            <Link href="74">74</Link>
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
