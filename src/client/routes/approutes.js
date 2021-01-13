import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import EditorPage from '../pages/editorPage';
import { ResultPage } from '../pages/resultPage';

export const AppPages = () => {
  return (
    <Switch>
      <Route path="/">
        <EditorPage />
      </Route>
      {/* <Route path="/result">
        <ResultPage />
      </Route>
      <Route path="/">
        <Redirect to="/psone" />
      </Route> */}
    </Switch>
  );
};
