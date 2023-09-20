import Header from "@/app/Components/Header";
import MovieCard from "@/app/Components/MovieCard";
import Footer from "@/app/Components/Footer";

const { API_URL, API_KEY } = process.env;

async function getServerSideProps() {
    const API = API_URL + "movie/popular?api_key=" + API_KEY;
    const response = await fetch(API);
    const data = await response.json();
    return data;
}

export default async function page() {
    const data = await getServerSideProps();
    return (
        <div className="container">
            <Header />
            <MovieCard data={data} page="movie/popular" />
            <Footer />
        </div>
    );
}