import { connect } from "react-redux";
import { stocksActions } from "./stores/stock/actions";
import "./App.css";

const mapStateToProps = (state) => ({ stocks: state.stock.watchLists });

const mapDispatchToProps = {
  fetchStock: stocksActions.fetchStock,
};

const App = ({ stocks, fetchStock }) => {
  return (
    <div className="App">
      <button onClick={() => fetchStock("TSLA")}>Fetch Stock</button>

      {Object.entries(stocks).map(([symbol, data]) => (
        <div key={symbol}>
          <p>{symbol}</p>
          <p>Current price: {data.c}</p>
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
