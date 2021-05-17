import React from 'react'
import Typed from 'react-typed';

const Main = (props) => {
    return (
        <div>
            <div className= "header-wrapper">
            <div className= "main-info">
                
                <Typed
                className="typed-text"
                strings={["Music is Art", "Music is Expression", "Music is Passion", "Music is Creativity", "Music is Dedication", "Music is for Everyone", "Music is Life", "Music is in You..............", "Music is " ]}
                typeSpeed= {70}
                backSpeed= {70}
                loop
                >

                </Typed>
                {props.children}
            
            </div>
            
        </div>
        <div className="background"></div>
        </div>
    )
}

export default Main
