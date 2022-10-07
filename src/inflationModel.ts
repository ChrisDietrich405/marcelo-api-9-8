export interface IData {
    date: string;
    value: string;
}

export default interface inflationModel {
    data: IData[];
    interval: string;
    name: string;
    unit: string
}