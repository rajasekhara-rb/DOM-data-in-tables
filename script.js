//Array of Employees
let employees = [
    {
        id: 1,
        first_name: "Suresh",
        last_name: "Kumar",
        email: "suresh@gmail.com",
        gender: "male",
        ip_address: "160.192.178.29"
    },
    {
        id: 2,
        first_name: "Sourav",
        last_name: "Das",
        email: "sourav@gmail.com",
        gender: "male",
        ip_address: "160.182.168.29"
    },
    {
        id: 3,
        first_name: "Nancy",
        last_name: "Kumari",
        email: "nancy@gmail.com",
        gender: "female",
        ip_address: "170.182.178.29"
    },
    {
        id: 4,
        first_name: "Jenny",
        last_name: "Doe",
        email: "jenny@gmail.com",
        gender: "female",
        ip_address: "160.152.168.29"
    },
    {
        id: 5,
        first_name: "Abhijeet",
        last_name: "Karmkar",
        email: "abhijeet@gmail.com",
        gender: "male",
        ip_address: "160.282.168.29"
    },
    {
        id: 6,
        first_name: "Shivam",
        last_name: "Sharma",
        email: "shubham@gmail.com",
        gender: "male",
        ip_address: "160.182.268.29"
    },
    {
        id: 7,
        first_name: "Pardeep",
        last_name: "Chourasiya",
        email: "padeep@gmail.com",
        gender: "male",
        ip_address: "160.182.178.25"
    },
    {
        id: 8,
        first_name: "Amruta",
        last_name: "Kumbhalkar",
        email: "amruta@gmail.com",
        gender: "female",
        ip_address: "150.172.158.25"
    },
    {
        id: 9,
        first_name: "Jacky",
        last_name: "Doe",
        email: "jacky@gmail.com",
        gender: "male",
        ip_address: "160.142.178.25"
    },
    {
        id: 10,
        first_name: "Pavan",
        last_name: "Sharma",
        email: "pavan@gmail.com",
        gender: "male",
        ip_address: "160.182.378.15"
    },
]

// all employees 
let allEmployeesBtn = document.querySelector("#all-emp-btn").addEventListener("click", () => {
    displayEmployees(employees);
});

// Male employees 
let maleEmployeeBtn = document.querySelector("#male-emp-btn").addEventListener("click", () => {

    let maleEmployees = employees.filter((emp) => {
        return emp.gender === "male";
    })
    displayEmployees(maleEmployees);
});

// Female employees 

let femaleEmployeeBtn = document.querySelector("#female-emp-btn").addEventListener("click", () => {
    let femaleEmployees = employees.filter((emp) => {
        return emp.gender === "female";
    })

    displayEmployees(femaleEmployees);
});

// search functionality 

let searchBox = document.querySelector("#search-box");
searchBox.addEventListener("keyup", () => {
    let enteredText = searchBox.value;
    console.log(enteredText);
    let filteredEmployees = [];
    if (enteredText != "") {
        filteredEmployees = employees.filter((emp) => {
            return emp.first_name.toLocaleLowerCase().includes(enteredText.toLocaleLowerCase()) ||
                emp.last_name.toLocaleLowerCase().includes(enteredText.toLocaleLowerCase()) ||
                emp.email.toLocaleLowerCase().includes(enteredText.toLocaleLowerCase())
        })
    }

    displayEmployees(filteredEmployees);

})


function displayEmployees(employees) {

    let tableBody = document.querySelector("#table-body");
    let tableRow = [];

    for (employee of employees) {
        tableRow +=
            `
    <tr>
    <td>${employee.id}</td>
    <td>${employee.first_name}</td>
    <td>${employee.last_name}</td>
    <td>${employee.email}</td>
    <td>${employee.gender}</td>
    <td>${employee.ip_address}</td>
    </tr>
    `
    }
    tableBody.innerHTML = tableRow;

}