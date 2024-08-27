import EventSearch from './components/EventSearch';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/create-event" component={EventForm} />
        <Route path="/edit-event/:id" component={EventForm} />
        <Route path="/event/:id" component={EventDetail} />
        <Route path="/profile" component={Profile} />
        <Route path="/search" component={EventSearch} />
      </Switch>
    </Router>
  );
};

export default App;
