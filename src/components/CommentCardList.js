import CommentCard from './CommentCard';
import { gql, useQuery } from '@apollo/client';

// Comments have id, email, name, body, postId
const GET_COMMENTS = gql`
  query Comments($id: ID!) {
    post(id: $id) {
      comments {
          data {
            id
            email
            name
            body
          }
      }
    }
  }
`;

function CommentCardList({ currentPost }) {
    const { loading, error, data } = useQuery(GET_COMMENTS, {
        variables: {id: currentPost.id}
    });

    if (loading) return <p>Loading ...</p>
    if (error) return <p>Error while fetching data</p>

    return (
        data.post.comments.data.map(
            ({ name, body, email, id }) => <CommentCard key={id} name={name} body={body} email={email}/>)
    );
}

export default CommentCardList;