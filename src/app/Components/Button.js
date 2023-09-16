"use client";

import { useRouter } from "next/navigation";

function Button(props) {
  const router = useRouter();
  const Id = props.id;
  let page = props.page;
  page = page.replaceAll(",", "/");
  const arr = page.split("/");
  const firstElement = arr[0];
  const pageElement = arr[arr.length - 2];


  let array = arr;
  if (arr[0] === "movie" || arr[0] === "tv") {
    if (arr[1] !== "page") {
      array.shift();
    }
  }

  const readMore = () => {
    if (pageElement === "page") {
      array.pop();
      array.pop();
      router.push("/" + firstElement + "/" + array + "/" + Id);
    } else {
      router.push(array + "/" + Id);
    }
  };

  return <button onClick={readMore}>Read More</button>;
}

export default Button;
