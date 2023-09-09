import TvDetailPage from "@/app/Components/TvDetailPage";
import RedirectTvPage from "@/app/Components/RedirectTvPage";

export default function Page(props) {
  const path = props.params.page;

 
  if((path[0] === "airing-today") || (path[0] === "on-the-air") || (path[0] === "popular") || (path[0] === "top-rated")){
    if(path[1] === "page"){
      return <RedirectTvPage page={"tv/" + path[0] + "/page/" + path[path.length - 1]} />
    }
    if(!path[1]){
      return <RedirectTvPage page={"tv/" + path[0]} />
    }
    return <TvDetailPage page={"tv/" + path[path.length - 1]} />;
  } else{
    return <TvDetailPage page={"tv/" + path[0]} />;
  }


  // else {
  //     return <NextPage page={path} />;
  //   }
}
