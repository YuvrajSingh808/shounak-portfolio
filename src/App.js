import Footer from "./Components/footer";
import Homepage from "./Home";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect } from "react";
import RangDe from "./projects/rangde";
import StoreInStore from "./projects/storeinstore";
import Optimize from "./projects/optimize";
import DMRC from "./projects/dmrc";
import PassionProjects from "./passionProjects";
import ScrollToTop from "react-scroll-up";
import { BsArrowUpCircleFill } from "react-icons/bs";
import upArrow from './assets/icons/up-arrow.png';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  if (!window.location.href.includes("dmrc")) {
    document.body.style.background = null;
  }
  return (
    <Router>
      <div className="font-sans relative">
        <div className="absolute z-0 w-full">
          <ScrollToTop showUnder={160}>
            <div className="flex text-2xl fill-current rounded-full -mr-4 sm:mr-0" style={{background: '#bfbfbf'}}>
              <img src={upArrow} className="w-8 hover:scale-110 transform-gpu ease-in-out duration-150" />
            </div>
          </ScrollToTop>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/rangde" component={RangDe} />
              <Route path="/storeinstore" component={StoreInStore} />
              <Route path="/optimize" component={Optimize} />
              <Route path="/dmrc" component={DMRC} />
              <Route exact path="/passionProjects" component={PassionProjects} />
            </Switch>
            <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
