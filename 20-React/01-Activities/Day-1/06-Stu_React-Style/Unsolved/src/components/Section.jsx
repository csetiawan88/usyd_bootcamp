// Import the Section.css file to grant access to some additional classNames
import '../styles/Section.css';

// TODO: Create a styles object called "styles"
const styles = {
  section: {
    // Add your section styles here
    backgroundColor: 'lightgray',
    padding: '20px',
  },
};

function Section() {
  // TODO: Add a style attribute to `section`
  return (
    <section className="section" style={styles.section}>
      <h2>Lorem Ipsum Dolor Sit Amet</h2>
      {/* Rest of your content */}
    </section>
  );
}

export default Section;
