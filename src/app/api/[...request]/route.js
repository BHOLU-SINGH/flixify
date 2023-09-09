import { NextResponse } from "next/server";
const { API_KEY } = process.env;

export async function GET(request, content) {
  const api = "https://api.themoviedb.org/3/";
  let path = content.params.request;

  if (path.length == 1) {
    if (path[0] === "movie" || path[0] === "tv") {
      path[0] === "movie"
        ? (newPath = "movie/now_playing")
        : (newPath = "tv/airing_today");
      let data = await fetch(api + newPath + "?api_key=" + API_KEY);
      let result = await data.json();
      return NextResponse.json({ result, success: true });
    }
  } else {
    return NextResponse.json({
      result: "Invalid API, Please try again!",
      success: false,
    });
  }