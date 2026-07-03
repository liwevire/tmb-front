import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngMatModule } from './material/ang-mat.module';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { MomentDateModule } from '@angular/material-moment-adapter';
// import { WebcamModule } from 'ngx-webcam';

// import { AppRoutingModule, routingComponents } from './app-routing.module';
// import { AngMatModule } from './Material/ang-mat.module';
// import { AppComponent } from './app.component';
import { Globals } from './util/globals';
// import { EditItemComponent } from './loans/items/edit-item/edit-item.component';
// import { EditActivityComponent } from './loans/activities/edit-activity/edit-activity.component';
// import { CustomCalendarHeaderComponent } from './shared/custom-calendar-header/custom-calendar-header.component';
// import { CustomerLoanListComponent } from './customers/customer-loan-list/customer-loan-list.component';
// import { CaptureCustomerPhotoComponent } from './kyc/capture-customer-photo/capture-customer-photo.component';
// import { ValuationLoanComponent } from './report/valuation-loan/valuation-loan.component';
// import { ValuationCustomerComponent } from './report/valuation-customer/valuation-customer.component';

@NgModule({
  declarations: [
    // AppComponent,
    // routingComponents,
    // EditItemComponent,
    // EditActivityComponent,
    // CustomCalendarHeaderComponent,
    // CustomerLoanListComponent,
    // CaptureCustomerPhotoComponent,
    // ValuationLoanComponent,
    // ValuationCustomerComponent,
  ],
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,
    // HttpClientModule,
    // MomentDateModule,
    // AppRoutingModule,
    AngMatModule
    // FormsModule,
    // ReactiveFormsModule,
    // FlexLayoutModule,
    // WebcamModule,
  ],
  providers: [Globals],
})
export class AppModule {}
