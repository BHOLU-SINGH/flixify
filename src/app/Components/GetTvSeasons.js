import Image from "next/image";

const GetTvSeasons = ({ data }) => {
    return (
        <div className="data column">
            {data.slice().reverse().map((item) => (
                <>
                    <div className="card center">
                        <div className="imgBx">
                            <Image
                                src={
                                    "https://image.tmdb.org/t/p/w500" +
                                    item.poster_path
                                }
                                alt={item.name}
                                width={100}
                                height={100}
                            />
                        </div>
                        <h3>{item.name}</h3>
                        <p>Episode {item.episode_count}</p>
                        <p className="rating">{item.vote_average}⭐</p>
                    </div>
                </>
            ))}
        </div>
    );
}
export default GetTvSeasons;