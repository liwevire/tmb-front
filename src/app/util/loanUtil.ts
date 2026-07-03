import { ILoanInterestReport } from '../report/report';

export function calcValuationPcnt(
  loanInterestReport: ILoanInterestReport
): number {
  let valuationPcnt =
    ((loanInterestReport.principalOutstanding +
      loanInterestReport.interestOutstanding) *
      100) /
    loanInterestReport.valuation;
  valuationPcnt = 100 - Math.round(valuationPcnt);
  return valuationPcnt;
}

export function getAge(date_1:Date, date_2:Date) {
  date_1 = new Date(date_1);
  //convert to UTC
  let date2_UTC = new Date(
    Date.UTC(date_2.getFullYear(), date_2.getUTCMonth(), date_2.getUTCDate())
  );
  let date1_UTC = new Date(
    Date.UTC(date_1.getFullYear(), date_1.getUTCMonth(), date_1.getUTCDate())
  );
  let yAppendix, mAppendix, dAppendix;
  //--------------------------------------------------------------
  let days = date2_UTC.getDate() - date1_UTC.getDate();
  if (days < 0) {
    date2_UTC.setMonth(date2_UTC.getMonth() - 1);
    days += DaysInMonth(date2_UTC);
  }
  //--------------------------------------------------------------
  let months = date2_UTC.getMonth() - date1_UTC.getMonth();
  if (months < 0) {
    date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
    months += 12;
  }
  //--------------------------------------------------------------
  let years = date2_UTC.getFullYear() - date1_UTC.getFullYear();

  if (years > 1) yAppendix = ' years';
  else yAppendix = ' year';
  if (months > 1) mAppendix = ' months';
  else mAppendix = ' month';
  if (days > 1) dAppendix = ' days';
  else dAppendix = ' day';

  return (
    years + yAppendix + ', ' + months + mAppendix + ', ' + days + dAppendix
  );
}

function DaysInMonth(date2_UTC: Date) {
  let monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
  let monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
  let monthLength =
    (monthEnd.valueOf() - monthStart.valueOf()) / (1000 * 60 * 60 * 24);
  return monthLength;
}
