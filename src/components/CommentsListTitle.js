function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function CommentsListTitle({ currentPost }) {
    return (
        <h3 className="ml-2">Comments for post: {currentPost ? capitalize(currentPost.title) : "None"}</h3>
    );
}

export default CommentsListTitle;