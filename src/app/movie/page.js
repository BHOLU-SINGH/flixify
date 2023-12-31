import Header from "../Components/Header";
import MovieCard from "../Components/MovieCard";
import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";

const { API_URL, API_KEY } = process.env;

async function getServerSideProps() {
  const API = API_URL + "trending/movie/day?language=en-US&api_key=" + API_KEY;
  const response = await fetch(API);
  const data = await response.json();
  return data;
}

export default async function page() {
  const data = await getServerSideProps();
  return (
    <div className="container">
      <Header />
      <MovieCard data={data} page="movie" />
      <Pagination start_page={data.page} end_page={data.total_pages} page="movie/page" />
      <Footer />
    </div>
  );
}