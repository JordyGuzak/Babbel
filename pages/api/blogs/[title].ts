import type {NextApiRequest, NextApiResponse } from 'next'
import Blog from '../../../models/blog'
import blogs from '../../../data/blogs'

export default function handler(
    request: NextApiRequest, 
    response: NextApiResponse<Blog>
    ) {
        const { title } = request.query
        const blog = blogs.find(b => b.title == title);

        if (blog)
            response.status(200).json(blog)
        else
            response.status(404);
    }
