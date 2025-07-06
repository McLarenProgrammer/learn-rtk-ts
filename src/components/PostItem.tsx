import type { IPost } from "../models/IPost"

interface PostItemProps {
    post: IPost
}

function PostItem({post}: PostItemProps) {
    return (
        <>
            <div>
                {post.id}, {post.title}
            </div>
            <div>
                {post.body}
                <button>Удалить</button>
            </div>
        </>
    )
}

export default PostItem