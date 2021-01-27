import React, { Component } from 'react';

class App extends Component {

	onFileChangeHandler = event => {

		console.log(event.target.files[0])
		electron.transferApi.getLocalFilePath(event.target.files[0].path)

	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Hello World!</h1>
				</header>
				<input type="file" name="file" onChange={this.onFileChangeHandler} />
			</div>
		);
	}
}

export default App;
