import Image from "next/image";
import Header from "../Components/Header";
import Button from "../Components/Button";
import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";

const getData = async (props) => {
  let response = await fetch("http://localhost:3000/api/" + props);
  let data = await response.json();
  return data.result;
};

export default async function RedirectNextPage(props) {
  const page = props.page;
  let query = page;
  query = query.replaceAll("/", "_");
  query = query.replaceAll(",", "_")
  const res = await getData(query);

  return (
    <main className="container">
      <Header />
      <div className="content center">
        <div className="cardBox">
          {res.results.map((item) => (
            <>
              <div className="card" key={item.id}>
                <Image
                  src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                  alt="{item.title}"
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
                  <Button id={item.id} page={page} />
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
