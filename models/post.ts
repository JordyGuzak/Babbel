import User from "./user";

type Post = {
    id: string,
    user: User,
    created_at: Date,
    modified_at: Date,
    content: string,
    likes_count: number,
    shared_count: number,
    comments_count: number
}

export default Post;