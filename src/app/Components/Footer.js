import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-1">Flixify copyright &copy; {currentYear} <i className="bi bi-chevron-double-right"></i> <Link href="https://freeprojects1.blogspot.com/" target="_blank">FreeProjects1</Link> </div>
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
          <Link href="https://freeprojects1.blogspot.com/">FreeProjects1</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;