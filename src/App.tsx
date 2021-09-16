import { useEffect, useState } from "react";
import Box from "./components/Box";
import Button from "./components/Button";
import "./styles/global.scss";

export function App() {
  const [newCase, setNewCase] = useState("");
  const [todo, setTodo] = useState<String[]>([]);
  const [inprogress, setinprogress] = useState<String[]>([]);
  const [done, setDone] = useState<String[]>([]);
  const handleNewCase = (e: any) => {
    e.preventDefault();
    setTodo([...todo, newCase]);
    setNewCase("");
  };

  const toProgress = (item: any, e: any) => {
    e.preventDefault();
    setTodo(todo.filter((filt) => filt !== item));
    setinprogress([...inprogress, item]);
  };
  const toDone = (item: any, e: any) => {
    e.preventDefault();
    setinprogress(inprogress.filter((filt) => filt !== item));
    setDone([...done, item]);
  };
  return (
    <div className="container">
      <div className="grid grid-template-columns-1 ">
        <div className="divmaster">
          <h1>New task</h1>
          <form onSubmit={handleNewCase}>
            <div>
              <textarea
                value={newCase}
                onChange={(e) => setNewCase(e.target.value)}
              />
            </div>
            <Button>Salvar</Button>
          </form>
        </div>
        <div className="divmaster">
          <h1>toDo's</h1>

          {todo.map((doness, index) => (
            <div key={index}>
              <Box btnName={">"} btnFn={() => toProgress(doness, event)}>
                {doness}
              </Box>
            </div>
          ))}
        </div>
        <div className="divmaster">
          <h1>in progress</h1>

          {inprogress.map((don, index) => (
            <div key={index}>
              <Box btnName={">"} btnFn={() => toDone(don, event)}>
                {don}
              </Box>
            </div>
          ))}
        </div>
        <div className="divmaster">
          <h1>done</h1>

          {done.map((done, index) => (
            <div key={index}>
              <Box>{done}</Box>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
