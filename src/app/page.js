const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

const page = async () => {
  const data = await getServerSideProps();
  console.log("Data is : " + data);

  return (
    <div className="container">
      <h1>This is a demo page</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
