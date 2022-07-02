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
            const insertResponse = await supabase.from<Post>('posts').insert([{ user_id: user.id, ...request.body }])
            let result: Post[] = []
            if (insertResponse.data && insertResponse.data.length > 0) {
                const {data} = await supabase.from<Post>('posts_details').select('*').eq('id', insertResponse.data[0].id)
                result = data ?? [];
            }
            return response.status(insertResponse.status).json(result)

        default:
            return response.status(405).send({ name: 'api/posts', statusCode: 405, message: 'Unsupported method' })
    }
}

