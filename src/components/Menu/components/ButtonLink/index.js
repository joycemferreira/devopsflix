import React from 'react';

function ButtonLink(props) { // ButtonLink component -- needs to start in capital letter
    //props => {className:"className", href="myLink"}
    return(
        <a className={props.className} href={props.href}> 
            {props.children}
        </a>
    );

}

export default ButtonLink;