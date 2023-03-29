import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {
  orders=[
    {
      id:1,
      date:"Friday aa",
      details: " asdk askd  a jfas kad fa jfa a jfasj ofanf kasf kasj fjaf saf jnaf njanf ksaf ja f",
      mail:"asdkaskmdQ@gmail.com",
      address:"asd aoiefj a fapj aspojf as fi ",
      status:"Reached"
    },
    {
      id:1,
      date:"Friday aa",
      details: " asdk askd  a jfas kad fa jfa a jfasj ofanf kasf kasj fjaf saf jnaf njanf ksaf ja f",
      mail:"asdkaskmdQ@gmail.com",
      address:"asd aoiefj a fapj aspojf as fi ",
      status:"Reached"
    },
    {
      id:1,
      date:"Friday aa",
      details: " asdk askd  a jfas kad fa jfa a jfasj ofanf kasf kasj fjaf saf jnaf njanf ksaf ja f",
      mail:"asdkaskmdQ@gmail.com",
      address:"asd aoiefj a fapj aspojf as fi ",
      status:"Reached"
    },
    {
      id:1,
      date:"Friday aa",
      details: " asdk askd  a jfas kad fa jfa a jfasj ofanf kasf kasj fjaf saf jnaf njanf ksaf ja f",
      mail:"asdkaskmdQ@gmail.com",
      address:"asd aoiefj a fapj aspojf as fi ",
      status:"Reached"
    },
    {
      id:1,
      date:"Friday aa",
      details: " asdk askd  a jfas kad fa jfa a jfasj ofanf kasf kasj fjaf saf jnaf njanf ksaf ja f",
      mail:"asdkaskmdQ@gmail.com",
      address:"asd aoiefj a fapj aspojf as fi ",
      status:"Reached"
    },
    {
      id:1,
      date:"Friday aa",
      details: " asdk askd  a jfas kad fa jfa a jfasj ofanf kasf kasj fjaf saf jnaf njanf ksaf ja f",
      mail:"asdkaskmdQ@gmail.com",
      address:"asd aoiefj a fapj aspojf as fi ",
      status:"Reached"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
