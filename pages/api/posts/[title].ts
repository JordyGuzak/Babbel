import type {NextApiRequest, NextApiResponse } from 'next'
import Post from '../../../models/post'
import posts from '../../../data/posts'

export default function handler(
    request: NextApiRequest, 
    response: NextApiResponse<Post>
    ) {
        const { title } = request.query
        const blog = posts.find(b => b.title == title);

        if (blog)
            response.status(200).json(blog)
        else
            response.status(404);
    }
