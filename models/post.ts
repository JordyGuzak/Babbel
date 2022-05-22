import Author from "./author";

type Post = {
    id: string,
    author: Author,
    createdAt: Date,
    modifiedAt: Date,
    title: string,
    content: string,
    likes: number,
    shared: number,
    comments: number
}

export default Post;