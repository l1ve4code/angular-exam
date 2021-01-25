import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from "../../shared/item.model";
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ConnectService } from '../../service/connect.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = {};

  itemForm: FormGroup = new FormGroup({});

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private rs: ConnectService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.item = params;
    });
    this.itemForm = new FormGroup({
      id: new FormControl(this.item.id),
      name: new FormControl(this.item.name, [Validators.required, Validators.min(0)]),
      article: new FormControl(this.item.article, [Validators.required, Validators.min(0)]),
      cost: new FormControl(this.item.cost, [Validators.required, Validators.min(0)]),
      maker: new FormControl(this.item.maker),
      category: new FormControl(this.item.category, [Validators.required, Validators.min(0)]),
      weight: new FormControl(this.item.weight, [Validators.required, Validators.min(0)]),
      amount: new FormControl(this.item.amount, [Validators.required, Validators.min(0)]),
    });
  }

  toItemsPage(){
    this.router.navigate(["/items"]);
  }
  async editItemData(){
    await this.rs.updateItem(this.itemForm.value);
    this.toItemsPage();
  }
  async deleteItemData(){
    await this.rs.deleteItem(this.itemForm.value);
    this.toItemsPage();
  }

}
