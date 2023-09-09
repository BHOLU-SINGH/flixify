"use client";

import { useRouter } from "next/navigation";

export default function Button(props) {
  const router = useRouter();
  const movieId = props.id;
  let page = props.page;

  function removeAfterPage(string) {
    const pageIndex = string.indexOf("page");
    if (pageIndex !== -1) {
      return string.slice(0, pageIndex);
    } else {
      return string;
    }
  }
  page = removeAfterPage(page);

  const readMore = () => {
    router.push("/" + page + "/" + movieId);
  };

  return <button onClick={readMore}>Read More</button>;
}
