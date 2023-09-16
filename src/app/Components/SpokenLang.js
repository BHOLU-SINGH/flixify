const getSpokenLang = async (props) => {
  let data = await fetch("http://localhost:3000/api/" + props);
  let response = await data.json();
  return response.result;
};

export default async function SpokenLang(props) {
  const page = props.page;
  let query = page;
  query = query.replaceAll("/", "_");
  query = query.replaceAll(",", "_");
  const res = await getSpokenLang(query);

  const langLength = (res.spoken_languages).length;
  let language = [];
  for (let i = 0; i < langLength; i++) {
    language.push(
      res.spoken_languages[i].name +
        "(" +
        res.spoken_languages[i].english_name +
        ")" +
        ", "
    );
  }

  return (
    <p>
      <span className="fw-600">Audio: </span> {language}
    </p>
  );
}
