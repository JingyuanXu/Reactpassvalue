import React, { Component } from 'react';
class List extends Component {
	render(){
      return(
        <ol className='userList'>
          {
        	this.props.users.map((user)=>(
      		 <li key={user.id}>
				{user.name}
         	 </li>
      		))
          }
         
        </ol>
      )
    }
}

export default List;