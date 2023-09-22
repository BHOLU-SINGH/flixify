import Image from "next/image";

const TvNetworksList = ({ data }) => {
    return (
        <p>
            <span>Network</span>
            {data.map((item) => (
                <>
                    <span style={{ marginTop: "2px" }}>
                        <Image
                            src={
                                "https://image.tmdb.org/t/p/w500" + item.logo_path
                            }
                            width={100}
                            height={30}
                            alt={item.name}
                        />
                    </span>
                </>
            ))}
        </p>
    );
}
export default TvNetworksList;