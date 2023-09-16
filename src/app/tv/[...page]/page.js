import TvDetailPage from "@/app/Components/TvDetailPage";
import RedirectTvPage from "@/app/Components/RedirectTvPage";

export default function Page(props) {
  const path = props.params.page;

  if (
    path[0] === "airing-today" ||
    path[0] === "on-the-air" ||
    path[0] === "popular" ||
    path[0] === "top-rated"
  ) {
    if (path[1]) {
      if (path[1] === "page") {
        return <RedirectTvPage page={"tv/" + path} />;
      } else {
        return <TvDetailPage page={"tv/" + path} />;
      }
    } else {
      return <RedirectTvPage page={"tv/" + path} />;
    }
  } else {
    if (path[0] === "page") {
      return <RedirectTvPage page={"tv/" + path} />;
    } else {
      return <TvDetailPage page={"tv/" + path} />;
    }
  }
  
  // else {
  //     return <NextPage page={path} />;
  //   }
}
