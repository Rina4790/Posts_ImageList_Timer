import { Posts } from "./components/Posts/Posts.tsx";
import { ImageList } from "./components/Images/ImageList";
import { Clock } from "./components/Timer/Timer";

function App() {
  //   const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      <Posts />
      <ImageList />
      <Clock />
    </div>
  );
}

export default App;
