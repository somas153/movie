import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bankapp',
  templateUrl: './bankapp.component.html',
  styleUrls: ['./bankapp.component.css']
})
export class BankappComponent implements OnInit {

  constructor( public router:Router) { }
   public mumbai=[{
     action:"1",
     bankname:"viji bank",
     ifsc:"vij1223",
     id:"78",
     branch:"vij road mumbai"
   },
  {
    action:"2",
    bankname:"koto bank",
    ifsc:"kot1223",
    id:"99",
    branch:"kot road mumbai"
  },
  {
    action:"3",
    bankname:"axis bank",
    ifsc:"axis1223",
    id:"09",
    branch:"axis road mumbai"
  },
  {
    action:"4",
    bankname:"karnatak bank",
    ifsc:"kar12256",
    id:"55",
    branch:"bank road mumbai"
  },
]
  ngOnInit() {
  }

}

