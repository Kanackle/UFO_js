// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
	let date = d3.select("#datetime");
	let city = d3.select("#citybox");
	let state = d3.select("#statebox");
	let country = d3.select("#countrybox");
	let shape = d3.select("#shapebox");
    // 4b. Save the value that was changed as a variable.
	let dateValue = date.property("value");
	let cityValue = city.property("value");
	let stateValue = state.property("value");
	let countryValue = country.property("value");
	let shapeValue = shape.property("value");
    // 4c. Save the id of the filter that was changed as a variable.

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
	if(dateValue){
		if(filters["datetime"] != dateValue){
			filters["datetime"] = dateValue;
		}
	}
	
	else{
		if(filters["datetime"]){
			delete filters["datetime"];
		}
	};

	if(cityValue){
		if(filters["city"] != cityValue){
			filters["city"] = cityValue;
		}
	}
	
	else{
		if(filters["city"]){
			delete filters["city"];
		}
	};
	if(stateValue){
		if(filters["state"] != stateValue){
			filters["state"] = stateValue;
		}	
	}
	
	else{
		if(filters["state"]){
			delete filters["state"];
		}
	};
	if(countryValue){
		if(filters["country"] != countryValue){
			filters["country"] = countryValue;
		}		
	}
	
	else{
		if(filters["country"]){
			delete filters["country"];
		}	
	};
	if(shapeValue){
		if(filters["shape"] != shapeValue){
			filters["shape"] = shapeValue;
		}
	}
	
	else{
		if(filters["shape"]){
			delete filters["shape"];
		}	
	};
	console.log(filters);
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filterData = tableData;
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    for (const [key, value] of Object.entries(filters)) {
		console.log(key, value);
		filterData = filterData.filter(row => row[key] === value);
	}
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filterData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll('#filter-btn').on("click", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
