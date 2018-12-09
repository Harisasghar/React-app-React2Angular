import * as React from 'react';

class Systems extends React.Component<any, any> {
	render() {
		return (
			<div>
				<h3>User systems:</h3>
				<table className="systems-table">
					<tbody>
						<tr>
							<th>System Id</th>
							<th>System Name</th>
						</tr>
						{this.props.userSystems.map((system: any, i:number) => {
							return (
								<tr key={i} className="table-row">
									<td>{system.id}</td>
									<td>{system.name}</td>
								</tr>
							)
						})}

					</tbody>
				</table>
			</div>
		);
	}

	constructor(props: any) {
		super(props);
	}
}

export default Systems;