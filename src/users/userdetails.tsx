import * as React from 'react';
import { users } from 'src/users';
import Systems from './systems';

class userdetails extends React.Component<any, any> {
	render() {
		return (
			<div>
				<div style={{display : 'flex'}}>
					<div className="user-field">{this.state.user.id}</div>
					<div className="user-field">{this.state.user.name}</div>
					<div className="user-field">{this.state.user.age}</div>
				</div>
				<div style={{display : 'flex'}}>				
					<div className="user-field">
						<input value={this.state.user.title} onChange={this.handleTitle} />
					</div>
					<div className="user-field">
						<input value={this.state.user.address} onChange={this.handleAddress}/>
					</div>
					<div className="user-field">
						<input value={this.state.user.postnummer} onChange={this.handlePost}/>
					</div>
				</div>
				<div style={{display : 'flex'}}>
					<div className="user-field">{this.state.user.mobile}</div>
				</div>
				{this.state.user.registeredIn.length > 0 ?
					(<Systems userSystems={this.state.user.registeredIn}/>) : null}
			</div>
		);
	}
	constructor(props: any) {
		super(props);
		this.state = { user: {}}
		this.handleTitle = this.handleTitle.bind(this);
		this.handleAddress = this.handleAddress.bind(this);
		this.handlePost = this.handlePost.bind(this);
	}
	componentWillMount() {
		this.setState({
			user: users.filter(x => x.id == this.props.match.params.id)[0]
		})
	}
	
	handleTitle(event: any) {
		this.setState({user:  { ...this.state.user, title: event.target.value}});
		
	}	
	handleAddress(event: any) {
    this.setState({user:  { ...this.state.user, address: event.target.value}});
	}
	
	handlePost(event: any) {
    this.setState({user:  { ...this.state.user, postnummer: event.target.value}});
  }
	
}

export default userdetails;