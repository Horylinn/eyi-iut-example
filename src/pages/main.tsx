import SidebarMenu from "./components/sidebar-menu/sidebar-menu";
import "./main.scss";
import PlansSalles from "./page/plans/plans-salles";
import Notification from "./components/notifications/notificiation";

export const operationalRooms = [
  {
    id: "101",
    name: "Salle 101",
    update: "09/01 à 03h26",
    temperature: "22",
    humidity: "45",
    co2: "400",
    presence: true,
    status: "operational",
  },
  {
    id: "102",
    name: "Salle A102",
    update: "09/01 à 03h26",
    temperature: "2",
    humidity: "90",
    co2: "120",
    presence: false,
    status: "operational",
  },
  {
    id: "103",
    name: "Salle B103",
    update: "09/01 à 03h26",
    temperature: "23",
    humidity: "40",
    co2: "420",
    presence: false,
    status: "operational",
  },
  {
    id: "104",
    name: "Salle 104",
    update: "09/01 à 03h26",
    temperature: "50",
    humidity: "50",
    co2: "896",
    presence: false,
    status: "operational",
  },
  {
    id: "105",
    name: "Salle D105",
    update: "09/01 à 03h26",
    temperature: "23",
    humidity: "5",
    co2: "1300",
    presence: false,
    status: "operational",
  },
  {
    id: "106",
    name: "Salle D106",
    update: "09/01 à 03h26",
    temperature: "156",
    humidity: "20",
    co2: "420",
    presence: true,
    status: "operational",
  },
  {
    id: "107",
    name: "Salle A107",
    update: "09/01 à 03h26",
    temperature: "23",
    humidity: "50",
    co2: "1250",
    presence: true,
    status: "operational",
  },
  {
    id: "108",
    name: "Salle 108",
    update: "09/01 à 03h26",
    temperature: "2",
    humidity: "10",
    co2: "420",
    presence: false,
    status: "operational",
  },
  {
    id: "109",
    name: "Salle 109",
    update: "09/01 à 03h26",
    temperature: "23",
    humidity: "50",
    co2: "1500",
    presence: false,
    status: "operational",
  },
  {
    id: "110",
    name: "Salle 110",
    update: "09/01 à 03h26",
    temperature: "20",
    humidity: "50",
    co2: "5",
    presence: true,
    status: "operational",
  },
  {
    id: "111",
    name: "Salle X111",
    update: "09/01 à 03h26",
    temperature: "20",
    humidity: "50",
    co2: "5",
    presence: true,
    status: "operational",
  },
];

export const downRooms = [
  {
    id: "201",
    name: "Salle B201",
    update: "09/01 à 03h26",
    presence: false,
    status: "down",
  },
  {
    id: "202",
    name: "Salle 202",
    update: "09/01 à 03h26",
    presence: false,
    status: "down",
  },
  {
    id: "203",
    name: "Salle D203",
    update: "09/01 à 03h26",
    presence: true,
    status: "down",
  },
  {
    id: "204",
    name: "Salle 204",
    update: "09/01 à 03h26",
    presence: false,
    status: "down",
  },
  {
    id: "405",
    name: "Salle 405",
    update: "09/01 à 03h26",
    presence: false,
    status: "down",
  },
  {
    id: "406",
    name: "Salle A406",
    update: "09/01 à 03h26",
    presence: true,
    status: "down",
  },
];

const MainElement: React.FC = () => {
  return (
    <>
      <div className="main">
        <SidebarMenu />
        <PlansSalles
          operationalRooms={operationalRooms}
          downRooms={downRooms}
        />
        <Notification message="Une salle est hors service !" type="warning" />
      </div>
    </>
  );
};

export default MainElement;
