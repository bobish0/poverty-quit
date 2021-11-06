import React, {Component} from 'react';
import './earn.css';

import FooterPage from '../components/FooterPage'
import './news.css';
import ParticleBackground from './particle-js.js';
import {Card, Button, CardMenu, IconButton, CardTitle, CardText,CardActions, DataTable, TableHeader} from 'react-mdl';

import Logo2 from '../img/logo2.png';
import Binance1 from '../img/binance6.jpg';
import Coinbase1 from '../img/coinbase5.png';
import Swissborg1 from '../img/swissborg5.jpg';
import Coinex from '../img/coinex1.jpg';
import Kucoin1 from '../img/kucoin3.png';
import Fiverr1 from '../img/fiverr1.png';
import Crypto1 from '../img/crypto5.jpg';
import NEWS from '../img/news_example.png';


{/* IGNORE EARN.JS FOR NOW, THIS IS AN OLD REDUNTANT HAIRBALL*/}

class Earn extends Component {

    render()  {
        return (

            <div>
				<ParticleBackground/>


	<div className ='first-page-landing'>

<img className ='image-logo' src={Logo2}/>

</div>


		<div className = 'description'> 

<br></br>
<h4><u>Earning Page</u></h4>

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
					<Button colored target='_blank' href={'https://www.fiverr.com/'}>Learn More</Button>
				</CardActions>
			</Card>
	
		</div>  {/* End of Card-Layout-2*/}

<br></br>   


		</div>

		<FooterPage/>

            </div>
        )
    }
}

export default Earn; 