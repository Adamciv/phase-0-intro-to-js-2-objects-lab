// Write your solution in this file!


var employee = {
    name: "John Doe",
    streetAddress: "123 Main Street"
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key) {
    var newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
