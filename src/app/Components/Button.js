"use client"

import { useRouter } from "next/navigation"

const Button = (props) => {
    const router = useRouter();
    const Id = props.id;
    let page = props.page;
    const arr = page.split("/");
    const firstElement = arr[0];
    const pageElement = arr[arr.length - 2];


    let array = arr;
    if (arr[0] === "movie" || arr[0] === "tv") {
        if (arr[1] !== "page") {
            array.shift();
        }
    }

    const setNewUrl = () => {
        if (pageElement === "page") {
            array.pop();
            array.pop();
            router.push("/" + firstElement + "/" + array + "/" + Id);
        } else {
            router.push(array + "/" + Id);
        }
        router.push("/" + page + "/" + Id);
    }

    return (
        <button onClick={setNewUrl}>Read More</button>
    )
}
export default Button;