import { Component, inject, ViewChild } from '@angular/core';
import { ICustomer } from '../customer';
import { CustomerService } from '../customer-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-customer-list',
  imports: [],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList {
  private customerService = inject(CustomerService);
  private _snackBar = inject(MatSnackBar);
  
  title = 'Customer list';
  customers: ICustomer[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'secondaryName',
    'post',
    'pin',
    'phone',
  ];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.customerService.getCustomers().subscribe({
      next: (customers) => {
        this.customers = customers;
        // this.dataSource = new MatTableDataSource<ICustomer>(this.customers);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      },
      error: (err) => {
        this._snackBar.open('ERROR!', 'Close', {
          duration: 5000,
        });
      },
    });
  }  
}