import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../lib/session";
import Profile from "../../models/profile";
import User from '../../models/user';
import { supabase } from '../../utils/subabase-client'


export default withSessionRoute(userRoute)

async function userRoute(req: NextApiRequest, res: NextApiResponse<User | null | undefined>) {

    const { user } = req.session;
    if (user) {
        if (!user.profile) {
            const response = await supabase.from<Profile>('profiles').select('*').eq('id', user.id).single();

            if (response.error) {
                console.log(response.error)
            }

            if (response.data) {
                user.profile = response.data;
            }

            req.session.user = user;
            await req.session.save();
        }

        return res.status(200).json(req.session.user)
    }
    else {
        return res.status(404).json(undefined)
    }
}