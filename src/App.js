import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Router from "./router";
import { setUser } from "./redux/actions/actionCreators";
import { auth } from "./firebase";
import "./App.css";

function App({ user, userLogin }) {
  useEffect(() => {
    /* login */
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        userLogin(authUser);
      } else {
        userLogin(null);
      }
    });
    /* cleanup */
    return () => {
      unsubscribe();
    };
  }, [userLogin]);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (authUser) => {
      dispatch(setUser(authUser));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
