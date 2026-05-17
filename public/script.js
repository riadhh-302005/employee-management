const API_URL = "/api/employees";

async function fetchEmployees() {

    try {

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

    } catch (error) {

        console.log(error);

    }
}

async function addEmployee() {

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const department = document.getElementById("department").value;

    const salary = document.getElementById("salary").value;

    try {

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

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("department").value = "";
        document.getElementById("salary").value = "";

        fetchEmployees();

    } catch (error) {

        console.log(error);

    }
}

async function deleteEmployee(id) {

    try {

        await fetch(`${API_URL}/delete/${id}`, {
            method: "DELETE"
        });

        fetchEmployees();

    } catch (error) {

        console.log(error);

    }
}

fetchEmployees();