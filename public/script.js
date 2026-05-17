const API_URL = "http://localhost:5000/api/employees";

async function fetchEmployees() {

    const response = await fetch(API_URL);

    const employees = await response.json();

    const employeeList = document.getElementById("employeeList");

    employeeList.innerHTML = "";

    employees.forEach(employee => {

        employeeList.innerHTML += `
        
        <div class="employee-card">

            <h3>${employee.name}</h3>

            <p>Email: ${employee.email}</p>

            <p>Department: ${employee.department}</p>

            <p>Salary: ₹${employee.salary}</p>

            <button class="delete-btn" onclick="deleteEmployee('${employee._id}')">
                Delete
            </button>

        </div>
        
        `;
    });
}

async function addEmployee() {

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const department = document.getElementById("department").value;

    const salary = document.getElementById("salary").value;

    await fetch(`${API_URL}/add`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            email,
            department,
            salary
        })
    });

    fetchEmployees();
}

async function deleteEmployee(id) {

    await fetch(`${API_URL}/delete/${id}`, {
        method: "DELETE"
    });

    fetchEmployees();
}

fetchEmployees();