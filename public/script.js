const API_URL = "/api/employees";

async function fetchEmployees() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch employees");
        }

        const employees = await response.json();

        const employeeList = document.getElementById("employeeList");

        employeeList.innerHTML = "";

        if (employees.length === 0) {

            employeeList.innerHTML = `
                <p>No employees found</p>
            `;

            return;
        }

        employees.forEach(employee => {

            employeeList.innerHTML += `
            
            <div class="employee-card">

                <h3>${employee.name}</h3>

                <p><strong>Email:</strong> ${employee.email}</p>

                <p><strong>Department:</strong> ${employee.department}</p>

                <p><strong>Salary:</strong> ₹${employee.salary}</p>

                <button class="delete-btn" onclick="deleteEmployee('${employee._id}')">
                    Delete
                </button>

            </div>
            
            `;
        });

    } catch (error) {

        console.log(error);

        alert("Error loading employees");

    }
}

async function addEmployee() {

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const department = document.getElementById("department").value;

    const salary = document.getElementById("salary").value;

    if (!name || !email || !department || !salary) {

        alert("Please fill all fields");

        return;
    }

    try {

        const response = await fetch(`${API_URL}/add`, {

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

        if (!response.ok) {
            throw new Error("Failed to add employee");
        }

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("department").value = "";
        document.getElementById("salary").value = "";

        alert("Employee Added Successfully");

        fetchEmployees();

    } catch (error) {

        console.log(error);

        alert("Error adding employee");

    }
}

async function deleteEmployee(id) {

    try {

        const response = await fetch(`${API_URL}/delete/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Failed to delete employee");
        }

        alert("Employee Deleted");

        fetchEmployees();

    } catch (error) {

        console.log(error);

        alert("Error deleting employee");

    }
}

fetchEmployees();