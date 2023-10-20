import "./Main.css";
import { list } from "../data/list";

const Main = () => {
  const listLength = list.length;
  const animationDelay = 0.2;

  return (
    <main className="main__container">
      <h1 className="main__title">Fun facts about React</h1>
      <ul className="main__facts">
        {list.map((fact: string, index: number) => (
          <li 
            className="main__fact" 
            key={index}
            style={{ animationDelay: `${animationDelay * index * listLength}s` }}
          >
            {fact}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
