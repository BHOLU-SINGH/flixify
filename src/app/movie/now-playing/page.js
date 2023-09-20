import Header from "@/app/components/Header";
import MovieCard from "@/app/components/MovieCard";
import Footer from "@/app/components/Footer";

export default async function page() {
    return (
        <div className="container">
            <Header />
            <MovieCard API_PAGE="movie/now_playing" page="movie/now-playing" />
            <Footer />
        </div>
    );
}