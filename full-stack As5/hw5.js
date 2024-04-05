document.addEventListener('DOMContentLoaded', () => {
    fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((data) => {
        let tableData = "";
        data.results.forEach((user) => {
            tableData += `
                <tr>
                    <td>${user.name.first}</td>
                    <td>${user.location.city}</td>
                </tr>
            `;
        });
        document.getElementById("tb_body").innerHTML = tableData;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
