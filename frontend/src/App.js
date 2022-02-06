import "./styles/global.css";

import { StrictMode } from "react";

import { LibraryProvider } from "./components/Library";
import BookList from "./components/BookList";
import Nav from "./components/Nav"
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

const App = () => {

  return (
    <StrictMode>
      <Nav />
      <section className="ResponsiveContainer">
        <LibraryProvider>
          <section id="AccountManagement">
            <RegisterForm />
            <LoginForm />
          </section>
          <br />
          <hr/>
          {/* <AddBookForm /> */}
          <BookList />
        </LibraryProvider>
      </section>
    </StrictMode>
  );
}

export default App;