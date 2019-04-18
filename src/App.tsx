import React, {Component, Fragment} from 'react';

/** Components */
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Table from './components/Table/Table';
import TableHeader from './components/TableHeader/TableHeader';
// import UserAuth from './components/UserAuth/UserAuth'; <UserAuth/>


export class App extends Component {
	render() {
		return (
			<Fragment>
				<NavBar />

				<Main>
					<TableHeader />
					<Table />
				</Main>
			</Fragment>

		)
	}
}

export default App;
