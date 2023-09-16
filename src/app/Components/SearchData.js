import Footer from "./Footer";
import Header from "./Header";

export default function SearchData(props){
    console.log(props.searchItem)
    return(
        <main className="container">
        <Header />
        <div className="content center">
            <div className="cardBox">
                <h1>This page is under working...</h1>
            </div>
        </div>    
        <Footer />
        </main>
    )
}