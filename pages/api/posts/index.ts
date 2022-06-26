import type { NextApiRequest, NextApiResponse } from 'next'
import Post from '../../../models/post';
import posts from '../../../data/posts';
import { ApiError } from 'next/dist/server/api-utils';
import { withSessionRoute } from "../../../lib/session";
import { supabase } from '../../../utils/subabase-client'

export default withSessionRoute(handler)

async function handler(
    request: NextApiRequest,
    response: NextApiResponse<Post[] | ApiError>
) {
    switch (request.method) {
        case 'GET':
            return response.status(200).json(posts)
        case 'POST':
            const { user } = request.session
            if (!user) {
                return response.status(401).send({name: 'api/posts', statusCode: 401, message: 'Unauthorized'})
            }
        default:
            return response.status(405).send({name: 'api/posts', statusCode: 405, message: 'Unsupported method'})
    }
}

