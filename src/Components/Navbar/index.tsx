import * as React from 'react'

import { INavbar } from './Navbar'

const Navbar: React.FunctionComponent<INavbar.IProps> = (): JSX.Element => {
    return (
        <div className="title">
            <span>Ahoj</span>
        </div>
    )
}

export { Navbar }
