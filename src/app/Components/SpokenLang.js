const SpokenLang = (props) => {
    const data = props.data;

    const langLength = data.length;
    let language = [];
    for (let i = 0; i < langLength; i++) {
        language.push(
            data[i].name +
            "(" +
            data[i].english_name +
            ")" +
            ", "
        );
    }

    return (
        <p>
            <span className="fw-600">Audio: </span> {language}
        </p>
    )
}
export default SpokenLang;