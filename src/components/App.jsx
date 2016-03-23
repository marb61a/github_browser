import React, {component} from 'react';
import ReactDOM from 'react-dom';

class App extends component{
    constructor(props){
        super(props);
        this.state = {
            username: 'bradtraversy',
			userData: [],
			userRepos: [],
			perPage: 5
        };
        }
        
        render(){
            return(
			<div>
				{this.props.clientId}
			</div>
		);
    }
}

App.propTypes ={
    clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};

App.defaultProps = {
    clientId : "",
    clientSecret : ""
};

export default App;

