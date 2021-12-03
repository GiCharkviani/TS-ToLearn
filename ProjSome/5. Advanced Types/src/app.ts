// Code goes here!
type Admin = {
    name: string;
    privileges: string[]
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee

interface ElevatedEmployee1 extends Employee, Admin {} 

const e1: ElevatedEmployee = {
    name: 'Gio',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;