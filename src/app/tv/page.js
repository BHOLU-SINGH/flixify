import Header from "@/app/Components/Header";
import TvCard from "@/app/Components/TvCard";
import Pagination from "../Components/Pagination";
import Footer from "@/app/Components/Footer";

const { API_URL, API_KEY } = process.env;

async function getServerSideProps() {
    const API = API_URL + "trending/tv/day?language=en-US&api_key=" + API_KEY;
    const response = await fetch(API);
    const data = await response.json();
    return data;
}

export default async function page() {
    const data = await getServerSideProps();
    return (
        <div className="container">
            <Header />
            <TvCard data={data} page="tv" />
            <Pagination start_page={data.page} end_page={data.total_pages} page="tv/page" />
            <Footer />
        </div>
    );
}