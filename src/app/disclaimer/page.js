import Link from "next/link";

const page = () => {
    return (
        <div className="container center fd-column disclaimer">
            <h1>Disclaimer</h1>
            <div className="rules">
                <p>1. This website is owned and operated by [FreeProjects1]. All content on this website is protected by copyright and trademark laws.</p>
                <p>2. By using this website, you agree to the following terms and conditions:</p>
                <ul>
                    <li>You may not copy or reproduce any content on this website without the express permission of [FreeProjects1].</li>
                    <li>You may not use any content on this website for commercial purposes.</li>
                    <li>You agree to hold [FreeProjects1] harmless from any damages that you may incur as a result of using this website.</li>
                    <li>These terms and conditions are governed by the laws of the State of California.</li>
                </ul>

                <p>3. If you have any questions about this disclaimer, please contact us at <Link href="https://github.com/bholu-singh/">[Bholu Singh]</Link>.</p>
                <Link className="center mt-2" href="/"><i className="bi bi-arrow-return-left"></i> Return to home</Link>
            </div>
        </div>
    )
}
export default page;