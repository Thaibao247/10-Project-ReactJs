import "./App.css";
import Accordion from "./features/Accordion";
import Birthday from "./features/BirthdayRemider";
import Reviews from "./features/Reviews";
import Tab from "./features/Tab";
import TourReminder from "./features/TourReminder";
import Slider from "./features/Slider";
import LoremIpsum from "./features/LoremIpsum";
import ColorGenerate from "./features/ColorGenerate";
import GroceryBud from "./features/GroceryBud";
import TodoDnd from "./features/TodoDnd";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect exact from="/" to="/grocery" />
        <Route path="/grocery" component={GroceryBud} />
        <Route path="/birthDay" component={Birthday} />
        <Route path="/tour" component={TourReminder} exact />
        <Route path="/review" component={Reviews} />
        <Route path="/tab" component={Tab} />
        <Route path="/slide" component={Slider} exact />
        <Route path="/lorem" component={LoremIpsum} exact />
        <Route path="/color" component={ColorGenerate} exact />
        <Route path="/accordion" component={Accordion} exact />
        <Route path="/todo" component={TodoDnd} exact />
      </Switch>
    </div>
  );
}

export default App;
