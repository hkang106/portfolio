import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { Divider, Grid, Image, List, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// import ImageLoader from 'react-imageloader';
//"http://drive.google.com/uc?export=view&id=1bUMRsdx49JDFfIR_IzjQKwhrH6mvE4D1"
const PersonInfo = () => {
	return (
		<div className="profile">
			<Container textAlign="center">
				<Grid centered columns={2} relaxed="very">
					<Grid.Column width={6}>
						<Image src={require('images/profile-main.jpg')} size="medium" circular />
					</Grid.Column>
					<Grid.Column width={9}>
						<br />
						<br />

						<List size={'massive'}>
							<List.Item>
								<List.Icon name="users" />
								<List.Content>강현국(Joshua)</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name="mail" />
								<List.Content>
									<a href="mailto:hkang106@gmail.com">hkang106@gmail.com</a>
								</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name="call" />
								<List.Content>010-3776-2926</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name="marker" />
								<List.Content>서울특별시 성북구 종암동 34-7 천우네오젠 102동 501호</List.Content>
							</List.Item>
						</List>
					</Grid.Column>
				</Grid>

				<Divider hidden />
				<div className="verse">
					<span>가로되 찬송하리로다 주의 이름으로 오시는 왕이여 하늘에는 평화요 가낭 높은 곳에는 영광이로다 하니(눅19:38)</span>
				</div>
			</Container>
		</div>
	);
};

export default PersonInfo;
