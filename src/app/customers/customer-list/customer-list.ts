import { Component, inject, ViewChild } from '@angular/core';
import { ICustomer } from '../customer';
import { CustomerService } from '../customer-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RouterLink } from "@angular/router";
import { DatePipe } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { materialImports } from '../../util/commonImports';

@Component({
  selector: 'app-customer-list',
  imports: [RouterLink, DatePipe, MatSort, MatProgressBar, ...materialImports],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList {
  private customerService = inject(CustomerService);
  private _snackBar = inject(MatSnackBar);
  dataSource = new MatTableDataSource<ICustomer>();

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() {
    this.customerService.getCustomers().subscribe({
      next: (customers) => {
        this.customers = customers;
        this.dataSource = new MatTableDataSource<ICustomer>(this.customers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        this._snackBar.open('ERROR!', 'Close', {
          duration: 5000,
        });
      },
    });
  }  
}