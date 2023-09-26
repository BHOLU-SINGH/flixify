import Header from "../Components/Header";
import MovieCard from "../Components/MovieCard";
import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";

const { API_URL, API_KEY } = process.env;

async function getServerSideProps() {
    const API = API_URL + "search/multi?query=barbie&include_adult=false&language=en-US&api_key=" + API_KEY + "&page=1";
    const response = await fetch(API);
    const data = await response.json();
    return data;
}

const Page = async () => {
    const data = await getServerSideProps();

    return (
        <div className="container">
            <Header />
            <MovieCard data={data} page="movie/now-playing" />
            <Pagination start_page={data.page} end_page={data.total_pages} page="search/page" />
            <Footer />
        </div>
    );
}
export default Page;