import React from "react";
import "./plans-salles.scss";
import RoomList from "./components/RoomList/RoomList";
import { $filterSignal, $updateFilters } from "./signal/RoomFilter.signal";
import Select from "react-select";
import { Room } from "./types/Room.types";

interface PlansSallesProps {
  operationalRooms: Array<any>;
  downRooms: Array<any>;
}

const extractBuildingAndFloor = (rooms: Room[]) => {
  const buildings = new Set<string>();
  const floors = new Set<string>();

  rooms.forEach((room) => {
    const building = room.name.match(/Salle\s([A-Za-z])/);
    const buildingLetter = building ? building[1] : "Tous";
    buildings.add(buildingLetter);

    const floor = room.id.charAt(0);
    floors.add(floor);
  });

  return {
    buildings: Array.from(buildings).map((building) => ({
      value: building,
      label: `Batiment ${building}`,
    })),
    floors: Array.from(floors).map((floor) => ({
      value: floor,
      label: `Étage ${floor}`,
    })),
  };
};

const PlansSalles: React.FC<PlansSallesProps> = ({
  operationalRooms,
  downRooms,
}) => {
  const { buildings, floors } = extractBuildingAndFloor([
    ...operationalRooms,
    ...downRooms,
  ]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    $updateFilters({ search: e.target.value });
  };

  const handleSelectChange = (filter: string, selectedOptions: any) => {
    if (filter === "building") $updateFilters({ building: selectedOptions });
    else if (filter === "floor") $updateFilters({ floor: selectedOptions });
    else if (filter === "presence")
      $updateFilters({ presence: selectedOptions?.value || "Tous" });
  };

  const filteredRooms = (
    rooms: Array<Room>,
    search: string,
    building: string[],
    floor: string[],
    presence: string
  ) => {
    return rooms.filter((room) => {
      const matchesSearch = room.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesBuilding =
        building.length === 0 ||
        building.some((b) => b === "Tous" || room.name.includes(b));
      const matchesFloor =
        floor.length === 0 ||
        floor.some((f) => f === "Tous" || room.id.startsWith(f));
      const matchesPresence =
        presence === "Tous" ||
        (presence === "True" && room.presence) ||
        (presence === "False" && !room.presence);

      return (
        matchesSearch && matchesBuilding && matchesFloor && matchesPresence
      );
    });
  };

  const defaultBuildingValue =
    $filterSignal.value.building.length === 0
      ? [{ value: "Tous", label: "Tous les bâtiments" }]
      : $filterSignal.value.building;
  const defaultFloorValue =
    $filterSignal.value.floor.length === 0
      ? [{ value: "Tous", label: "Tous les étages" }]
      : $filterSignal.value.floor;
  const defaultPresenceValue =
    $filterSignal.value.presence === "Tous"
      ? { value: "Tous", label: "Tous" }
      : {
          value: $filterSignal.value.presence,
          label:
            $filterSignal.value.presence === "True"
              ? "Présence d'usager"
              : "Absence d'usager",
        };

  const filteredOperationalRooms = filteredRooms(
    operationalRooms,
    $filterSignal.value.search,
    $filterSignal.value.building.map((b) => b.value),
    $filterSignal.value.floor.map((f) => f.value),
    $filterSignal.value.presence
  );
  const filteredDownRooms = filteredRooms(
    downRooms,
    $filterSignal.value.search,
    $filterSignal.value.building.map((b) => b.value),
    $filterSignal.value.floor.map((f) => f.value),
    $filterSignal.value.presence
  );

  return (
    <>
      <div className="plansSalles">
        <div className="plansSalles__title">Plan des salles</div>
        <div className="plansSalles__header">
          <input
            type="text"
            placeholder="Rechercher une salle..."
            className="plansSalles__search"
            onChange={handleSearchChange}
            value={$filterSignal.value.search}
          />
          <Select
            options={[
              { value: "Tous", label: "Tous les bâtiments" },
              ...buildings,
            ]}
            value={defaultBuildingValue}
            className="plansSalles__selectWrapper"
            placeholder="Filtrer par bâtiment"
            isMulti
            onChange={(selOption) => handleSelectChange("building", selOption)}
          />
          <Select
            options={[{ value: "Tous", label: "Tous les étages" }, ...floors]}
            value={defaultFloorValue}
            className="plansSalles__selectWrapper"
            placeholder="Filtrer par étage"
            isMulti
            onChange={(selOption) => handleSelectChange("floor", selOption)}
          />
          <Select
            options={[
              { value: "Tous", label: "Tous" },
              { value: "True", label: "Présence d'usager" },
              { value: "False", label: "Absence d'usager" },
            ]}
            value={defaultPresenceValue}
            className="plansSalles__selectWrapper"
            placeholder="Filtrer par présence"
            onChange={(selOption) => handleSelectChange("presence", selOption)}
          />
        </div>
        <div className="plansSalles__roomLists">
          <RoomList
            title="Salles en état opérationnelles"
            rooms={filteredOperationalRooms}
          />
          <RoomList title="Salles en état de panne" rooms={filteredDownRooms} />
        </div>
      </div>
    </>
  );
};

export default PlansSalles;
