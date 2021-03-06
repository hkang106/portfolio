import React from 'react';
import { Label, Item } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

//gt: "http://drive.google.com/uc?export=view&id=14eyEQVkwcwD4DH0jQFGmDlqMxjvbhH6Z"
//kaist; "http://drive.google.com/uc?export=view&id=1t7KOj0oa4bhmZymdRAUL83U6UsbYPyGN"
//homedepot: "http://drive.google.com/uc?export=view&id=1gEBEFgzUUl08_OaFmuk-wJOnttrO_cGq"
//hyundai: "http://drive.google.com/uc?export=view&id=1HK_DXmvftq8RHdBN2lNsOrnxqF4H6YPn"
//dow: "http://drive.google.com/uc?export=view&id=1aT56b8CTeowtDmY7zybuM3vHx53p7vcG"
const Misc = () => (
	<Item.Group>
		<Item>
			<Item.Image size="tiny" src={require('images/misc/gt.png')} />

			<Item.Content>
				<Item.Header as="a">
					<a
						href="http://drive.google.com/uc?export=view&id=1QRdSlOcWvzy-E1brCG3DiCboBsS-c6pc"
						target="_blank"
						rel="noopener noreferrer"
					>
						학위 증명서
					</a>
				</Item.Header>

				<Item.Meta>
					<Label color="yellow">산업공학</Label>
					<Label color="yellow">High Honor Graduation</Label>
				</Item.Meta>
			</Item.Content>
		</Item>

		<Item>
			<Item.Image size="tiny" src={require('images/misc/kaist.png')} />

			<Item.Content>
				<Item.Header as="a">
					<a
						href="http://drive.google.com/uc?export=view&id=1M5rM2BTVT1xinSRkkSqfxa_VF-cwKeD-"
						target="_blank"
						rel="noopener noreferrer"
					>
						석사 졸업 증명서
					</a>
				</Item.Header>

				<Item.Meta>
					<Label color="blue">지식서비스공학대학원(산업공학)</Label>
				</Item.Meta>
			</Item.Content>
		</Item>

		<Item>
			<Item.Image size="tiny" src={require('images/misc/homedepot.jpg')} />

			<Item.Content>
				<Item.Header as="a">
					<a
						href="https://drive.google.com/open?id=1zYG5Vu4B8qkRtcZ80gRzmgft1UZ_OfCZ"
						target="_blank"
						rel="noopener noreferrer"
					>
						Home Depot 석사 입학 추천서
					</a>
				</Item.Header>

				<Item.Meta>
					<Label color="orange">Forecasting & Analytics Department</Label>
				</Item.Meta>
			</Item.Content>
		</Item>

		<Item>
			<Item.Image size="tiny" src={require('images/misc/hyundai.jpg')} />

			<Item.Content>
				<Item.Header>현대카드 장학금</Item.Header>
				<Item.Meta>
					<Label color="black">솔브릿지국제대학</Label>
					<Label color="black">2010년 성적 우수 장학생</Label>
				</Item.Meta>
			</Item.Content>
		</Item>

		<Item>
			<Item.Image size="tiny" src={require('images/misc/dow.png')} />

			<Item.Content>
				<Item.Header as="a">
					<a href="https://news.joins.com/article/17038530" target="_blank" rel="noopener noreferrer">
						다우 케미칼 장학금
					</a>
				</Item.Header>

				<Item.Meta>
					<Label color="red">2015년 석사 우수 장학생</Label>
				</Item.Meta>
			</Item.Content>
		</Item>
	</Item.Group>
);

export default Misc;
