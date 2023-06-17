/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(function(employee,index,employeeList){
        if(employee.profession==="developer")
        console.log(employee)  
    });
  }

  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(employee,index,employeeList){
        if(employee.profession==="developer")
        console.log(employee)  
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    const newEmployee = {id: 4, name: "Manjeet", age: "25", profession: "developer"  };
    arr.push(newEmployee);  //pushing new employee to arr
    console.log(newEmployee);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let newArray =arr.filter(employee=>employee.profession!=="admin")
    console.log(newArray);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray = [
        { id: 4, name: "rahul", age: "32", profession: "intern" },
        { id: 5, name: "Dhruv", age: "34", profession: "Doctor" },
        { id: 6, name: "saksham", age: "31", profession: "Teacher" }
      ]; 
      const concatenatedArray = arr.concat(newArray);
      console.log(concatenatedArray);
  }
  
  