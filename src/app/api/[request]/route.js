// import { NextResponse } from "next/server";
// const { API_KEY } = process.env;

// export async function GET(request, content) {
//   const api = "https://api.themoviedb.org/3/";
//   let path = content.params.request;
//   let newPath;

//   const data = () => {
//     return (
//       newPath === "movie/now_playing" ||
//       newPath === "movie/popular" ||
//       newPath === "movie/top_rated" ||
//       newPath === "movie/upcoming" ||
//       newPath === "tv/airing_today" ||
//       newPath === "tv/on_the_air" ||
//       newPath === "tv/popular" ||
//       newPath === "tv/top_rated"
//     );
//   };

//   if (path[path.length - 2] === "page") {
//     if (path[0] === "movie" || path[0] === "tv") {
//       let pageNo = path[path.length - 1];
//       let rmPage = path;
//       rmPage.pop();
//       rmPage.pop();

//       newPath = "" + rmPage;
//       newPath = newPath.replaceAll(",", "/");
//       newPath = newPath.replaceAll("-", "_");

//       if (path.length == 1) {
//         console.log("length is : "+path.length)
//         newPath = path[0];
//         newPath === "movie"
//           ? (newPath = "movie/now_playing")
//           : (newPath = "tv/airing_today");
//       }

//       let data = await fetch(
//         api + newPath + "?api_key=" + API_KEY + "&page=" + pageNo
//       );
//       let result = await data.json();
//       return NextResponse.json({ result, success: true });
//     } else {
//       return NextResponse.json({
//         result: "Invalid API, Please try again!",
//         success: false,
//       });
//     }
//   }
//   if (path.length == 1) {
//     if (path[0] === "movie" || path[0] === "tv") {
//       path[0] === "movie"
//         ? (newPath = "movie/now_playing")
//         : (newPath = "tv/airing_today");
//       let data = await fetch(api + newPath + "?api_key=" + API_KEY);
//       let result = await data.json();
//       return NextResponse.json({ result, success: true });
//     }
//   } else if (path.length == 2) {
//     newPath = path[0] + "/" + path[1].replaceAll("-", "_");
//     if (data()) {
//       let data = await fetch(api + newPath + "?api_key=" + API_KEY);
//       let result = await data.json();
//       return NextResponse.json({ result, success: true });
//     } else {
//       const Id = content.params.request[1];
//       const data = await fetch(
//         api + path[0] + "/" + Id + "?api_key=" + API_KEY
//       );
//       const result = await data.json();
//       return NextResponse.json({ result, success: true });
//     }
//   } else if (path.length == 3) {
//     newPath = path[0] + "/" + path[1].replaceAll("-", "_");
//     const page = path[path.length - 1];
//     if (data()) {
//       const data = await fetch(
//         api + path[0] + "/" + page + "?api_key=" + API_KEY
//       );
//       const result = await data.json();
//       return NextResponse.json({ result, success: true });
//     }
//   } else {
//     return NextResponse.json({
//       result: "Invalid API, Please try again!",
//       success: false,
//     });
//   }

//   if (path[0] + "/" + path[1] + "/" === "s/" + path[1] + "/") {
//     // https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&year=2022&api_key=04bb17c0897894ac573e81dad9bd0d64

//     const searchItem =
//       "discover/" +
//       path[1] +
//       "?include_adult=false&include_video=false&language=en-US&page=1&year=";
//     const data = await fetch(
//       api + searchItem + path[2] + "&api_key=" + API_KEY
//     );
//     const result = await data.json();
//     return NextResponse.json({ result, success: true });
//   }
// }

// // for movie video clips
// // https://api.themoviedb.org/3/movie/346698/videos?api_key=04bb17c0897894ac573e81dad9bd0d64\

// //for movie image clips
// // https://api.themoviedb.org/3/movie/346698/images?api_key=04bb17c0897894ac573e81dad9bd0d64
// // https://image.tmdb.org/t/p/w500 + image_url

import { NextResponse } from "next/server";
const API_KEY = process.env.API_KEY;
const api = "https://api.themoviedb.org/3/";

const getServerSideProps = async (path, pageNo) => {
  let response;
  if (pageNo > 0 || pageNo != 0) {
    response = await fetch(
      api + path + "?api_key=" + API_KEY + "&page=" + pageNo
    );
  }
  if (pageNo == 0) {
    response = await fetch(api + path + "?api_key=" + API_KEY);
  }
  const data = await response.json();
  return data;
};

export const GET = async (request, content) => {
  let path = content.params.request;
  path = path.replaceAll("_", "/");
  path = path.replaceAll("-", "_");

  let array = path.split("/");

  let result;
  if (array[array.length - 2] === "page") {
    path = array[0] + "/" + array[1];
    const pageNo = array[array.length - 1];
    result = await getServerSideProps(path, pageNo);
    return NextResponse.json({ result, success: true });
  } else if (array.length == 1) {
    path === "movie"
      ? (path = "movie/now_playing")
      : (path = "tv/airing_today");
    result = await getServerSideProps(path, 0);
    return NextResponse.json({ result, success: true });
  } else if (array.length == 2) {
    path = array[0] + "/" + array[1];
    result = await getServerSideProps(path, 0);
    return NextResponse.json({ result, success: true });
  } else if (array.length == 3) {
    path = array[0] + "/" + array[array.length - 1];
    result = await getServerSideProps(path, 0);
    return NextResponse.json({ result, success: true });
  } else {
    return NextResponse.json({
      result: "Something went wrong, Try again!",
      success: false,
    });
  }
};
