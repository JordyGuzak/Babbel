
type Post = {
    id: string,
    username: string,
    created_at: Date,
    modified_at: Date,
    content: string,
    likes_count: number,
    shared_count: number,
    comments_count: number,
    liked_by_me: boolean
}

export default Post;