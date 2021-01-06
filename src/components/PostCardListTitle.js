const POST_PER_PAGE = 5;

function PostCardListTitle({ currentPage, totalCount }) {
    return (
        <>
            <h3 className="ml-2 float-left">Click on a post to see its comments in the right pane</h3>
            <h3 className="mr-2 float-right">{currentPage}/{totalCount / POST_PER_PAGE}</h3>
        </>
    );
}

export default PostCardListTitle;