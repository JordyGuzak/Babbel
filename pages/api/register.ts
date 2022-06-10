import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../lib/session";
import { supabase } from '../../utils/subabase-client'

export default withSessionRoute(registerRoute)

async function registerRoute(req: NextApiRequest, res: NextApiResponse) {
    const { username, password } = req.body;
    const { session, error } = await supabase.auth.signUp({email: username, password: password})

    if (error) {
        return res.status(error?.status).json(error);
    }

    if (session) {
        req.session.user = session.user
        await req.session.save()
    }

    return res.status(200).json(req.session);
}