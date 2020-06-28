import React, { Fragment } from 'react';

import Nav from '../../components/Menu/Nav'
import Menu from '../../components/Menu/Menu'
import Filtrar from '../../components/Filtrar'
import Footer from '../../components/Footer'

const Categoria = () => {
        return(
            <Fragment>
                <Nav/>
                <Menu/>
                <Filtrar />
                <Footer />
            </Fragment>
        )

}

export  default Categoria