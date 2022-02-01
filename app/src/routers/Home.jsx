import { Link } from "react-router-dom";

import { Title } from "@components/Basic";

export default function Routers() {
  return (
    <>
      <Title>Good</Title>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
