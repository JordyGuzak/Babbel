import type {NextApiRequest, NextApiResponse } from 'next'
import Post from '../../../models/post';
import posts from '../../../data/posts';


export default function handler(
    request: NextApiRequest, 
    response: NextApiResponse<Post[]>
    ) {
        response.status(200).json(posts)
    }

