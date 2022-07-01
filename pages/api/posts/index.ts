import type { NextApiRequest, NextApiResponse } from 'next'
import Post from '../../../models/post';
import { ApiError } from 'next/dist/server/api-utils';
import { supabase } from '../../../utils/subabase-client'

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse<Post[] | ApiError>
) {
    switch (request.method) {
        case 'GET':
            const getResponse = await supabase.from<Post>('posts_details').select('*').order('created_at', { ascending: false})
            return response.status(200).json(getResponse.body || [])
        case 'POST':
            const { user } = await supabase.auth.api.getUserByCookie(request, response)
            if (!user) {
                return response.status(401).send({ name: 'api/posts', statusCode: 401, message: 'Unauthorized' })
            }
            const post: Post = { user_id: user.id, ...request.body }
            const res = await supabase.from<Post>('posts').insert([post])
            return response.status(res.status).json(res.body || [])

        default:
            return response.status(405).send({ name: 'api/posts', statusCode: 405, message: 'Unsupported method' })
    }
}

