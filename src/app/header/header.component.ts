import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { patientOrHelperGuard } from '../patient-or-helper.guard';
import { RoleService } from '../Services/role.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogin:boolean=false;
  isHelper:boolean=false;
  constructor(private auth:AuthService,private toast:ToastrService,private uesrrole:patientOrHelperGuard){}//,private jwtHelper:JwtHelperService){}

  ngOnInit(): void {
    this.auth.userdata.subscribe(()=>{
      if(this.auth.userdata.getValue()!=null){
        this.isLogin=true;
      }
      else{
        this.isLogin=false;
      }
    
      if(this.uesrrole.canActivate()){
        this.isHelper=true;
      }
      else{
        this.isHelper=false;
      } 

  }) 
}
  logOut(){
    this.auth.logout();
  }
}
