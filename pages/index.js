import { connect } from 'react-redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';

// import "bootstrap/dist/css/bootstrap.min.css";

const Index = () => (
  <Layout title="Home">
    <h2 className="title is-2">Bienvenido</h2>
    <p>

    </p>
  </Layout>
);

Index.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default connect(state => state)(Index);
