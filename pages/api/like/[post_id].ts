import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../utils/subabase-client';

type Like = {
    post_id: string,
    user_id: string
}

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    const { post_id } = request.query
    const { user } = await supabase.auth.api.getUserByCookie(request, response)

    if (!user)
        return response.status(400).json({ name: 'api/likes', statusCode: 400, message: 'Not authenticated.' })

    const deleteResponse = await supabase.from<Like>('likes').delete().eq('post_id', post_id as string).eq('user_id', user.id)

    if (deleteResponse?.data && deleteResponse.data.length > 0)
        return response.status(200).json({ name: 'api/likes', statusCode: 200, body: { like: false }})

    const { data, error, status } = await supabase.from<Like>('likes').insert([{ post_id: post_id as string, user_id: user.id }])
    return response.status(status).json({ name: 'api/likes', statusCode: status, message: error, body: {like: data && data?.length > 0 }})
}