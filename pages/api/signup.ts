import moment from "moment"
import { NextApiRequest, NextApiResponse } from "next"
import { withSessionRoute } from "../../lib/session"
import Profile from "../../models/profile";
import { supabase } from '../../utils/subabase-client'

export default withSessionRoute(signUpRoute)

async function signUpRoute(req: NextApiRequest, res: NextApiResponse) {
    const { username, email, password } = req.body;
    const { user, error } = await supabase.auth.signUp({email: email, password: password})

    if (error) {
        return res.status(error?.status).json(error)
    }

    if (!user) {
        return res.status(400).json('Something went wrong...')
    }

    const response = await supabase.from<Profile>('profile').insert([{
        id: user.id,
        username: username,
        updated_at: moment.utc().toDate()
    }])
    
    req.session.user = user
    req.session.user.profile = response.body?.find(p => p)
    await req.session.save()
    return res.status(200).json(req.session);
}