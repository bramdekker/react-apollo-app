// Make a button to go to the next posts. Fetch only 5 at a time.
import { gql, useQuery } from '@apollo/client';
import PostCard from './PostCard';

const GET_POSTS = gql`
    query (
        $options: PageQueryOptions
    ) {
        posts(options: $options) {
            data {
                id
                title
                body 
            }
            meta {
                totalCount
            }
        }
    }
`;

function PostCardList({ setCurrentPostCallback, currentPost, currentPage, setTotalPosts }) {
    const { loading, error, data } = useQuery(GET_POSTS, {
        variables: {
            "options": {
                "paginate": {
                  "page": currentPage,
                  "limit": 5
                }
            }
        }
      });

    if (loading) return <p>Loading ...</p>
    if (error) return <p>Error while fetching data</p>

    setTotalPosts(data.posts.meta.totalCount);

    return (
        data.posts.data.map(
            ({ title, body, id }) => <PostCard key={id} id={id} title={title} body={body} callback={setCurrentPostCallback} currentPost={currentPost}/>
        )
    );
}

export default PostCardList;