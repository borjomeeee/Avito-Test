import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadMainFromLocalAction } from "./actions/Main.actions";
import MainNavigation from "./navigation/Main.navigation";

type IApp = {
  loadLocal: () => void;
};

const App = ({ loadLocal }: IApp) => {
  useEffect(() => {
    loadLocal();
  }, [loadLocal]);

  return <MainNavigation />;
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch: any) => ({
  loadLocal: () => dispatch(loadMainFromLocalAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
