"use client"

import { useRouter } from "next/navigation"

const Button = (props) => {
    const router = useRouter();
    const Id = props.id;
    let page = props.page;

    const setNewUrl = () => {
        router.push("/" + page + "/" + Id);
    }

    return (
        <button onClick={setNewUrl}>Read More</button>
    )
}
export default Button;