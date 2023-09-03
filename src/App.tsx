import { useState } from "react";
import { SearchDialog } from "vin-vite-lib";

function App() {
  const [anonKey, setAnonKey] = useState("");

  return (
    <div className="main">
      <p className="name">Queryflow Test App</p>
      <div>
        <label>Anon Key: </label>
        <input
          className="anon-key-input"
          type="text"
          placeholder="anon key"
          value={anonKey}
          onChange={(e) => setAnonKey(e.target.value)}
        />
      </div>
      <SearchDialog anonKey={anonKey} />
    </div>
  );
}

export default App;
