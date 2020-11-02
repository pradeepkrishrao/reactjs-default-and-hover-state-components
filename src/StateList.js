import React, {Component} from "react";
import State from "./State";
import "./css/styles.css";
import logo from "./images/logo.png";
import download from "./images/download.png";
import print from "./images/printer.png";
import del from "./images/delete.png";

class Menu extends React.Component{
    render(){
    return(
    <nav className="nav">
    <ul className="nav__menu">
    <li className="nav__menu-item">
    <a><strong className="ellipsis">&#8942;</strong></a>
    <Submenu />
    </li>
    </ul>
    </nav>
    )
    }
}

class Submenu extends React.Component{
    render(){
    return (
    <ul className="nav__submenu">
    <li className="nav__submenu-item">
    <a><img className="download1" src={download} alt="download.png" /><strong className="download">Download</strong></a>
    </li>
    <li className="nav__submenu-item">
    <a><img className="print1" src={print} alt="printer.png" /><strong className="print">Print</strong></a>
    </li>
    <li className="nav__submenu-item">
    <a><img className="del1" src={del} alt="del.png" /><strong className="del">Delete</strong></a>
    </li>
    </ul>          
    )
    }
}         

class StateList extends Component{
/* StateList component is first initialized. The constructor(props) method is only called once */
    constructor(props){
    super(props);
    this.state = {
    items: []
};
}
addItem(e){
    
/* By default, when the form is submitted, the page reloads and clears everything out. By calling, preventDefault, this event's default behaviour is overridden.*/
    e.preventDefault();
}
render(){
//onSubmit attribute in the form calls the event handler addItem(e) 
//<State entries={this.state.items}/> translates into markup to get rendered
return(
    <div className="container">
    <div className="state">
    <h4>Default State</h4>
    <form className="form-box" onSubmit={this.addItem}>
    <br />
    <img src={logo} className="img" alt=""></img><br /><br />
    <h5>Corporate Bylaws</h5>
    <article>An internal document that details the operating rules for the corporation and are typically adopted at the organizational meeting of the board of directors.</article><br />
    <button className="btn-prop" type="submit">View document</button>
    </form>
    </div>
    <div className="state">
    <h4>Hover State</h4>
    <form className="form-box" onSubmit={this.addItem}>
	<nav><Menu /></nav>
    <br />
    <img src={logo} className="img" alt="logo.png"></img><br /><br />
    <h5>Corporate Bylaws</h5>
    <article>An internal document that details the operating rules for the corporation and are typically adopted at the organizational meeting of the board of directors.</article><br />
    <button className="btn-prop" type="submit">View document</button>
    </form>
    </div>
        <State entries={this.state.items}/>
    </div>
);
}
}
export default StateList;
