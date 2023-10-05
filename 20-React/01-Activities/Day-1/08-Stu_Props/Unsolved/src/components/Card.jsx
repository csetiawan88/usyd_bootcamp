// TODO: Modify this function so that it accepts props from the parent component
export default function Card(props) {
  const { name, description, id } = props; // Destructure props to access the data

  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };

  // TODO: Update the return statement to display the data we received as props
  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`http://placekitten.com/${randomWidth()}`}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">Name: {name/* Display the kitten's name here */}</h5>
          <p className="card-text">Description: {description/* Display the kitten's description here */}</p>
          <p className="card-text">ID: {id/* Display the kitten's id here */}</p>
          <a href="#" className="btn btn-primary">
            Adopt {name/* Display the kitten's name here */}
          </a>
        </div>
      </div>
    </div>
  );
}
