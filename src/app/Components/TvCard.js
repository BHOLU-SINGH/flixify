import Image from "next/image";
import Button from "./Button";

const genres = [
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 37,
        "name": "Western"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 10759,
        "name": "Action & Adventure"
    },
    {
        "id": 10762,
        "name": "Kids"
    },
    {
        "id": 10763,
        "name": "News"
    },
    {
        "id": 10764,
        "name": "Reality"
    },
    {
        "id": 10765,
        "name": "Sci-Fi & Fantasy"
    },
    {
        "id": 10766,
        "name": "Soap"
    },
    {
        "id": 10767,
        "name": "Talk"
    },
    {
        "id": 10768,
        "name": "War & Politics"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    }
]

function getGenreNamesByIds(genreIds) {
    const genreNames = [];
    for (const genreId of genreIds) {
        const genre = genres.find((genre) => genre.id === genreId);
        if (genre) {
            genreNames.push(genre.name);
        } else {
            genreNames.push('Unknown');
        }
    }
    return genreNames;
}

const TvCard = ({ data, page }) => {
    return (
        <div className="content center">
            <div className="cardBox">
                {data.results.map((item) => (
                    <>
                        <div className="card" key={item.id}>
                            <Image
                                src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                                alt="{item.name}"
                                width={200}
                                height={50}
                                priority
                            />
                            <span className="title">{item.name}</span>
                            <div>
                                <span>{item.first_air_date}</span>
                                <span className="popularity">{item.vote_average}⭐</span>
                            </div>
                            <span className="overview">
                                <small className="ow-title">Title: {item.name}</small>
                                <small className="ow-rel-date">
                                    Release Date: {item.first_air_date}
                                </small>
                                <small className="genres">
                                    {
                                        getGenreNamesByIds(item.genre_ids).map((genres_item) => (
                                            <small key={item.id}>{genres_item}</small>
                                        ))
                                    }
                                </small>
                                <small className="overw">OverView: {item.overview}</small>
                                <Button id={item.id} page={page} />
                            </span>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default TvCard;