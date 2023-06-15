import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboredHelperComponent } from './dashbored-helper/dashbored-helper.component';
import { AddProposalComponent } from './add-proposal/add-proposal.component';
import { DisplayJobComponent } from './display-job/display-job.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule } from '@angular/forms';
import { AddTestComponent } from './add-test/add-test.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { BeforeRegisterComponent } from './before-register/before-register.component';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { HelperRegisterComponent } from './helper-register/helper-register.component';
import { FormHelperComponent } from './form-helper/form-helper.component';
import { FormPatientComponent } from './form-patient/form-patient.component';
import { CreateQuestionsComponent } from './create-questions/create-questions.component';
import { PendingUsersComponent } from './pending-users/pending-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddarticalComponent } from './addartical/addartical.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboredHelperComponent,
    AddProposalComponent,
    DisplayJobComponent,
    AddTestComponent,
    HeaderComponent,
    HomePageComponent,
    PageNotFoundComponent,
    LoginComponent,
    BeforeRegisterComponent,
    FooterComponent,
    RegisterComponent,
    HelperRegisterComponent,
    FormHelperComponent,
    FormPatientComponent,
    CreateQuestionsComponent,
    PendingUsersComponent,
    AddarticalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
