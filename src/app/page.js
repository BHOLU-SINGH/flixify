import Image from "next/image";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Link from "next/link";


export default function Page() {

  return (
    <main className="container">
      <Header />
      <div className="content center">
        <div className="cardBox">

              <div className="card">
                <Image
                  src="flixify.png"
                  alt="image loading error"
                  width={200}
                  height={50}
                  priority
                />
                <span className="title">The Godfather</span>
                <div>
                  <span>01/01/2001</span>
                  <span className="popularity">9.1⭐</span>
                </div>
                <span className="overview">
                  <small className="ow-title">Title: The Godfather</small>
                  <small className="ow-rel-date">
                    Release Date: 01/01/2001
                  </small>
                  <small className="overw">OverView: This is a movie</small>
		  <Link href="#">Read More </Link>
                </span>
              </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
