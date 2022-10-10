import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  myForm=this.fb.group({
    email:[' ',Validators.required],
    password:[' ',Validators.required]
  })

  ngOnInit(): void {
    console.log(this.myForm.value);
  }
  onSubmit(){
    
    console.log(this.myForm.value)
  }

}
