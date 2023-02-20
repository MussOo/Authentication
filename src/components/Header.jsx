

function Header() {
  console.log(localStorage.getItem('token'))
  return <div className='header'>token  : {localStorage.getItem('token')}</div>;
}

export default Header;
