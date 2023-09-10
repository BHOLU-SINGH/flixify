import Image from "next/image";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Link from "next/link";

const getMoviesList = async () => {
  let data = await fetch("http://localhost:3000/api/movie/");
  let response = await data.json();
  return response.result;
};

export default async function Page() {
  const res = await getMoviesList();

  return (
    <main className="container">
      <Header />
       <h1>Home page by FreeProjects1</h1>
      <Footer />
    </main>
  );
}
