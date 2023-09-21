import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Depot } from '../model/depot';
import { DepotService } from '../service/depot.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  depots:Depot[] = [];
  depotFormGroup:FormGroup;
  private selectedArticleId : number=0;
  @ViewChild('myModalClose') modalClose: any;

  constructor(private depotService:DepotService, private fb:FormBuilder){
    this.depotFormGroup = this.fb.group({
      name: new FormControl('',[Validators.required,Validators.minLength(4)])
    });
  }
  
  ngOnInit(): void {
   this.getDepots();
  }

  public getDepots(){
    this.depotService.findAll().subscribe({
      next:(data)=>{
        this.depots=data;
      }
    })
  }

  public getDepot(depot:Depot){
    this.selectedArticleId=depot.id;
    this.depotFormGroup = this.fb.group({
      name: new FormControl(depot.name)
    });
  }

  public handleUpdate(){
    let depot:Depot={
      id:this.selectedArticleId,
      name:this.depotFormGroup.value.name
    }
    this.depotService.update(depot).subscribe({
      next:()=>{
        alert("depot updated");
      }
    })
    this.modalClose.nativeElement.click();
  }

 
}
