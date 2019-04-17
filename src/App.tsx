import React, {Component} from 'react';

/** Components */
import ContentContainer from './components/ContentContainer/ContentContainer';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Table from './components/Table/Table';
import TableHeader from './components/TableHeader/TableHeader';

export class App extends Component {
	render() {
		return (
			<ContentContainer>
				<NavBar />

				<Main>
					<TableHeader />
					<Table />
				</Main>

			</ContentContainer>
		)
	}
}

export default App;
