import React, {Component} from 'react';
import Logo2 from '../img/logo2.png';
import NEWS from '../img/news_example.png';
import './news.css';
import {Card, Button, CardMenu, IconButton, CardTitle, CardText,CardActions, DataTable, TableHeader} from 'react-mdl';
import Typical from 'react-typical';


import ParticleBackground from './particle-js';


import card_info from '../components/constants/constants';
import FooterPage from '../components/FooterPage.js'




class Home extends Component {

    render()  {
        return (

            <div>

    
				<ParticleBackground/>

				<div className ='first-page-landing'>

				<img className ='image-logo' src={Logo2}/>

				</div>
			

				{/* typical-react-library */}
				<div className ='description'>
						<br></br>
						<h4>Learn. Invest. Earn. </h4>
						<div className = 'typical-react'>
							<Typical
							steps={['Poverty Quit is your number one place to earn money online. Quit Poverty Today!', 2000]}
							loop={Infinity}
							wrapper="p"
							
							/>
				</div>


				{/*Cards for every Crypto-currency website are displayed Here*/}	
				{card_info.map(item => ( 
					<Card className='card-margin' shadow={3} style={{width: '350px', height: '320px', margin: 'auto'}} key={item.id}>	
						<CardTitle expand style={{color: '#fff', background: `url(${item.image}) center /cover `}}></CardTitle>
						<CardText>{item.text}</CardText>
						<CardActions border>
						<Button colored target='_blank' href={item.link}>{item.button}</Button>
						</CardActions>
					</Card>
					
				))}

				<div className = 'card-layout-1'>
			
				</div>{/* End of Card-Layout-1*/}


				<br></br>   
				<hr></hr>

				<h4>Create a Wallet to Track your Investments </h4>
				
			
				<p>On Poverty Quit you can create your own wallet and fill them with your investments so that you in an easy way can track your earnings. Do this in <b><u> Portfolio</u></b>.</p>	

				<h4><u>Example of a Wallet: </u></h4>

				<div className = 'data-table'>
					<DataTable
						shadow={0}
						rows={[
							{currency: 'Bitcoin (BTC)', quantity: 5, price: 53697 + '$', value:268+","+485  + ' $'},
							{currency: 'Ethereum (ETH)', quantity: 10, price: 3856 + '$', value:38+","+560  + ' $'},
							{currency: 'Cardano (ADA)', quantity: 10, price: 1.85 + '$', value:18.5  + ' $'},
							{currency: 'Polkadot (DOT)', quantity: 25, price: 40 + '$', value:1000  + ' $'},
							{currency: 'Ripple (XRP)', quantity: 10000, price: 1.35 + '$', value:13+","+500  + ' $'},
							{currency: 'Binance Coin (BNB)', quantity: 10, price: 635 + '$', value:6350  + ' $'}
						]}
					>

						<TableHeader name="currency" tooltip="Name of the CryptoCurrency">Currency</TableHeader>
						<TableHeader name="price" tooltip="Price of the Asset">Price USD</TableHeader>
						<TableHeader numeric name="quantity" tooltip="Quantity of the Asset">Quantity</TableHeader>
						<TableHeader numeric name="value" tooltip="Total Value">Value</TableHeader>


					</DataTable>

				</div>
			<br></br>
			<hr></hr>

			<div className ='news-intro'>
				<h4>Follow The Latest News On Your Investments.</h4>
			<p>Use our custom search-bar on the <b><u>News-Section</u></b> to track the financial asset of your choice. The latest news will appear automatically after you've submitted your search.</p>

			<h4><u>Example of a News-Article:</u></h4>

			<Card shadow={0} style={{width: '356px', height: '236px', background: `url(${NEWS} ) center / cover`, margin: 'auto'}}>
					<CardTitle expand />
				</Card>

				<br></br>
				
				</div>

			<hr></hr>

			<h4><u>Coming Soon:</u></h4>
			<p><b>Tutorials on Blockchain Technology.</b></p>
			<p><b>Expandable Asset Support.</b></p>
			<p><b>Graphical interface.</b></p>
			<p><b>Back-End Storage.</b></p>

			<FooterPage/>

		</div>


	</div>

	
              
        )
    }
}

export default Home;