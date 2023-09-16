import MovieDetailPage from "@/app/Components/MovieDetailPage";
import RedirectNextPage from "@/app/Components/RedirectNextPage";

export default function Page(props) {
  const path = props.params.page;

  if (
    path[0] === "now-playing" ||
    path[0] === "popular" ||
    path[0] === "top-rated" ||
    path[0] === "upcoming"
  ) {
    if (path[1]) {
      if (path[1] === "page") {
        return <RedirectNextPage page={"movie/" + path} />;
      } else {
        return <MovieDetailPage page={"movie/" + path} />;
      }
    } else {
      return <RedirectNextPage page={"movie/" + path} />;
    }
  } else {
    if (path[0] === "page") {
      return <RedirectNextPage page={"movie/" + path} />;
    } else {
      return <MovieDetailPage page={"movie/" + path} />;
    }
  }

  //  else {
  //   return <NextPage page={path} />;
  // }
}
