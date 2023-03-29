import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
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
