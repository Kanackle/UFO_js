//import data from data.js
const tableData = data;

//Make a HTML table using d3
vat tbody = d3.select("tbody");

function buildTable(data){
	//Clear any existing data
	tbody.html("");

	//Next, loop through each object in the data
	//Append a row and cells for each value in the row
	data.forEach((dataRow) => {
		//Append a row to the table body
		let row = tbody.append("tr");

		//Loop through each field in the dataRow
		//Add each value as a table cell(td)
		Object.values(dataRow).forEach((val) => {
			let cell = row.append("td");
			cell.text(val);
		});
	});
	
}