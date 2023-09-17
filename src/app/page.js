import Image from "next/image";
import Header from "./Components/Header";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Link from "next/link";
const apiKey = process.env.API_KEY;


export default async function page() {
  return (
    <main className="container">
      <Header />
      <div className="content center">
	<p>APi key is : {apiKey}</p>
      </div>
      <Footer />
    </main>
  );
}