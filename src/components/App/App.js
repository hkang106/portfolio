import React, { Component } from 'react';
import './App.css';
import { Container, Header, Divider, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import Publication from 'components/Publication';
import Patent from 'components/Patent';
import Project from 'components/Project';
import Misc from 'components/Misc';
import Footer from 'components/Footer';
import PersonInfo from 'components/PersonInfo';
import scrollToComponent from 'react-scroll-to-component';
class App extends Component {
	state = { activeItem: 'JOSHUA' };

	handleJoshuaClick = (e) => {
		this.setState({ activeItem: 'JOSHUA' });
		scrollToComponent(this.joshua, {
			offset: -100,
			align: 'top',
			duration: 500,
			ease: 'inCirc'
		});
	};
	handlePublicationClick = (e) => {
		this.setState({ activeItem: 'PUBLICATION' });
		scrollToComponent(this.publication, {
			offset: -45,
			align: 'top',
			duration: 500,
			ease: 'inCirc'
		});
	};
	handlePatentClick = (e) => {
		this.setState({ activeItem: 'PATENT' });
		scrollToComponent(this.patent, { offset: -45, align: 'top', duration: 500, ease: 'inCirc' });
	};
	handleProjectClick = (e) => {
		this.setState({ activeItem: 'PROJECT' });
		scrollToComponent(this.project, { offset: -45, align: 'top', duration: 500, ease: 'inCirc' });
	};
	handleMiscClick = (e) => {
		this.setState({ activeItem: 'MISC' });
		scrollToComponent(this.misc, { offset: -45, align: 'top', duration: 500, ease: 'inCirc' });
	};

	componentDidMount = () => {
		console.log(this.state.activeItem);
		scrollToComponent(this.joshua, {
			offset: -100,
			align: 'top',
			duration: 0,
			ease: 'inCirc'
		});
	};

	componentDidUpdate = () => {};

	componentWillUnmount = () => {
		scrollToComponent(this.joshua, {
			offset: -100,
			align: 'top',
			duration: 0,
			ease: 'inCirc'
		});
	};

	render() {
		const { activeItem } = this.state;
		return (
			<div>
				<div className="navi">
					<Menu pointing secondary fixed="top" size="massive">
						<Menu.Item
							name="JOSHUA"
							active={activeItem === 'JOSHUA'}
							onClick={() => this.handleJoshuaClick()}
						/>
						<Menu.Item
							name="PUBLICATIONS"
							active={activeItem === 'PUBLICATION'}
							onClick={() => this.handlePublicationClick()}
						/>

						<Menu.Item
							name="PATENT"
							active={activeItem === 'PATENT'}
							onClick={() => this.handlePatentClick()}
						/>
						<Menu.Item
							name="PROJECT"
							active={activeItem === 'PROJECT'}
							onClick={() => this.handleProjectClick()}
						/>
						<Menu.Item name="MISC" active={activeItem === 'MISC'} onClick={() => this.handleMiscClick()} />
					</Menu>
				</div>
				<section ref={(ref) => (this.joshua = ref)} />
				<div className="info">
					<PersonInfo />
				</div>

				<Container>
					<div className="app">
						<section ref={(ref) => (this.publication = ref)} />

						<Header size="huge">Publications</Header>

						<Publication />
						<Divider />

						<br />
						<br />
						<section ref={(ref) => (this.patent = ref)} />

						<Header size="huge">Patent</Header>

						<Patent />
						<Divider />
						<br />
						<br />
						<section ref={(ref) => (this.project = ref)} />

						<Header size="huge">Project</Header>

						<Project />
						<Divider />
						<br />
						<br />
						<section ref={(ref) => (this.misc = ref)} />

						<Header size="huge">Misc</Header>

						<Misc />
					</div>
				</Container>

				<Divider />

				<Footer />
			</div>
		);
	}
}

export default App;
