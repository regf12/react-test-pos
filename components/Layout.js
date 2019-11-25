import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
import actions from '../redux/actions';

const Layout = ({ children, title, isAuthenticated, deauthenticate }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
    </Head>
    <div>
      <h3 className="title is-2" >React-test-pos</h3>
    </div>
    <div className="tabs is-centered">
      <ul>
        <Link href="/"><a>Home</a></Link>
        {!isAuthenticated && <Link href="/signin"><a>Login</a></Link>}
        {!isAuthenticated && <Link href="/signup"><a>Registro</a></Link>}
        {isAuthenticated && <li onClick={deauthenticate}><a>Cerrar sesion</a></li>}
      </ul>
    </div>

    <div className="has-text-centered">
      { children }
    </div>
  </div>
);

const mapStateToProps = (state) => (
  {isAuthenticated: !!state.authentication.token}
);

export default connect(mapStateToProps, actions)(Layout);
