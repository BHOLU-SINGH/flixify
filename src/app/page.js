import Image from "next/image";
import Header from "./Components/Header";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Link from "next/link";
const API_KEY = process.env.API_KEY;

const getServerSideProps = async () => {
  let response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=API_KEY");	
  const data = await response.json();
  return data.result;
};

export default async function page() {
  const res = await getServerSideProps();
  return (
    <main className="container">
      <Header />
      <div className="content center">
        {/* <div className="searchBox">lorem500</div> */}
        <div className="cardBox">
          {res.results.map((item) => (
            <div className="card" key={item.id}>
              <Image
                src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                alt={item.title}
                width={200}
                height={50}
                priority
              />
              <span className="title">{item.title}</span>
              <div>
                <span>{item.release_date}</span>
                <span className="popularity">{item.vote_average}⭐</span>
              </div>
              <span className="overview">
                <small className="ow-title">Title: {item.title}</small>
                <small className="ow-rel-date">
                  Release Date: {item.release_date}
                </small>
                <small className="overw">OverView: {item.overview}</small>
                <Button id={item.id} page="movie" />
              </span>
            </div>
          ))}
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