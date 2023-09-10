import Image from "next/image";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Link from "next/link";


export default async function Page() {

  return (
    <main className="container">
      <Header />
       <h1>Home page by FreeProjects1</h1>
      <Footer />
    </main>
  );
}
