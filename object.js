var student = {studentId: 121, phone: 017925272, name:"Santu"};
var student1 = {studentId: 126, phone: 012329218, name:"Mantu"};

var phoneNo1 = student.phone;           //first type to call an initial variable.
var phoneNo2 = student1["phone"];           //second type to call an initial variable.
var phoneProNo = "phone";
var phoneNo3 = student[phoneProNo];             //Third type to call an initial variable.
console.log(phoneNo1, phoneNo2, phoneNo3);

//Update a value

student1.phone = 1092302192;
student["phone"] = 21804321;
student[phoneProNo] = 198347098274;
student["cinema"] = "fatafati 420";
console.log(student1);
console.log(student);
