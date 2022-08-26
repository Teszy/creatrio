import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h2>Header</h2>
      </Link>
      <nav>
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
        </ul>
      </nav>
    </header>
  );
}
