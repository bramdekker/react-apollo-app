import Container from 'react-bootstrap/Container';

function Title() {
    return (
      <Container fluid className="text-center p-3 bg-secondary">
        <h2>An Apollo/GraphQL application</h2>
        <h4 className="text-light">It's using Bootstrap for styling and GraphQL for fetching data</h4>
      </Container>
    );
}

export default Title;