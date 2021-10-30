import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import FooterPage from './components/FooterPage';
import Logo3 from './img/logo3.png';


class App extends Component {
 
  render() {
    
 return (
<div style={{height: '100vh', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className="header-color navbar-font" title={<span><span style={{ color: '#ddd' }}> </span>{<strong>Poverty Quit</strong>}</span>}>
           
            <Navigation className="navbar-mobile-view">
                <Link className ='no-decoration enlargen' to="/home">Home</Link>
                <Link className ='no-decoration enlargen' to="/aboutme">About</Link>
                <Link className ='no-decoration enlargen' to="/portfolio">Portfolio</Link>
                <Link className ='no-decoration enlargen' to="/news">News</Link>
                <Link className ='no-decoration enlargen' to="/earn">Earn</Link>
            </Navigation>

        </Header>
        <Drawer className ="drawer-style navbar-font" title="POVERTY QUIT">
            <Navigation>
            <Link className ='no-decoration' to="/home">Home</Link>
            <Link className ='no-decoration' to="/aboutme">About</Link>
            <Link className ='no-decoration' to="/portfolio">Portfolio</Link>
            <Link className ='no-decoration'  to="/news">News</Link>
            <Link className ='no-decoration' to="/earn">Earn</Link>
             
            </Navigation>
        </Drawer>

        <Content>

            <div className ="page-content"/>
            <Main/>

        </Content>
    </Layout>




</div>
  );

  }
 
}

export default App;
