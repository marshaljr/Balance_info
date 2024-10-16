import { useState } from "react";
import "./App.css";
import { Header } from "./components/header";
import { Balance } from "./components/balance";
import { IncomExpenses } from "./components/IncomExpenses";
import { Transactions } from "./components/Transactions";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvder } from "./context/GlobalState";

function App() {
  const [count] = useState(0);

  return (
    <GlobalProvder>
      <Header />
      <Balance />
      <IncomExpenses />
      <Transactions />
      <AddTransaction />
    </GlobalProvder>
  );
}

export default App;
