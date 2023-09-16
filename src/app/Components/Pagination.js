import PageCount from "./PageCount";

const getPage = async () => {
  let data = await fetch("http://localhost:3000/api/movie/now-playing/");
  let response = await data.json();
  return response.result;
};

export default async function Pagination(props) {
  const page = props.page;
  const res = await getPage();
  const startPagination = parseInt(page);
  let data = [];
  for (let i = startPagination + 1; i < startPagination + 1 + 4; i++) {
    if (i < 74) {
      data.push(i);
    }
  }

  if (startPagination > 1) {
    return (
      <div className="pagination">
        <ul className="center">
          <li>
            <PageCount page={res.page} value={res.page} />
          </li>
          <li className="active">
            <PageCount page={startPagination} value={startPagination} />
          </li>
          {data.map((page) => (
            <>
              <li>
                <PageCount page={page} value={page} />
              </li>
            </>
          ))}
          <li>
            <PageCount page="..." value="..." />
          </li>
          <li>
            <PageCount page={res.total_pages} value={res.total_pages} />
          </li>
          <li>
            <PageCount page={startPagination + 1}  value="Next" />
          </li>
        </ul>
      </div>
    );
  } else if (startPagination == 1) {
    return (
      <div className="pagination">
        <ul className="center">
          <li className="active">
            <PageCount page={startPagination} value={startPagination} />
          </li>
          <li>
            <PageCount page={startPagination + 1} value={startPagination + 1} />
          </li>
          <li>
            <PageCount page={startPagination + 2} value={startPagination + 2} />
          </li>
          <li>
            <PageCount page={startPagination + 3} value={startPagination + 3} />
          </li>
          <li>
            <PageCount page={startPagination + 4} value={startPagination + 4} />
          </li>
          <li>
            <PageCount page="..." value="..." />
          </li>
          <li>
            <PageCount page={res.total_pages} value={res.total_pages} />
          </li>
          <li>
            <PageCount page={startPagination + 1} value="Next" />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="pagination">
        <ul className="center">
          <li className="active">
            <PageCount page="1" value="1" />
          </li>
          <li>
            <PageCount page="2" value="2" />
          </li>
          <li>
            <PageCount page="3" value="3" />
          </li>
          <li>
            <PageCount page="4" value="4" />
          </li>
          <li>
            <PageCount page="5" value="5" />
          </li>
          <li>
            <PageCount page="..." value="..." />
          </li>
          <li>
            <PageCount page={res.total_pages} value={res.total_pages} />
          </li>
          <li>
            <PageCount page={startPagination + 1} value="Next" />
          </li>
        </ul>
      </div>
    );
  }
}
