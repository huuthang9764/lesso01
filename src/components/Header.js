import React,{Fragment} from 'react'

const Header = () => {
  const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  };

  return (
    <Fragment>
      <header style={headerStyle}>
        <h1>Thi Trắc nghiệm </h1>
      </header>
    </Fragment>
  );
};

export default Header
