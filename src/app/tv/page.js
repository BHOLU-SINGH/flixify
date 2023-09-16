import Image from "next/image";
import Header from "../Components/Header";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Link from "next/link";

const getTvData = async () => {
  let data = await fetch("http://localhost:3000/api/tv/");
  let response = await data.json();
  return response.result;
};

export default async function RedirectTvPage(props) {
  const res = await getTvData();

  return (
    <main className="container">
      <Header />
      <div className="content center">
        <div className="cardBox">
          {res.results.map((item) => (
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
                  <Button id={item.id} page="tv" />
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
