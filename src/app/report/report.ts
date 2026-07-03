import { IAppStatus } from '../AppStatus';
import { ILoan } from '../loans/loan';
export interface IOutstandingReport extends IAppStatus {
  principalOpen: number;
  principalPaidOpen: number;
  interestPaidOpen: number;
  principalClosed: number;
  principalPaidClosed: number;
  interestPaidClosed: number;
  interestOutstandingOpen: number;
  loanCountOpen: number;
  loanCountClosed: number;
  loans: ILoan[];
}

export interface ILoanInterestReport extends IAppStatus {
  principal: number;
  principalPaid: number;
  principalOutstanding: number;
  interest: number;
  interestPaid: number;
  interestOutstanding: number;
  totalDays: number;
  calcComment: string;
  valuation: number;
}

export interface IValuationLoan extends IAppStatus {
  loanVal75: ILoan[];
  loanVal50: ILoan[];
  loanVal30: ILoan[];
  loanVal15: ILoan[];
  loanVal0: ILoan[];
  loanValX: ILoan[];
}

export interface IValuationCustomer extends IAppStatus {
  id: number;
  name: string;
  secondaryName: string;
  loanCounter: number;
  loanOutstandingResponse: ILoanOutstandingResponse;
  
  principal: number;
  principalPaid: number;
  principalOutstanding: number;
  interest: number;
  interestPaid: number;
  interestOutstanding: number;
  totalDays: number;
  calcComment: string;
  valuation: number;
  valuationPrcnt: number;
}

export interface ILoanOutstandingResponse {
  principal: number;
  principalPaid: number;
  principalOutstanding: number;
  interest: number;
  interestPaid: number;
  interestOutstanding: number;
  totalDays: number;
  calcComment: string;
  valuation: number;
  valuationPrcnt: number;
}

export interface IGoldRate extends IAppStatus {
  goldRate: number;
  date: Date;
}

export const emptyGoldRate = {
  goldRate: 0,
  date: new Date(),
  statusCode: 0,
  statusMessage: '',
};
