import { Component } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addartical',
  templateUrl: './addartical.component.html',
  styleUrls: ['./addartical.component.scss']
})
export class AddarticalComponent {
  constructor(private admin:AdminService,private route:Router,private builder:FormBuilder){}

  formdata: FormGroup = new FormGroup({
    id:new FormControl(null),
    Title : new FormControl(null),
     paragraph: new FormControl(null)})
   

     submitTheArtical(formdata:any){
      console.log(formdata.value)
          console.log("vvvvvvv")
  this.admin.AddArtical(formdata.value).subscribe({ 
    next: (beers) => {
      // this.toast.success("Data Successuflly subimted")
      // this.route.navigate(['/CreateQestion']);
      console.log("Data Successuflly subimted")
    },
    error: (e) => {
        console.log(e)
        // this.toast.error("error")
    },
  })  
        
     }
}
