import type {NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../utils/subabase-client';

type Like = {
    post_id: string,
    user_id: string
}

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
        const { post_id } = request.query
        const { user } = await supabase.auth.api.getUserByCookie(request, response)

        if (!user) {
            return response.status(400);
        }

        const { error } = await supabase.from<Like>('likes').insert([{post_id: post_id as string, user_id: user.id}])
        if ( error )
           return response.status(400)

        return response.status(200)
    }