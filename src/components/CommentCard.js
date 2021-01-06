import Card from 'react-bootstrap/Card';

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function CommentCard({ name, body, email }) {
    return (
        <Card className="text-center m-2 w-98 bg-light">
            <Card.Body>
                <Card.Title>{capitalize(name)}</Card.Title>
                <Card.Text>{capitalize(body)}</Card.Text>
            </Card.Body>
            <Card.Footer>Written by: {email}</Card.Footer>
        </Card>
    );
}

export default CommentCard;