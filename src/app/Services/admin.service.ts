import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {question} from '../Interfaces/question'
import { RequestHelp } from '../Interfaces/RequestHelp';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { pendUser } from '../Interfaces/pendUser';
import { Artical } from '../Interfaces/Artical';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  AddTest(test: any): Observable<any> {
    return this.http.post(`http://localhost:5218/api/Test/AddTest`,test);
  }
  getAllTests():Observable<any>{
    return this.http.get(`http://localhost:5218/api/Test/GetAllTests`);
  }
  getTestByID(id:any):Observable<any>{
    return this.http.get(`http://localhost:5218/api/Test/GetTestById?id=${id}`,id);
  }

  deleteTest(id:any):Observable<any>{
    return this.http.delete(`http://localhost:5218/api/Test/DeleteTest?id=${id}`,id);
  }
  AddQuestion(question:question):Observable<any>{
    return this.http.post(`http://localhost:5218/api/Test/AddQuestion`,question);
  }
  getAllQuestions(testId:any):Observable<any>{
    return this.http.get(`http://localhost:5218/api/Test/GetAllQuestions?testId=${testId}`,testId);
  }
  GetPendPatients(status:any):Observable<any>{
    return this.http.get(`http://localhost:5218/api/Admin/GetPendingPatients?status=${status}`,status);
  }
  GetPendHelpers():Observable<any>{
    return this.http.get(`http://localhost:5218/api/Admin/GetPendingHelpers`);
  }
  PendHelpers(pendUser:any):Observable<any>{
    return this.http.put(`http://localhost:5218/api/Admin/ApproveHelper`,pendUser);
  }
  PendPatients(pendUser:pendUser):Observable<any>{
    return this.http.put(`http://localhost:5218/api/Admin/ApprovePatient`,pendUser);
  }
  AddArtical(artical:Artical): Observable<any> { 
    return this.http.post(`http://localhost:5218/api/Artical/AddArtical`,artical ); 
  }
}
