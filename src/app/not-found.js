import Link from "next/link";

export default function Page(){
    return(
        <div className="container center fd-column not-found">
            <h1>404 - Page not found!</h1>
            <Link className="flex" href="/"><i className="bi bi-arrow-return-left"></i> Return to home</Link>
        </div>
    )
}