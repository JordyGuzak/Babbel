import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../lib/session";
import Profile from "../../models/profile";
import { supabase } from '../../utils/subabase-client'

export default withSessionRoute(signUpRoute)

async function signUpRoute(req: NextApiRequest, res: NextApiResponse) {
    const { username, email, password } = req.body;

    supabase.from('profile').select('id')

    const { session, error } = await supabase.auth.signUp({email: email, password: password})

    if (error) {
        return res.status(error?.status).json(error);
    }

    if (!session?.user) {
        return res.status(400).json('Something went wrong...');
    }

    req.session.user = session.user

    const {id} = req.session.user

    const response = await supabase.from<Profile>('profile').insert([{
        id: id,
        username: username,
        updated_at: moment.utc().toDate()
    }])

    req.session.user.profile = response.body?.find(p => p)

    await req.session.save()

    return res.status(200).json(req.session);
}