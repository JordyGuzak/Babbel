import { NextApiRequest, NextApiResponse } from "next";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import Profile from "../../models/profile";
import User from '../../models/user';
import { supabase } from '../../utils/subabase-client'

export default async function userRoute(req: NextApiRequest, res: NextApiResponse<User | undefined>) {
    // const { user } = await supabase.auth.api.getUserByCookie(req, res)
    // res.status(200).json(user);

    const { user } = req.session;
    if (user) {
        if (!user.profile) {
            const response = await supabase.from<Profile>('profiles').select('*').eq('user_id', user.id).single();

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