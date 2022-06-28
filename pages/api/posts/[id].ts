import type {NextApiRequest, NextApiResponse } from 'next'
import Post from '../../../models/post'
import { supabase } from '../../../utils/subabase-client';

export default async function handler(
    request: NextApiRequest, 
    response: NextApiResponse<Post>
    ) {
        const { id } = request.query
        const res = await supabase.from<Post>('posts_details').select('*').eq('id', id as string).single()
        if (res.body)
            response.status(200).json(res.body)
        else
            response.status(404);
    }
