import { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./styles";

interface HeaderProps {
  onFilterChange: (text: string) => void;
}

export function Header({ onFilterChange }: HeaderProps) {
  const [filter, setFilter] = useState("");
  const handleFilter = (text: string) => {
    setFilter(text);
    onFilterChange(text);
  };
  return (
    <View style={styles.header}>
      <Text style={styles.title}>top Games</Text>
      <TextInput
        style={styles.input}
        value={filter}
        onChangeText={handleFilter}
        placeholder="Pesquisar"
      />
    </View>
  );
}
