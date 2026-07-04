import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';

export const materialImports = [
  CommonModule,
  MatTableModule,
  MatPaginatorModule,
  MatDividerModule,
  MatSortModule,
  MatButtonModule,
  MatNativeDateModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatIconModule,
  MatSelectModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatCardModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatChipsModule,
  MatGridListModule,
];

@NgModule({
  declarations: [],
  imports: [...materialImports],
  exports: [...materialImports],
})
export class AngMatModule {}
