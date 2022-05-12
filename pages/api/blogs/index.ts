import type {NextApiRequest, NextApiResponse } from 'next'
import Blog from '../../../models/blog';
import blogs from '../../../data/blogs';


export default function handler(
    request: NextApiRequest, 
    response: NextApiResponse<Blog[]>
    ) {
        response.status(200).json(blogs)
    }

