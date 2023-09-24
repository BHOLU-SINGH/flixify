"use client"

import Link from "next/link";
import { useState } from "react";

const Page = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [request, setRequest] = useState("");

    const handleChange = (e) => {
        console.log(name, email, number, request);
        e.preventDefault();
    }

    return (
        <div className="container center fd-column form">
            <form className="flex fd-column" method="post" onSubmit={handleChange}>
                <h1>Request Form</h1>
                <p>We would love to hear from you!. We will respond to your message as soon as possible.</p>
                <input className="form-field" type="text" name="name" placeholder="Name" onChange={(e)=>setName(e.target.value)} required />
                <input className="form-field" type="email" name="email" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)} required />
                <input className="form-field" type="text" name="number" placeholder="Phone number" onChange={(e)=>setNumber(e.target.value)} required />
                <textarea className="form-field" name="request" placeholder="Request" onChange={(e)=>setRequest(e.target.value)} required ></textarea>
                <button className="form-field btn" type="submit">Submit</button>
                <Link href="/"><i className="bi bi-arrow-return-left"></i> Return to home</Link>
            </form>
        </div>
    )
}
export default Page;