import React, {Fragment} from 'react';

import Header from './component/header/header';
import Footer from './component/footer/footer';

const App = ({children}) => (
    <Fragment>
        <Header />
        {children}
        <Footer />
    </Fragment>
)

export default App