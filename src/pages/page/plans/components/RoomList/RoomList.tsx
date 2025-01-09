import React from "react";
import { Room } from "../../types/Room.types";
import RoomStatus from "../RoomStatus/RoomStatus";
import "./RoomList.scss";

interface RoomListProps {
  title: string;
  rooms: Room[];
}

const RoomList: React.FC<RoomListProps> = ({ title, rooms }) => {
  return (
    <>
      <div className="roomList">
        <h2 className="roomList__title">
          {title} <span className="nb_salles">/ {rooms.length} salle(s)</span>
        </h2>
        <div className="roomList__container">
          {rooms.map((room) => (
            <RoomStatus key={room.id} {...room} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RoomList;
