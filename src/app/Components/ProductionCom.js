import Image from "next/image";
const ProductionCom = (props) => {
    const data = props.data;

    const comLength = data.length;
    let company = [];
    for (let i = 0; i < comLength; i++) {
        company.push(
            <p>
                <span className="imgBx">
                    <Image
                        src={
                            "https://image.tmdb.org/t/p/w500" +
                            data[i].logo_path
                        }
                        alt={data[i].name}
                        width={100}
                        height={100}
                    /></span>
                <span>Name: {data[i].name}</span>
                <span>Origin: {data[i].origin_country}</span>
            </p>
        );
    }

    return (
        <div className="production_com">
            <h3>Production Company</h3>
            <div className="pro_com_list flex">{company}</div>
        </div>
    );
}
export default ProductionCom;