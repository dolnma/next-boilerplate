import { NextApiRequest, NextApiResponse } from 'next'
import { INavbar } from '@Pages/api/navbar/navbar'

const handler = (req: NextApiRequest, res: NextApiResponse<INavbar.IProps>) => {
    return res.json([
        {
            id: 1,
            name: 'Home',
        },
        {
            id: 2,
            name: 'Contact',
        },
    ])
}

export default handler
