import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = () => {
  return (
    <>
      <header>
        <h1>urlap használata</h1>
      </header>
      <nav>
        <ul className="nav  navbar-tabs">
          <li class="nav-item">
            <Link className="nav-link active" to="/">
              Kezdőoldal
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/urlap">
              Űrlap
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/adatok">
              Adatok
            </Link>
          </li>
        </ul>
      </nav>
      <article>
        {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
        <Outlet />
      </article>
    </>
  );
};

export default Layout;
