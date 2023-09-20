import Header from "@/app/components/Header";
import MovieCard from "@/app/components/MovieCard";
import Footer from "@/app/components/Footer";

const { API_URL, API_KEY } = process.env;

async function getServerSideProps() {
    const API = API_URL + "movie/now_playing?api_key=" + API_KEY;
    const response = await fetch(API);
    const data = await response.json();
    return data;
}

export default async function page() {
    const data = await getServerSideProps();
    return (
        <div className="container">
            <Header />
            <MovieCard data={data} page="movie/now-playing" />
            <Footer />
        </div>
    );
}