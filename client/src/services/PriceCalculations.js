
import moment from 'moment';
import * as priceDiscounts from './discounts/priceDiscounts';

export const estimatedDaysRented = (startTime, endTime) => {

  const days = moment
    .duration(moment(endTime, 'YYYY/MM/DDTHH:mm')
      .diff(moment(startTime, 'YYYY/MM/DDTHH:mm'))).asDays();

  return Math.ceil(days);
};

export const currentDaysRented = (startTime) => {

  const endTime = moment(new Date(), 'YYYY/MM/DDTHH:mm');
  const days = moment
    .duration(moment(endTime, 'YYYY/MM/DDTHH:mm')
      .diff(moment(startTime, 'YYYY/MM/DDTHH:mm'))).asDays();

  return Math.ceil(days);
};

export const daysOverUnderContract = (currentDaysRentedFunction, estimatedDaysRentedFunction, startTime, endTime) => {

  const currentDaysNumber = currentDaysRentedFunction(startTime, endTime);
  const estimatedDaysNumber = estimatedDaysRentedFunction(startTime);

  return currentDaysNumber - estimatedDaysNumber;
};

export const estimatedDaysDiscount = (daysRented) => {
  if (daysRented === 1) {
    return priceDiscounts.daysDiscount1day;
  }

  if (daysRented >= 2 && daysRented <= 6) {
    return priceDiscounts.daysDiscount2to6days;
  }

  if (daysRented > 7) {
    return priceDiscounts.daysDiscount7PlusDays;
  }

  return priceDiscounts.daysDiscountNegativeDays;
};

export const estimatedAgeDiscount = (borrowerAge) => {
  if (borrowerAge > 25) {
    return priceDiscounts.ageDiscountAbove25;
  }
  if (borrowerAge >= 18 && borrowerAge <= 25) {
    return priceDiscounts.ageDiscountBelow25;
  }
  if (borrowerAge < 18) {
    return priceDiscounts.ageDiscountBelow18;
  }
};

export const estimatedPricePerDay = (estimatedDaysDiscountFunction, estimatedAgeDiscountFunction, daysRented, borrowerAge, carBasePrice) => {
  const daysDiscount = estimatedDaysDiscountFunction(daysRented);
  const ageDiscount = estimatedAgeDiscountFunction(borrowerAge);

  return carBasePrice * daysDiscount * ageDiscount;
};
