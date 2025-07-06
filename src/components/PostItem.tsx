import type { IPost } from "../models/IPost"

interface PostItemProps {
    post: IPost
    remove: (post: IPost) => void
    update: (post: IPost) => void
}

function PostItem({post, remove, update}: PostItemProps) {
    function deleteHandler(event: React.MouseEvent) {
        event.stopPropagation()
        remove(post)
    }
    function updateHandler(event: React.MouseEvent) {
        event.stopPropagation()
        const title = prompt() || ""
        update({...post, title})
    }

    return (
        <>
            <div onClick={updateHandler}>
                <div>
                    {post.id}, {post.title}
                </div>
                <div>
                    {post.body}
                    <button onClick={deleteHandler}>Удалить</button>
                </div>
            </div>
        </>
    )
}

export default PostItem