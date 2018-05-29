export interface Address{
 street:string;
 suite:string;
 city:string;
 zipcode:string;
 geo:geoLocation;
}
export interface geoLocation{
    lat:number;
    lng:number;
}
export interface User{
id:number;
name:string;
email:string;
address:Address;
}