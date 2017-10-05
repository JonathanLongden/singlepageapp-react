import React from 'react';

class Features extends React.Component {
	constructor(props) {
	super(props);
	this.state={};
	this.goRoot= this.goRoot.bind(this);
	}

    goRoot(){
		console.log('Button clicked, go to root');
		this.props.history.push('/');
	}
render() {
    return (      
        <div className="container-fluid">
            <div className="col-sm-12">
                <p>Features page</p>
                <button type="button" onClick={this.goRoot} className="btn btn-primary">Go to root</button>
            </div>
        </div>
    );
  }
}

export default Features;