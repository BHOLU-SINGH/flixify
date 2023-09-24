"use client"

import Link from "next/link";
import { useState } from "react";

const Page = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        console.log(name, email, message);
        e.preventDefault();
    }

    return (
        <div className="container center fd-column form">
            <form className="flex fd-column" method="post" onSubmit={handleChange}>
                <h1>Contact Us</h1>
                <p>We would love to hear from you! Please use the contact form below to get in touch with us. We will respond to your message as soon as possible.</p>
                <input className="form-field" type="text" name="name" placeholder="Username" onChange={(e)=>setName(e.target.value)} required />
                <input className="form-field" type="email" name="email" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)} required />
                <textarea className="form-field" name="message" placeholder="Message..." onChange={(e)=>setMessage(e.target.value)} required ></textarea>
                <button className="form-field btn" type="submit">Send Email</button>
                <Link href="/"><i className="bi bi-arrow-return-left"></i> Return to home</Link>
            </form>
        </div>
    )
}
export default Page;