import "./App.css";

import { StrictMode, useState } from "react";

import { LibraryProvider } from "./components/Library";
import BookList from "./components/BookList";
import Nav from "./components/Nav"
// import AddBookForm from "./components/AddBookFrom";

const App = () => {

  async function test() {
    const res = await fetch("http://localhost:5000/testing");
    const data = await res.json();

    console.log(data.ok);
  }

  return (
    <StrictMode>
      <Nav />
      <button onClick={test}>Hello!</button>

      <section className="Responsive">
        <LibraryProvider>
          {/* <AddBookForm /> */}
          <BookList />
        </LibraryProvider>
      </section>
    </StrictMode>
  );
}

export default App;