const GetTvCreator = ({ data }) => {
    return (
        <p>
            <span className="fw-600">Creator: </span>
            {data.map((item) => (
                <>{item.name + ", "}</>
            ))}
        </p>
    );
}
export default GetTvCreator;