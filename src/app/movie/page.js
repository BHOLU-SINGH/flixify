import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";

export default async function page() {
  return (
    <div className="container">
      <Header />
      <MovieCard API_PAGE="movie/now_playing" page="movie" />
      <Footer />
    </div>
  );  
}