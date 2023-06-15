import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestHelp } from '../Interfaces/RequestHelp';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
//foooooor PATIENT
@Injectable({
  providedIn: 'root',
})
export class DashboredServiceService {
  constructor(private _HttpClient: HttpClient) {}
  //patient add job
  AddJob(request: any): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:2167/api/HelperRequest/AddHelperRequest`,
      request
    );
  }

  // get job by user token/owner
  getHelpRequestByUserToken(id: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:2167/api/HelperRequest/GetAllHelperRequestByUserID/${id}`
    );
  }
  getProposal(): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:2167/api/HelperProposal/GetAllHelperProposel`
    );
  }
  getProposalByJob(id: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:2167/api/HelperProposal/GetAllHelperProposel/${id}`
    );
  }

  DeleteProposal(id: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:2167/api/HelperProposal/DeleteHelperProposel?id=${id}`
    );
  }
  patientSeeHisOwnJobs(id: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:2167/api/HelperRequest/GetAllHelperRequestByUserID/${id}`
    );
  }
  DeleteJob(id: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:2167/api/HelperRequest/DeleteHelperRequest?id=${id}`
    );
  }
  
}
