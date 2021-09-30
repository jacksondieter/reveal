import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="app-header">
      <Link to="/create">reveal.io</Link>
    </header>
  );
}
