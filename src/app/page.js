import Image from "next/image";
import Header from "./Components/Header";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Link from "next/link";
import apiKey = process.env.API_Key;


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