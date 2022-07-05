import { NextApiRequest, NextApiResponse } from "next"
import Profile from "../../models/profile";
import { supabase } from '../../utils/subabase-client'


export default async function signUpRoute(req: NextApiRequest, res: NextApiResponse) {
    const { username, email, password } = req.body;
    const { user, error, session } = await supabase.auth.signUp({ email: email, password: password })

    if (error) {
        return res.status(error?.status).json(error)
    }

    if (!user) {
        return res.status(400).json('Something went wrong...')
    }

    const response = await supabase.from<Profile>('profiles').insert([{
        id: user.id,
        username: username,
        updated_at: new Date()
    }])

    return res.status(200).json(response);
}