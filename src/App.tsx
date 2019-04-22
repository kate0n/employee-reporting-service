import React, {Component, Fragment} from 'react';

/** Components */
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import NavBarWithBurger from './components/NavBar/NavBarWithBurger';
import Table from './components/Table/Table';
import PageTitleWithExportAndSetting from './components/TableHeader/PageTitleWithExportAndSetting';
import {text} from './assets/text';

// import UserAuth from './components/UserAuth/UserAuth'; <UserAuth/>


export class App extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <NavBarWithBurger/>
                <Main>
                    <PageTitleWithExportAndSetting title={text.everydayReport}/>
                    <Table/>
                </Main>
            </Fragment>

        )
    }
}

export default App;
