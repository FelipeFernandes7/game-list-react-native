import { View } from "react-native";
import { Header } from "./src/components/header";
import { styles } from "./AppStyles";
import { Footer } from "./src/components/footer";
import { useState } from "react";
import { GameList } from "./src/pages/gameList";
import games, { IGames } from "./src/data/games";

export default function App() {
  const [filteredGames, setFilteredGames] = useState<IGames[]>(games);

  const handleFilterChange = (filterText: string) => {
    const filtered = games.filter((game) =>
      game.name.toLowerCase().includes(filterText.toLowerCase()),
    );
    setFilteredGames(filtered);
  };

  return (
    <View style={styles.container}>
      <Header onFilterChange={handleFilterChange} />
      <GameList games={filteredGames} />
      <Footer />
    </View>
  );
}
