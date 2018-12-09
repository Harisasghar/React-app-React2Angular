import * as React from 'react';
import { users as userData } from './../users';
import LinearProgress from '@material-ui/core/LinearProgress';
// import axios from 'axios';

class users extends React.Component<any, IUsersState> {
	render() {
		return (
			<div>
				{!this.state.dataLoaded ?
					(<LinearProgress className="table-full-width" />) : null}

				<table className="table-full-width">
					<tbody>
						<tr>
							<th>Name</th><th>Title</th><th>Systems</th>
						</tr>
						{this.state.users.map(row => {
							return (
								<tr key={row.id} className="table-row" onClick={() => this.handleClick(row)}>
									<td>{row.name}</td>
									<td>{row.title}</td>
									<td>{row.registeredIn.length}</td>
								</tr>);
						})}
					</tbody>
				</table>
			</div>
		);
	}

	constructor(props: any) {
		super(props);
		this.state = {
			users: [], dataLoaded: false
		};

		this.handleClick = this.handleClick.bind(this);

	}
	componentWillMount() {
		const local = this;
		setTimeout(() => {
			local.setState({
				users: userData, 
				dataLoaded: true
			});
		}, 1000);
	}

	handleClick(row: any) {
		this.props.history.push({
			pathname: '/userdetails/' + row.id
		});
	}
	
}

interface IUsersState {
	users: any[],
	dataLoaded: boolean
}

export default users;

// <Table className="table-full-width">
// 					<TableHead>
// 						<TableRow>
// 							<TableCell>Name</TableCell>
// 							<TableCell>Title</TableCell>
// 							<TableCell>Systems</TableCell>
// 						</TableRow>
// 					</TableHead>
// 					<TableBody>
// 						{this.state.users.map(row => {
// 							return (
// 								<TableRow key={row.name} onClick={() => this.handleClick(row)}>
// 									<TableCell>{row.name}</TableCell>
// 									<TableCell>{row.title}</TableCell>
// 									<TableCell>{row.registeredIn.length}</TableCell>
// 								</TableRow>
// 							);
// 						})}
// 					</TableBody>
// 				</Table>

// axios.get("url").then(function (res) {
// 	local.setState({
// 		users: res, dataLoaded: true
// 	});
//   })