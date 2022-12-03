//import data from data.js
const tableData = data;

//Make a HTML table using d3
var tbody = d3.select("tbody");

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

function handleClick(){
	//Look for the datetime id in HTML tags
	//Grab the data values and hold it in the "date" variable
	let date = d3.select("#datetime").property("value");
	let filterData = tableData;

	//Check to see if a date was entered
	//Filter the data using the date
	if(date){
		filteredData = filterData.filter(row => row.datetime === date);
	};
	
	//Rebuild the table using filtered data
	buildTable(filteredData);
};
//Attach an event to listen for the form button
d3.selectAll('#filter-btn').on("click", handleClick);
//Build the table when the page loads
buildTable(tableData);