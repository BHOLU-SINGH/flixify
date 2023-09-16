"use client";

import { useRouter } from "next/navigation";

export default function PageCount(props) {
  const router = useRouter();
  const page = props.page;
  console.log(page)

  const reDirect = () => {
    if (page !== "...") {
      router.push("/" + page);
    } else{
      router.push("/");
    }
  };

  return <button onClick={reDirect}>{props.value}</button>;
}
