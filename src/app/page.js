import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Pagination from "./Components/Pagination";
// import GetSearchQueryData from "./Components/GetSearchQueryData";

const { API_URL, API_KEY } = process.env;

async function getServerSideProps() {
  const API = API_URL + "trending/all/week?language=en-US&api_key=" + API_KEY;
  const response = await fetch(API);
  const data = await response.json();
  return data;
}

export default async function page() {
  const data = await getServerSideProps();
  return (
    <div className="container">
      <Header />
      {/* <GetSearchQueryData query="barbie" page="movie/now-playing" /> */}
      <Card data={data} />
      <Pagination start_page={data.page} end_page={data.total_pages} page="page" />
      <Footer />
    </div>
  );
}