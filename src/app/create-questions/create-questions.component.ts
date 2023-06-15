import { Component, Inject, OnInit } from '@angular/core';
import {question} from '../Interfaces/question'
import { AdminService } from '../Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit{
  QuestionFom:FormGroup=this.builder.group({
    testId:this.route.snapshot.paramMap.get("id"),
    question:new FormControl(null,Validators.required),
    answers: this.fb.array([
      this.createAnswer(),
      this.createAnswer(),
      this.createAnswer(),
       
      ])
    });
    // answers:new FormControl(null),
    // answers:[
    // {
    //   ans:new FormControl(null),
    // score:new FormControl(null)
    // }, {
    //   ans:new FormControl(null),
    // score:new FormControl(null)
    // }, {
    //   ans:new FormControl(null),
    // score:new FormControl(null)
    // },]
  
  constructor(private fb: FormBuilder,private admin:AdminService,private toast:ToastrService,private route:ActivatedRoute,private router:Router,private builder:FormBuilder,@Inject(DOCUMENT) document: Document)
  {
    // this.QuestionFom = this.fb.group({
    //   answers: this.fb.array([
    //     this.createAnswer(),
    //     this.createAnswer(),
    //     this.createAnswer(),
       
    //   ])
    // });
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  get answers() {
    return this.QuestionFom.get('answers') as FormArray;
  }

  createAnswer() {
    return this.fb.group({
      ans: '',
      score: 0
    });
  }
  addAnswer() {
    const answer = this.createAnswer();
    this.answers.push(answer);
  }

// ListQuestion:question={
//   testId: 0,
//   question: '',
//   answers: [
//     {
//       ans: '',
//       score:0
//     },{
//       ans: '',
//       score:0
//     },{
//       ans: '',
//       score:0
//     }]
// }




// id from CreateExam Component
ido:any=this.route.snapshot.paramMap.get("id");

// // *********************** save ************************************************************
save(QuestionFom:FormGroup){
  console.log("***************************************")
  console.log(this.QuestionFom.value)
  const answer = this.fb.group({
    ans: '',
    score: 0
  });
  // this.answers.push(answer);
  this.admin.AddQuestion(this.QuestionFom.value).subscribe({
    next: (beers) => {
      //how to equal formControl with 
      var id=<any>this.QuestionFom.get('testId');
       id=this.ido;
       console.log(id);
       this.router.navigate(["createQuestion",id]);

       //to reset  specific inputs

      //  QuestionFom.get('question').reset();
      //  QuestionFom.get('ans').reset(); 
      //  QuestionFom.get('score').reset(); 

       console.log("Question Added Successfully")
    },
    error: (e) => {
        console.log(e)
    },
   })
 }
// ******************************** clear  *****************************************
clear(QuestionFom:any){
         //to reset  specific inputs
         QuestionFom.get('question').reset();
         QuestionFom.get('answers').reset();
         //to reset radioButton  
}
exit(QuestionFom:any){
  this.admin.AddQuestion(this.QuestionFom.value).subscribe({
    next: (beers) => {
      this.toast.show("Question Added Successfully")
       this.router.navigate(["HomePage"]);
 },
 error: (e) => {
  this.toast.show("err")  
  console.log(e)
},
})
}
}
