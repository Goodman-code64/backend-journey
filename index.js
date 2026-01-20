console.log('hello world')
console.log("this code is running using node")
//practice 

const name ="jeenesh";
let year ='2026';
console.log("Name:",name);
console.log("Year",year);
year=2027;
console.log("updated year",year);
//primitive example 
let a=5;
 let b=a;
 b=10;

 console.log("a:",a)
 console.log("b:",b)
//refernce example 
const user={
  role:"student",
};
const sameuser= user;
sameuser.role="backend engineer";
console.log("user role:", user.role)
// functions 
function getusername(name)
{
  return "jeenesh";
}
function getyear(year)
{
  return 2026;
}
function userprofile(name,year)
{ 
  return{
    name:name,
    year:year,
    goal:"backend engineer",

  };
}
const userName = getusername();
const Year = getyear();

const profile = userprofile(userName, year);

console.log(profile);


