import React, {Component} from "react";
import "./css/styles.css";

class State extends Component{
createTasks(){
    return <div></div>   
}
render(){
var stateEntries = this.props.entries;
//state items are rendered by calling map function on state items entries and createTask function respectively
var listItems = stateEntries.map(this.createTasks);
return(
/* Fragment is used to group a list of children without adding extra nodes to the DOM */
    <ul>
        <React.Fragment>
            {listItems}
        </React.Fragment>
    </ul>
);
}
};
export default State;
