import Header from "@/app/Components/Header";
import TvCard from "@/app/Components/TvCard";
import Pagination from "@/app/Components/Pagination";
import Footer from "@/app/Components/Footer";

const { API_URL, API_KEY } = process.env;

async function getServerSideProps(pageNo) {
    const API = API_URL + "tv/on_the_air?api_key=" + API_KEY + "&page=" + pageNo;
    const response = await fetch(API);
    const data = await response.json();
    return data;
}


const page = async (props) => {
    const pageNo = props.params.pageNo;
    const data = await getServerSideProps(pageNo);

    return (
        <div className="container">
            <Header />
            <TvCard data={data} page="tv/on-the-air" />
            <Pagination start_page={data.page} end_page={data.total_pages} page="tv/on-the-air/page" />
            <Footer />
        </div>
    );
}

export default page;