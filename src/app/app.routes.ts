import { Routes } from '@angular/router';
import { CustomerList } from './customers/customer-list/customer-list';

export const routes: Routes = [
  { path: '', component: CustomerList },
  // { path: '', component: LoanListComponent },
  // { path: 'customers', component: CustomerListComponent },
  // { path: 'customer', component: EditCustomerComponent },
  // { path: 'customer/:id', component: EditCustomerComponent },
  // { path: 'loans/:loanType', component: LoanListComponent },
  // { path: 'loan', component: EditLoanComponent },
  // { path: 'loan/:id', component: EditLoanComponent },
  // { path: 'report/inception', component: InceptionReportComponent },
  // { path: 'report/dated', component: DatedReportComponent },
  // { path: 'report/valuation/loan', component: ValuationLoanComponent },
  // { path: 'report/valuation/customer', component: ValuationCustomerComponent },
];