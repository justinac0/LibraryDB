import "./styles/global.css";

import { StrictMode } from "react";

import { LibraryProvider } from "./components/Library";
import BookList from "./components/BookList";
import Nav from "./components/Nav"

const App = () => {

  // async function test() {
  //   const res = await fetch("http://localhost:5000/testing");
  //   const data = await res.json();

  //   console.log(data.ok);
  // }

  return (
    <StrictMode>
      <Nav />
      <section className="ResponsiveContainer">
        <LibraryProvider>
          {/* <AddBookForm /> */}
          <BookList />
        </LibraryProvider>
      </section>
    </StrictMode>
  );
}

export default App;