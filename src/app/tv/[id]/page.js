import TvDetails from "@/app/Components/TvDetails";

const { API_URL, API_KEY } = process.env;

async function getServerSideProps(props) {
    const API = API_URL + "tv/"+ props +"?api_key=" + API_KEY;
    const response = await fetch(API);
    const data = await response.json();
    return data;
}


const page = async (props) => {
    const id = props.params.id;
    const data = await getServerSideProps(id);


    return (
        <div className="container">
            <TvDetails data={data} />
        </div>
    )
}



export default page;