import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboredServiceService } from '../Services/dashbored-service.service';
import { RequestHelp } from '../Interfaces/RequestHelp';
DashboredServiceService;

@Component({
  selector: 'app-add-proposal',
  templateUrl: './add-proposal.component.html',
  styleUrls: ['./add-proposal.component.css'],
})
export class AddProposalComponent implements OnInit {
  formdata: FormGroup = new FormGroup({
    userId: new FormControl('5af048bd-1fe1-4c01-ac9c-b02eb2de41e3'), //3
    discription: new FormControl('ddd'), /// nedd 20-25
    date: new FormControl('2023-06-10T15:46:54.719Z'), //23-3-2023
  });
  request: RequestHelp = { discription: '', date: new Date(), userId: '' };
  constructor(private _DashboredServiceService: DashboredServiceService) {}
  ngOnInit(): void {
    //this.getHelperRequest();
  }
  submitTheRequest(obj: any) {
    console.log('aaaaa');
    console.log(obj);
    this.request = obj;
    this._DashboredServiceService.AddJob(this.request).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
    });
  }
  // helperRequests: any[] = [];
  // getHelperRequest() {
  //   this._DashboredServiceService.getHelperRequest().subscribe({
  //     next: (data) => (this.helperRequests = data),
  //     error: (err) => console.log(err),
  //   });
  //}
}
