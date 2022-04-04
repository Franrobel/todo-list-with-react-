import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ListTasksProvider } from "./Context/ListTasks-Context";

const App = () => {
  return (
    <div>
      <Header />
      <ListTasksProvider>
        <Main />
      </ListTasksProvider>
    </div>

  )
}
export default App;
