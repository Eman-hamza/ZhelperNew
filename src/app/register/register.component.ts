import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmpassword } from '../Validations/confirmPassword';
// import { forbiddinNameVal } from '../Validations/usernameVal';
import { style } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { BeforeRegisterComponent } from '../before-register/before-register.component';
// import { FreelancerValueService } from '../Services/freelancer-value.service';
import { AuthService } from '../Services/auth.service';
import { RoleService } from '../Services/role.service';
// import { FreelancerGuard } from '../freelancer.guard';

@Component({
  template:`<app-before-register style="display:none;"  (nameProPass)="funcf($event)"></app-before-register>
  <h1>{{marwa}} </h1>`,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  [x: string]: any;

  errors:string='';

constructor(private Role:RoleService,public _AuthServices:AuthService
  ,public _route:Router,private toast:ToastrService,private builder:FormBuilder){}

// registerform:FormGroup=new FormGroup({
//   username:new FormControl(null,[Validators.pattern('^[A-Z][a-z0-9]*$'),Validators.required,forbiddinNameVal(/Admin/ || /admin/ || /adminstrator/ || /Adminstrator/)]),
//   email:new FormControl(null,[Validators.email,Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
//   password:new FormControl(null,[Validators.pattern('^[a-zA-Z0-9]{2,8}$'),Validators.required]),
//   confirmpassword:new FormControl(null,Validators.required)
// },{validators:[confirmpassword]});

registerform=this.builder.group({
  username:new FormControl(null,[Validators.pattern('^[A-Za-z0-9]*$'),Validators.required]),
  email:new FormControl(null,[Validators.email,Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
  bithDate:new FormControl(null),
  relative:new FormControl(0),
  diseaselevel:new FormControl(1),
  deseasDiscription:new FormControl(null),
  password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  gender:new FormControl(1),
    country:new FormControl(null),
    city:new FormControl(null),
    image:new FormControl(''),
    phoneNumber:new FormControl(null),
    nationalId:new FormControl(null),
    isPatient:new FormControl(true),
    isHelper:new FormControl(false)
  // confirmpassword:new FormControl(null,Validators.required)
  // ,IsFreelancer:new FormControl(this.freelance.isFreelacer),
});
ngOnInit(): void {
  //relativesEnum << retrieve relativesEnum from backend

}
funcf($event:any){
  // this.marwa=$event;
}
// usermodel=new User('','','','');
public RegisterInvalid = false;

submitRegister(data:FormGroup){
  this._AuthServices.RegisterPatient(data.value).subscribe({
    next: (beers) => {
      this.toast.success("Successuflly Register")
      this._route.navigate(['/Login']);
      console.log(" Successuflly Register")
    },
    error(err) {
      console.log("dddddd",err)
      // this.RegisterInvalid = true;
    }
  });
  //  localStorage.setItem(this.usermodel.username,JSON.stringify(this.usermodel));
  //  alert("Data Saved Successuflly");
  }
  selectDiseaseLvl()
  {
    
  }
  
}
