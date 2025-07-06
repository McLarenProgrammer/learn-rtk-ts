import { postAPI } from "../services/PostService"
import PostItem from "./PostItem"

interface PostContainerProps {
    
}

function PostContainer({}: PostContainerProps) {
    const {data: posts} = postAPI.useFetchAllUsersQuery(5)

    return (
        <>
            <div>
                {posts && posts.map(post => 
                    <PostItem key={post.id} post={post} />
                )}
            </div>
        </>
    )
}

export default PostContainer