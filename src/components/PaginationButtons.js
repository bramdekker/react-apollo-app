import Button from 'react-bootstrap/Button';

const POST_PER_PAGE = 5;

function previousOnClick(curPage, setCurPage) {
    setCurPage(curPage - 1);
}

function nextOnClick(curPage, setCurPage) {
    setCurPage(curPage + 1);
}

function PaginationButtons({ currentPage, setCurrentPage, totalPosts }) {
    let buttons;

    if (currentPage === 1) {
        // No prev button
        buttons = <Button onClick={() => nextOnClick(currentPage, setCurrentPage)} variant="light" size="lg" className="btn mr-4 mt-2 float-right">Next</Button>
    } else if (currentPage === totalPosts / POST_PER_PAGE) {
        // No next button
        buttons = <Button onClick={() => previousOnClick(currentPage, setCurrentPage)} variant="light" size="lg" className="btn ml-4 mt-2 float-left">Previous</Button>
    } else {
        // Both buttons
        buttons = 
        <>
            <Button onClick={() => previousOnClick(currentPage, setCurrentPage)} variant="light" size="lg" className="btn ml-4 mt-2 float-left">Previous</Button>
            <Button onClick={() => nextOnClick(currentPage, setCurrentPage)} variant="light" size="lg" className="btn mr-4 mt-2 float-right">Next</Button>
        </>
    }

    return (
        buttons
    );
}

export default PaginationButtons;