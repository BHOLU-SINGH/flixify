import Link from "next/link";
import Image from "next/image";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const page = () => {
    return (
        <div className="container fd-column">
            <Header />
            <div className="content color-white-c how_to_use">
                <h1>How to Use Our Website</h1>
                <ul>
                    <li>First of all, you have to visit our website: <Link className='color-white-c' href='https://flixify1.vercel.app' target='_blank'>https://flixify1.vercel.app</Link></li>
                    <li>Now, you have to click or move your cursor on the movie you want to know more about.</li>
                    <li>And scroll down until you see a button called &#39;Read More&#39;</li>
                    <li>Once you have watched it, now just click it to get details about that movie.</li>
                </ul>
                <div className="demo center">
                    <div>
                        <h2>Before Click</h2>
                        <Image src="/demo1.png"
                            alt="demo img file loading error"
                            width={210}
                            height={200}
                        />
                    </div>
                    <div>
                        <h2>After Click</h2>
                        <Image src="/demo2.png"
                            alt="demo img file loading error"
                            width={210}
                            height={200}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default page;