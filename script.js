function createTable() {
    //Write your code here
    let row = prompt("Input number of rows");
    let column = prompt("Input Number of column")
	
    const table = document.getElementById("myTable");
    
    for(let i = 0; i<row ; i++ ){
        const row = document.createElement("tr");
        for(let j = 0; j<column;j++){
            const column = document.createElement("td");
            column.innerText = `Row-${i} Column${j}`;
            row.appendChild(column);
        }
        table.appendChild(row);
    }

}