import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../lib/session";
import { supabase } from '../../utils/subabase-client'

export default withSessionRoute(logoutRoute)

async function logoutRoute(req: NextApiRequest, res: NextApiResponse) {
    const { error } = await supabase.auth.signOut()

    if (error) {
        return res.status(error?.status).json(error);
    }

    req.session.user = null
    await req.session.save()

    return res.status(200).json(req.session);
}