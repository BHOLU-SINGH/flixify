import MovieCard from "@/app/Components/MovieCard";

const { API_URL, API_KEY } = process.env;

async function getServerSideProps(pageNo) {
    const API = API_URL + "movie/upcoming?api_key=" + API_KEY + "&page=" + pageNo;
    const response = await fetch(API);
    const data = await response.json();
    return data;
}


const page = async (props) => {
    const pageNo = props.params.pageNo;
    const data = await getServerSideProps(pageNo);

    return (
        <div className="container">
            <MovieCard data={data} page={"movie/upcoming/page/" + pageNo} />
        </div>
    );
}

export default page;