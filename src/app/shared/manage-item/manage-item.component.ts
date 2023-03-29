import { Component, OnInit } from '@angular/core';
import { adminApiService } from 'src/app/services/admin/adminapi.service';

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.css']
})
export class ManageItemComponent implements OnInit {


  categories:any


  // items = [
  //   {
  //     id:1,
  //     img:'../../../assets/Images/homeDelivery.png',
  //     title:'Dal Makhni',
  //     desc:'Great Dal lorem adknkasdda ealjfkja lef lke falk fds lfkn',
  //     price:40,
  //     category:"North-Indian"
  //   },
  //   {
  //     id:2,
  //     img:'../../../assets/Images/homeDelivery.png',
  //     title:'Dal Makhni',
  //     desc:'Great Dal',
  //     price:40,
  //     category:"North-Indian"
  //   },
  //   {
  //     id:3,
  //     img:'../../../assets/Images/homeDelivery.png',
  //     title:'Dal Makhni',
  //     desc:'Great Dal',
  //     price:40,
  //     category:"North-Indian"
  //   },
  //   {
  //     id:4,
  //     img:'../../../assets/Images/homeDelivery.png',
  //     title:'Dal Makhni',
  //     desc:'Great Dal',
  //     price:40,
  //     category:"North-Indian"
  //   },
  //   {
  //     id:5,
  //     img:'../../../assets/Images/homeDelivery.png',
  //     title:'Dal Makhni',
  //     desc:'Great Dal',
  //     price:40,
  //     category:"North-Indian"
  //   }
  // ]

  items:any;


  constructor(private _adminApiService: adminApiService) { }

  ngOnInit(): void {
    this._adminApiService.getCategory()
    .subscribe(
      data=>{
          this.categories=data;
      }
    );
    // this._adminApiService.getItems()
    // .subscribe(
    //   data=>{
    //       this.items=data;
    //   }
    // );

    this._adminApiService.getItemByParam("Chinese")
    .subscribe(
      data=>{
        this.items=data;
      }
    )

  //   var obj = {
  //     categoryName:"Chinese"
  //   };

  //   this._adminApiService.getItemByCategory(obj)
  //   .subscribe(
  //     data=>{
  //       console.log(data);
  //       this.items=data;
  //     }
  //   )
  // }
    }
}