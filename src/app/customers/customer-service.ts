import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { ICustomer } from './customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Service()
export class CustomerService {
  private http = inject(HttpClient);
  private apihost = environment.apihost;
  private customerUrl = this.apihost + '/api/customer/get';
  private customerByIdUrl = this.apihost + '/api/customer/getById';
  private updateUrl = this.apihost + '/api/customer/update';
  private deleteUrl = this.apihost + '/api/customer/delete?id=';
  

  getCustomers(): Observable<ICustomer[]> {
    return this.http
      .get<ICustomer[]>(this.customerUrl)
      .pipe
      // tap((data) => console.log('customerService.getCustomers: ' + data))
      // catchError({err:this.handleError})
      ();
  }
}