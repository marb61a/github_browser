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
        
        // Get user data from Github
        getUserData(){
            $.ajax({
                url : 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
                dataType : 'json',
                cache : 'false',
                success : function(data){
                    this.setState({userData: data});
                    console.log(data);
                }.bind(this),
                error : function(xhr, status, err){
				    this.setState({username: null});
				    alert(err);
			    }.bind(this)
            });
        }
        
        // Get user repos from Github
        getUserRepos(){
    		$.ajax({
    			url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
    			dataType: 'json',
    			cache: false,
    			success: function(data){
    				this.setState({userRepos: data});
    			}.bind(this),
    			error: function(xhr, status, err){
    				this.setState({username: null});
    				alert(err);
    			}.bind(this)
    		});
    	}
        
        componentDidMount(){
    		this.getUserData();
    		this.getUserRepos();
    	}
        
        render(){
            return(
			<div>
				<Profile userData = {this.state.userData} />
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

