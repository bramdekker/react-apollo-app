import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import PostCardList from './PostCardList';
import PostCardListTitle from './PostCardListTitle';
import CommentsListTitle from './CommentsListTitle';
import CommentCardList from './CommentCardList';
import PaginationButtons from './PaginationButtons';

function AppBody() {
    const [currentPost, setCurrentPost] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);

    return (
        <Container fluid className="bg-secondary">
            <Row>
                <Col>
                    <PostCardListTitle currentPage={currentPage} totalCount={totalPosts}/>
                </Col>
                <Col>
                    <CommentsListTitle currentPost={currentPost}/>
                </Col>
            </Row>
            <Row>
                <Col className="pt-2">
                    <PostCardList setCurrentPostCallback={setCurrentPost} currentPost={currentPost} currentPage={currentPage} setTotalPosts={setTotalPosts}/>
                    <PaginationButtons currentPage={currentPage} setCurrentPage={setCurrentPage} totalPosts={totalPosts}/>
                </Col>
                <Col className="pt-2">
                    {currentPost
                        ? <CommentCardList className="bg-info" currentPost={currentPost}/>
                        : <p className="ml-2">No post selected</p>}
                </Col>
            </Row>
        </Container>
    );
}

export default AppBody;