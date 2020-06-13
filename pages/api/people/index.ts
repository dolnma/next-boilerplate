import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    req.method
    return res.json({ hello: 'world! 2' })
}

export default handler
