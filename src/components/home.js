import React, {Component} from 'react';

import './news.css';
import {Card, Button, CardMenu, IconButton, CardTitle, CardText,CardActions, DataTable, TableHeader} from 'react-mdl';
import FooterPage from './FooterPage.js'
import Typical from 'react-typical';
import ParticleBackground from './particle-js';
import card_info from './constants/constants';

import Logo2 from '../img/logo2.png';
import Binance1 from '../img/binance6.jpg';
import Coinbase1 from '../img/coinbase5.png';
import Swissborg1 from '../img/swissborg5.jpg';
import Coinex from '../img/coinex1.jpg';
import Kucoin1 from '../img/kucoin3.png';
import Crypto1 from '../img/crypto5.jpg';
import NEWS from '../img/news_example.png';


class Home extends Component {

    render()  {
        return (

            <div>

    
				<ParticleBackground/>

				<div className ='first-page-landing'>

				<img className ='image-logo' src={Logo2}/>

			</div>

	
			
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
		
				
				
				


		

		<div className = 'card-layout-1'>
			
			<Card className='card-margin' shadow={3} style={{width: '350px', height: '320px', margin: 'auto'}}>	
				<CardTitle expand style={{color: '#fff', background: `url(${Binance1}) center /cover `}}> 10% off trading.</CardTitle>
				<CardText>
					Binance is one of the Largest Crypto-sites in the world.
				</CardText>
				<CardActions border>
				<Button colored target='_blank' href={'https://www.binance.com/en'}>Learn More</Button>
				</CardActions>
			</Card>
			
			<Card className='card-margin' shadow={3} style={{width: '350px', height: '320px', margin: 'auto'}}>
				<CardTitle expand style={{color: '#fff', background: `url(${Coinbase1}) 30% center / cover no-repeat `}}> Earn 29$ for Free.</CardTitle>
				<CardText>
					Coinbase is the most beginner-friendly Crypto Bank while being one of the largest in the world.  
				</CardText>
				<CardActions border>
					<Button colored target='_blank' href={'https://www.coinbase.com/'}>Learn More</Button>
				</CardActions>
			</Card>
			
			<Card  shadow={3} style={{width: '350px', height: '320px', margin: 'auto'}}>
				<CardTitle expand style={{color: '#fff', background: `url(${Swissborg1}) 30% center / cover no-repeat `}}>Earn 50$ for free.</CardTitle>
				<CardText>
				Swissborg is a Mobile-first Crypto-Plattform that allows you to trade and store crypto. 
				</CardText>
				<CardActions border>
					<Button colored target='_blank' href={'https://swissborg.com/'}>Learn More</Button>
				</CardActions>
			</Card>
			</div>{/* End of Card-Layout-2*/}

			<div className = 'card-layout-2'>
			<Card className='card-margin' shadow={3} style={{width: '350px', height: '320px', margin: 'auto'}}>
				
				<CardTitle expand style={{color: '#fff', background: `url(${Coinex}) 30% center / cover no-repeat`}}> 15% off trading.</CardTitle>
				<CardText>
					Coinex is no. 57 in the list of biggest exchanges + no need for identification. 
				</CardText>
				<CardActions border>
					<Button colored target='_blank' href={'https://www.coinex.com/'}>Learn More</Button>
				</CardActions>
			</Card>

			<Card className='card-margin' shadow={3} style={{width: '350px', height: '320px', margin: 'auto'}}>
				<CardTitle expand style={{color: '#fff', background: `url(${Kucoin1}) 30% center / cover no-repeat `}}>  20% off trading.</CardTitle>
				<CardText>
				Kucoin is inofficially the king of smaller cap coins. Great if you are looking for the next "moonshot".
				</CardText>
				<CardActions border>
					<Button colored target='_blank' href={'https://www.kucoin.com/'}>Learn More</Button>
				</CardActions>
			</Card>

			<Card className='card-margin' shadow={3} style={{width: '350px', height: '320px', margin: 'auto'}}>
			
				<CardTitle expand style={{color: '#fff', background: `url(${Crypto1}) 30% center / cover no-repeat `}}> 33% off trading.</CardTitle>
				<CardText>
					 Crypto.com will launch their own chain and already have their Visa-cards. 
				</CardText>
				<CardActions border>
					<Button colored target='_blank' href={'https://www.crypto.com/'}>Learn More</Button>
				</CardActions>
			</Card>
	
		</div>  {/* End of Card-Layout-2*/}

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