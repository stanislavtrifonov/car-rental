import * as moment from 'moment';

class PriceCalculations {

  estimatedDaysRented = (startDate, contractEndDate) => {
    const a = moment(startDate, 'YYYY-MM-DD');
    const b = moment(contractEndDate, 'YYYY-MM-DD');
    const diffDays = a.diff(b, 'days');
    let days: number;
    if (diffDays >= 0) {
      days = diffDays;
    } else {
      days = 0;
    }

    return days;
  }
}

export default PriceCalculations;




