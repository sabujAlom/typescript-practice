interface User {
  name:string;
  age: number;
  gmail: string;
}

const user: User = {
  name: "Md. Sabuj Alom",
  age: 26,
  gmail: "sabujalom18@gmail.com"
};







interface Student {
  name: string;
  age: number;
  email: string;

  address: {
     city:string;
     country:string;
  };
}




// একটা Employee interface তৈরি করো।
// Requirements:
// name → string required
// salary → number required
// department → string required
// phone → string optional
// address → optional object
// city → string
// country → string

interface Employee{
    name:string;
    salary: number;
    department: string;
    phone?: string;
    address?:{
        city:string;
        country: string;
    }
}
const employee: Employee = {
       name: "sabuj",
       salary: 70000,
       department:"tech",
       address:{
        city:"Dhaka",
        country:"Bangladesh"
       }
};
console.log(employee)