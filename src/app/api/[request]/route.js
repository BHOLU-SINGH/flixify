import { NextResponse } from "next/server";
const apiKey = process.env.API_KEY;

const getServerSideProps = async (rootApi, apiKEY ,pageAddress, pageNo) => {
  let response;
  if (pageNo > 0 || pageNo != 0) {
    response = await fetch(
      rootApi + pageAddress + "?api_key=" + apiKEY + "&page=" + pageNo
    );
  }
  if (pageNo == 0) {
    response = await fetch(rootApi + pageAddress + "?api_key=" + apiKEY);
  }
  const data = await response.json();
  return data;
};

export const GET = async (request, content) => {
  let path = content.params.request;
  path = path.split("_");
  const api = "https://api.themoviedb.org/3/";

  let newPath = ""+path;
  newPath = newPath.replaceAll(",", "/");
  newPath =  newPath.replaceAll("-", "_");
  let result;

  if(path[path.length - 2] === "page"){
    const pageNo = path[path.length - 1];
    let array = path;
    array.pop();
    array.pop();
    newPath = ""+array;
    newPath = newPath.replaceAll(",", "/");
    newPath =  newPath.replaceAll("-", "_");
    result = await getServerSideProps(api, apiKey ,newPath, pageNo);
    return NextResponse.json({ result, success: true });
  } else if (path.length == 1) {
    path === "movie"
      ? (newPath = "movie/now_playing")
      : (newPath = "tv/airing_today");
    result = await getServerSideProps(api, apiKey ,newPath, 0);
    return NextResponse.json({ result, success: true });
  } else if (path.length == 2) {
    result = await getServerSideProps(api, apiKey ,newPath, 0);
    return NextResponse.json({ result, success: true });
  } else if (path.length == 3) {
    newPath = path[0] + "/" + path[path.length - 1];
    result = await getServerSideProps(api, apiKey ,newPath, 0);
    return NextResponse.json({ result, success: true });
  } else {
    return NextResponse.json({
      result: "Something went wrong, Try again!",
      success: false,
    });
  }
};
