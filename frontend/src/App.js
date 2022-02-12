import "./styles/global.css";

import { StrictMode } from "react";

import { LibraryProvider } from "./context/Library";
import { AuthProvider, useAuth } from "./context/Auth";

import Nav from "./components/Nav"
import BookList from "./components/BookList";
import FilterBooks from "./components/FilterBooks";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const App = () => {

  return (
    <StrictMode>
      <AuthProvider>
        <Nav />
        <section className="ResponsiveContainer">
          <PageContent />
        </section>
      </AuthProvider>
    </StrictMode>
  );
};

const PageContent = () => {
  const auth = useAuth();
  
  const authForms = (
    <>
      <section className="AccountManagement">
        <LoginForm />
      </section>
      <br />
      <section className="AccountManagement">
        <RegisterForm />
      </section>
      <br />
    </>
  );

  return (
    <LibraryProvider>
      {auth.token ? (
        <>
          <FilterBooks />
          <BookList />
        </>
        ) : authForms}
    </LibraryProvider>
  );
};

export default App;
