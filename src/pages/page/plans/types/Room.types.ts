export interface Room {
    id: string;
    name: string;
    update: string;
    temperature?: string;
    humidity?: string;
    co?: string;
    presence?: boolean;
    status: 'operational' | 'down';
}