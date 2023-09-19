import { useState } from "react";
import { SearchV1, SearchV2 } from "vin-vite-lib";

const DEFAULT_ANON_KEY =
  "c533f0f1b55e6fb677c51099b178167df6de4df6bd19c53130c1aa71bf87a5cb";

function App() {
  const [anonKey, setAnonKey] = useState(DEFAULT_ANON_KEY);

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
      <div className="search-field">
        Search V1: <SearchV1 anonKey={anonKey} />
      </div>
      <div className="search-field">
        Search V2: <SearchV2 anonKey={anonKey} />
      </div>
    </div>
  );
}

export default App;
