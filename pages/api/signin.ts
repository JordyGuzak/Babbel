import { NextApiRequest, NextApiResponse } from "next";
import { ApiError } from "next/dist/server/api-utils";
import { withSessionRoute } from "../../lib/session";
import Profile from "../../models/profile";
import User from '../../models/user';
import { supabase } from '../../utils/subabase-client'

export type Session = {
    provider_token?: string | null
    access_token: string
    expires_in?: number
    expires_at?: number
    refresh_token?: string
    token_type: string
    user: User | null
}

// export default withSessionRoute(signInRoute)

export default async function signInRoute(req: NextApiRequest, res: NextApiResponse<User | ApiError>) {
    const { email: email, password } = req.body;
    const { user, error } = await supabase.auth.signIn({email: email, password: password})
    
    if (error) {
        return res.status(error.status).json({name: 'api/signin', statusCode: error.status, message: error.message });
    }

    if (!user) {
        return res.status(400).json({name: 'api/signin', statusCode: 400, message: 'Something went wrong.' })
    }

    const userModel: User = {...user}
    const response = await supabase.from<Profile>('profiles').select('*').eq('id', user.id).single();
    userModel.profile = response.data || undefined
    return res.status(200).json(userModel);
}