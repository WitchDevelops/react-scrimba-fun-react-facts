import "./Main.css";
import { list } from "../data/list";

const Main = () => {
  return (
    <main className="main__container">
      <h1 className="main__title">Fun facts about React</h1>
      <ul className="main__facts">
        {list.map((fact: string, index: number) => (
          <li className="main__fact" key={index}>
            {fact}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
