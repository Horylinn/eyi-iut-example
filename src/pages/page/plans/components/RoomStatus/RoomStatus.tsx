import React from "react";
import './RoomStatus.scss';

interface RoomStatusProps {
    name: string;
    update: string;
    temperature?: string;
    humidity?: string;
    co2?: string;
    presence?: boolean;
    status: 'operational' | 'down';
}

const RoomStatus: React.FC<RoomStatusProps> = ({ name, update, temperature, humidity, co2, presence, status }) => {

    const getRoomInfo = (info: string, data: any) => {
        let nb = 0;
        let color = "#000000";
        let send = <div className="end" style={{ color: color }}>{data}</div>;
        switch(info) {
            case "update":
                send = <i>{data}</i>;
                break;
            case "temperature":
                nb = Number(data);
                if (nb < 16) color = "#2d67e3";
                else if (nb < 21) color = "#32eb21";
                else if (nb < 27) color = "#eb7221";
                else color = "#eb2121";
                send = <div className="end" style={{ color: color }}>{data} °C</div>;
                break;
            case "humidity": 
                if (nb < 20) color = "#2d67e3";
                else if (nb < 50) color = "#32eb21";
                else if (nb < 70) color = "#eb7221";
                else color = "#eb2121";
                send = <div className="end" style={{ color: color }}>{data} %</div>;
                break;
            case "co2": 
                if (nb < 100) color = "#2d67e3";
                else if (nb < 850) color = "#32eb21";
                else if (nb < 1450) color = "#eb7221";
                else color = "#eb2121";
                send = <div className="end" style={{ color: color }}>{data} ppm</div>;
                break;
            case "presence": 
                if (data === false) {
                    color = "#eb2121";
                    send = <div className="end" style={{ color: color }}>Non</div>;
                } else {
                    color = "#32eb21";
                    send = <div className="end" style={{ color: color }}>Oui</div>;
                }
                break;
        }
        return send;
    }
    return (
        <>
            <div className={`room-status room-status--${status}`}>
                <h3 className="room-status__title"><span>{name}</span><div className={`room-status__title--${status}`}></div></h3>
                <p className="room-status__info update">Mise à jour : {update || '-'}</p>
                <p className="room-status__info">Température : {temperature ? getRoomInfo("temperature", temperature) : '-'}</p>
                <p className="room-status__info">Humidité : {humidity ? getRoomInfo("humidity", humidity) : '-'}</p>
                <p className="room-status__info">CO2 : {co2 ? getRoomInfo("co2", co2) : '-'}</p>
                <p className="room-status__info">Présence d'usager : {getRoomInfo("presence", presence)}</p>
                { status === 'operational' ? (
                    <button className="room-status__button">Signaler anomalie</button>
                ) : (
                    <button className="room-status__button">En savoir plus</button>
                )}
            </div>
        </>
    );
};

export default RoomStatus;