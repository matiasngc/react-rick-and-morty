import { CharacterList } from "./components/CharacterList";

function App() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center py-2">Rick and Morty</h1>
      <p className="text-center display-6 pb-4">Characters</p>
      <CharacterList />
    </div>
  );
}

export default App;
