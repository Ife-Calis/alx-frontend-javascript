export default function iterateThroughObject(reportWithIterator) {
	  let employeeString = '';

	  reportWithIterator.forEach((employee, index) => {
		      employeeString += employee;

		      if (index !== reportWithIterator.length - 1) {
			            employeeString += ' | ';
			          }
		    });

	  return employeeString;
}
