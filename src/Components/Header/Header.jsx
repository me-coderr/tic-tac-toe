import React from 'react';

export default function Header({logo}) {

  return (
    <>
        <header className="site-header">
            <div className="heading">
                <img src={logo} alt="" className="heading-img" />
                <h1 className="heading-text">tic tac toe</h1>
            </div>
      </header>
    </>
  )
}