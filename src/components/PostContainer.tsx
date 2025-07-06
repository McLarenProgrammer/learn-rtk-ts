import type { IPost } from "../models/IPost"
import { postAPI } from "../services/PostService"
import PostItem from "./PostItem"

interface PostContainerProps {
    
}

function PostContainer({}: PostContainerProps) {
    const {data: posts} = postAPI.useFetchAllUsersQuery(100)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()

    async function handleCreate() {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }
    function handleDelete(post: IPost) {
        deletePost(post)
    }

    function handleUpdate(post: IPost) {
        updatePost(post)
    }

    return (
        <>
            <div>
                <button onClick={handleCreate}>Создать пост</button>
                {posts && posts.map(post => 
                    <PostItem remove={handleDelete} update={handleUpdate} key={post.id} post={post} />
                )}
            </div>
        </>
    )
}

export default PostContainer