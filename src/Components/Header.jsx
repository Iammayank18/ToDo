
// import PropTypes from 'prop-types'
import Button from './Button';
import React from 'react'

const Header = ({title,onAdd,showAdd}) => {
  
    return (
        <header className="header" >
            <h1>{title} tracker</h1>
            <Button 
            onClick={onAdd}
            color={showAdd ? 'Red':'Green'}
            text={showAdd ? 'Close' : 'Add'}/>
          
        </header>
    )
}

// inline css
// const HeadStyle ={
// color: 'red',
// backgroundColor:'black'
// }


export default Header;
