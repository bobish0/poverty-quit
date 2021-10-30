import React, {Component} from 'react';
import Data from './cryptoApi/cryptoList100.json';
import '../App.css';
import './portfolio.css';

import { FABButton, Icon, Textfield, Button,Dialog, DialogTitle,DialogContent,DialogActions } from 'react-mdl';

import  {useState} from 'react';




function SearchCrypto(){


     const [searchTerm, setSearchTerm] = useState('');

     return(
         <div className='portfolio'>



          {/* Textfield for search goes down here */}

          <Textfield onChange={event=> {setSearchTerm(event.target.value)}} label="Expandable Input" expandable expandableIcon="search"></Textfield>
                      
                
          {Data.filter((val) => {
              if (searchTerm ==''){
                  return val
              } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
              }

          }).map((val,key)=> {
              
              return (
              
              <div className='post' key={key}>
                        <h4>{val.market_cap_rank}.<u>{val.name}</u></h4>
                        <p><u>Price:</u> {val.current_price}usd</p>
                        <p><u>Change 24h:</u> {val.price_change_percentage_24h}%</p>
      {/* Numeric Textfield with floating label */}
<Textfield
    onChange={() => {}}
    pattern="-?[0-9]*(\.[0-9]+)?"
    error="Input is not a number!"
    label="Amount..."
    style={{width: '100px'}}
    floatingLabel
/> 

{/* Raised button with ripple */}
<Button raised ripple>Add to Wallet</Button>
                


                        <p></p>
                  </div>
              );
          })}
 </div>
          
     )
       

}
export default SearchCrypto;

