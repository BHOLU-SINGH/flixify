/* eslint-disable @next/next/no-img-element */
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Link from "next/link";

const getData = async () => {
  // const data = await fetch(
  //   "https://api.themoviedb.org/3/movie/346698/images?api_key=04bb17c0897894ac573e81dad9bd0d64"
  // );
  const data = await fetch("https://api.themoviedb.org/3/movie/346698/videos?api_key=04bb17c0897894ac573e81dad9bd0d64");
  const result = await data.json();
  return result;
};

export default async function Home() {
  const res = await getData();
  return (
    <main className="container">
      <Header />
      <h1>This is home page</h1>
      {/* {res.backdrops.map((item) => ( */}
      {res.results.map((item) => 
        <>
          {/* <img
            src={`https://image.tmdb.org/t/p/w500${item.file_path}`}
            alt="image loading error"
          /> */}
          {/* <iframe src="https://www.youtube.com/watch?v=/{$key}" width="300" height="300"></iframe> */}
          {/* https://www.youtube.com/watch?v=uQCM613pqY4 */}
          <Link href={"https://www.youtube.com/watch?v=" + item.key} target="_blank">{item.name}</Link> <br />
        </>
      )}
      <Footer />
    </main>
  );
}
