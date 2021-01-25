import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from "../../shared/item.model";
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = {};

  itemForm: FormGroup = new FormGroup({});

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.item = params;
    });
    this.itemForm = new FormGroup({
      name: new FormControl(this.item.name, [Validators.required]),
      article: new FormControl(this.item.article, [Validators.required]),
      cost: new FormControl(this.item.cost, [Validators.required]),
      maker: new FormControl(this.item.maker),
      category: new FormControl(this.item.category, [Validators.required]),
      weight: new FormControl(this.item.weight, [Validators.required]),
      amount: new FormControl(this.item.amount, [Validators.required]),
    });
  }

  toItemsPage(){
    this.router.navigate(["/items"]);
  }
  editItemData(){
    console.log("edit");
  }
  deleteItemData(){
    console.log("delete");
  }

}
