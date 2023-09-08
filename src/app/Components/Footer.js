import Link from "next/link";

export default function Footer(){
    return(
        <footer>
        <div className="footer-1">Flixify copyright &copy; 2023.</div>
        <ul className="footer-2">
          <li>
            <Link href="#">Disclaimer</Link>
          </li>
          <li>
            <Link href="#">DMCA</Link>
          </li>
          <li>
            <Link href="#">Request</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <Link href="#">Credits</Link>
          </li>
          <li>
            <Link href="#">How to download</Link>
          </li>
          <li>
            <Link href="#">FreeProjects1</Link>
          </li>
        </ul>
      </footer>
    )
}