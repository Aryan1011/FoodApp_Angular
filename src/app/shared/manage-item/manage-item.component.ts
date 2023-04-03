import { Component, OnInit } from '@angular/core';
import { itemApiService } from '../add-item/itemapi.service';

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.css'],
})
export class ManageItemComponent implements OnInit {
  data:any;

  constructor(
    private _itemApiService: itemApiService,
    
  ) {}

  ngOnInit(): void {
    
    this._itemApiService.getByView()
    .subscribe(data=>{
      this.data=data;
    })
     
    }

    onDelete(id:number){
      this._itemApiService.deleteById(id)
      .subscribe(data=>{
        alert("Item Deleted");
        this.ngOnInit();
      })
    }
  }

