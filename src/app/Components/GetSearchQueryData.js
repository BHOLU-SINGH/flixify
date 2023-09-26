import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const { API_URL, API_KEY } = process.env;

async function getServerSideProps(props) {
    const API = API_URL + "search/multi?query=" + props + "&include_adult=false&language=en-US&api_key=" + API_KEY + "&page=1";
    const response = await fetch(API);
    const data = await response.json();
    return data;
}

const GetSearchQueryData = async ({ query, page }) => {
    const data = await getServerSideProps(query);
    return (
        <div className="search_query_data">
            <div className="cardBox">
                <Link href="#" className="view_all_link">View all pages</Link>
                {data.results.map((item) => (
                    <div className="card" key={item.id}>
                        <Image
                            src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                            alt={item.title}
                            width={200}
                            height={50}
                            priority
                        />
                        <div className="card-data">
                            <span className="title">{item.title}</span>
                            <div>
                                <span className="date">{item.release_date}</span>
                                <span className="popularity">{item.vote_average}⭐</span>
                            </div>
                            <span className="overview fd-column">
                                <small className="ow-title">Title: {item.title}</small>
                                <small className="overw">OverView: {item.overview}</small>
                                <Button id={item.id} page={page} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default GetSearchQueryData;