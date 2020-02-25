import * as moment from 'moment';

class PriceCalculations {

  estimatedDaysRented = (startDate, contractEndDate) => {
    const test = moment(new Date()).format('YYYY-MM-DD HH:mm');
    console.log(test);
    const a = moment(startDate, 'YYYY-MM-DD');
    const b = moment(contractEndDate, 'YYYY-MM-DD');
    const diffDays = a.diff(b, 'days');
    let days;
    if (diffDays >= 0) {
      days = diffDays;
    } else {
      days = 0;
    }

    return days;
  }

}

export default PriceCalculations;




