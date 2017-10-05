import React from 'react';
import $ from 'jquery';

class Features extends React.Component {
	constructor(props) {
	super(props);
	this.state={};
	this.goRoot= this.goRoot.bind(this);
	}
	
	componentDidMount(){
        $(document).ready(function(){
            $(".textfromjquery").text("This text is using Jquery!");
        });
    	}

    	goRoot(){
		console.log('Button clicked, go to root');
		this.props.history.push('/');
	}
render() {
    return (      
        <div className="container-fluid">
            <div className="col-sm-12">
	    	<p className="textfromjquery">loading...</p>
                <p>Features page</p>
                <button type="button" onClick={this.goRoot} className="btn btn-primary">Go to root</button>
            </div>
        </div>
    );
  }
}

export default Features;
