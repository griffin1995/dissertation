import { AppRouter } from "./router/Router";

import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.scss";
import { Navbar } from "./components";

function App() {
  return (
    <div className={styles["wrapper"]}>
      <header>
        <Navbar />
      </header>
      <main className={styles["main"]}>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
