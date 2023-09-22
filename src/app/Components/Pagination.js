import Link from "next/link";

const Pagination = ({ start_page, end_page, page }) => {
    const pageNumbers = [];
    const getPages = () => {
        const totalPages = end_page;
        const startPage = Math.max(1, start_page - 2);
        const endPage = Math.min(totalPages, start_page + 2);
        for (let i = startPage; i <= endPage; i++) {
          pageNumbers.push(i);
        }
        return pageNumbers;
    }
    getPages();

    return (
        <div className="pagination">
            <ul className="center">
                {
                    pageNumbers[2] >= 4 ? <li><Link href={"/" + page + "/1"}>1</Link></li> : null
                }
                {
                    pageNumbers[2] >= 5 ? <li><Link href="#">...</Link></li> : null
                }
                {
                    pageNumbers.map((item) => (
                        item == start_page 
                        ? <li className="active" key={item}><Link href={"/" + page + "/"+ item}>{item}</Link></li> 
                        : <li key={item}><Link href={"/" + page + "/"+ item}>{item}</Link></li>
                    ))
                }
                {
                    pageNumbers[2] >= end_page - 2 ? null : <li><Link href="#">...</Link></li>
                }
                {
                    pageNumbers[2] == end_page - 1 ? null : <li><Link href={"/" + page + "/"+ end_page}>{end_page}</Link></li>
                }
            </ul>
        </div>
    )
}

export default Pagination;