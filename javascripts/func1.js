let Student={
    roll:12,
    name:"siri",
    subject:"JS",
    office:"levelup"
}
console.log(Student)
console.log(Student.name)
console.log(Student.office)

//another code neested variables

let Student1={
    roll:78,
    name:"vas",
    subject:{
        sub1:"html",
        sub2:"css",
        sub3:"js"
    },
    office:"levelup"

}
console.log(Student1)
console.log(Student1.subject.sub2)
delete Student1.office;
// using for loop we get only the main property values

for(let x in Student1)
{
        console.log(x)
}
   

function First(firstname){
    function Second(lastname){
        console.log(firstname + " " + lastname)
    }
    Second("GVS");
}First("Bhargavi")
