import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../lib/session";
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

export default withSessionRoute(signInRout)

async function signInRout(req: NextApiRequest, res: NextApiResponse) {
    const { email: email, password } = req.body;
    const { session, error } = await supabase.auth.signIn({email: email, password: password})

    if (error) {
        return res.status(error?.status).json(error);
    }

    if (session) {
        req.session.user = session.user
        await req.session.save()
    }

    return res.status(200).json(req.session);
}