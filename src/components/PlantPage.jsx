import React from "react";
import PlantForm from "./PlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onAddPlant, searchTerm, onSearchChange }) {
  return (
    <main>
      <PlantForm onAddPlant={onAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;