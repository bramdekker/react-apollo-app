import Card from 'react-bootstrap/Card';
import '../styles/index.css';

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function makeClasses(id, currentPost) {
    if (currentPost && id === currentPost.id) {
        return "text-center text-light w-98 bg-dark cursor-pointer";
    }

    return "text-center m-2 w-98 bg-light cursor-pointer";
}

function PostCard({ id, title, body, callback, currentPost }) {
    return (
        <Card
            className={makeClasses(id, currentPost)}
            onClick={() => callback({id, title, body})}
        >
            <Card.Body>
                <Card.Title>{capitalize(title)}</Card.Title>
                <Card.Text>{capitalize(body)}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PostCard;