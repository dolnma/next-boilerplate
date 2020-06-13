import * as React from 'react'

import styled from 'styled-components'
import { GetServerSideProps } from 'next'
import { INavbar } from './Navbar'

const Container = styled.div`
    li {
        color: white;
    }
    color: #000000;
    height: 30px;
    background-color: #000;
    width: 100%;
`

const MenuItem = styled.div`
    color: #fff;
`

const Navbar: React.FunctionComponent<INavbar.IProps> = (
    props
): JSX.Element => {
    const { link, menu } = props
    return (
        <Container>
            <MenuItem>
                <ul>
                    {link.map((linkItem: any) => {
                        // Return the element. Also pass key
                        return <li key={linkItem.id}>{linkItem.name}</li>
                    })}
                </ul>
                {menu}
            </MenuItem>
        </Container>
    )
}

// export const getServerSideProps: GetServerSideProps<
//     INavbar.IProps
// > = async ctx => {
//     console.log(ctx)
//     // const db = await openDB();
//     // const microphones = await db.all<Microphone[]>('select * from microphone');
//     //
//     // await new Promise(acc => {
//     //     setTimeout(acc, 3000);
//     // });
//     //
//     // return { props: { microphones } };
// }

export { Navbar }
