// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"
const styles = {
  header: {
    // Add your header styles here
    backgroundColor: 'red',
    color: 'white',
    padding: '20px',
  },
  h1: {
    // Add your h1 styles here
    fontSize: '24px',
    fontWeight: 'bold',
  },
};
function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <header className="header" style={styles.header}>
    <h1 style={styles.h1}>Welcome</h1>
  </header>
  );
}

export default Navbar;
