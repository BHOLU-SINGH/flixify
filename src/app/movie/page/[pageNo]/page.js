import Header from "@/app/Components/Header";
import MovieCard from "@/app/Components/MovieCard";
import Pagination from "@/app/Components/Pagination";
import Footer from "@/app/Components/Footer";

const { API_URL, API_KEY } = process.env;

async function getServerSideProps(pageNo) {
  const API = API_URL + "trending/movie/day?language=en-US&api_key=" + API_KEY + "&page=" + pageNo;
  const response = await fetch(API);
  const data = await response.json();
  return data;
}

export default async function page(props) {
    const pageNo = props.params.pageNo;
  const data = await getServerSideProps(pageNo);
  return (
    <div className="container">
      <Header />
      <MovieCard data={data} page="movie" />
      <Pagination start_page={data.page} end_page={data.total_pages} page="movie/page" />
      <Footer />
    </div>
  );
}