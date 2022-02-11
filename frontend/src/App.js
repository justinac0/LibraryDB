import "./styles/global.css";

import { StrictMode } from "react";

import { LibraryProvider } from "./context/Library";
import BookList from "./components/BookList";
import Nav from "./components/Nav"
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { AuthProvider } from "./context/Auth";

const App = () => {

  return (
    <StrictMode>
      <AuthProvider>
        <Nav />
        <section className="ResponsiveContainer">
          <LibraryProvider>
            <section className="AccountManagement">
              <LoginForm />
            </section>
            <br />
            <section className="AccountManagement">
              <RegisterForm />
            </section>
            <br />
            {/* <AddBookForm /> */}
            <BookList />
          </LibraryProvider>
        </section>
      </AuthProvider>
    </StrictMode>
  );
};

export default App;