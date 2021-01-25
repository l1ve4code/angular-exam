import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectService } from '../../service/connect.service';
import { Item } from "../../shared/item.model";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  last_id: number = 0;

  itemsForm: FormGroup = new FormGroup({});

  constructor(private rs : ConnectService, private router: Router) { }

  ngOnInit(): void {
    this.addToArray();
    this.itemsForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', [Validators.required, Validators.min(0)]),
      article: new FormControl('', [Validators.required, Validators.min(0)]),
      cost: new FormControl('', [Validators.required, Validators.min(0)]),
      maker: new FormControl(''),
      category: new FormControl('', [Validators.required, Validators.min(0)]),
      weight: new FormControl('', [Validators.required, Validators.min(0)]),
      amount: new FormControl('', [Validators.required, Validators.min(0)]),
    });
  }

  openItem(id: any){
    let index = this.items.findIndex((item) => item.id === id);
    this.router.navigate(['/item/'+id], { queryParams: {id: this.items[index].id, name: this.items[index].name, article: this.items[index].article, cost: this.items[index].cost, maker: this.items[index].maker, category: this.items[index].category, weight: this.items[index].weight, amount: this.items[index].amount} });
  }
  clearFormGroup(){
    this.itemsForm.reset();
  }

  async plusItemData(item: any){
    item.amount += 1;
    await this.rs.updateItem(item);
    this.addToArray();
  }

  async minusItemData(item: any){
    if(item.amount != 0){
      item.amount -= 1;
    }
    await this.rs.updateItem(item);
    this.addToArray();
  }

  async onAddItem() {
    let id: any = 0;
    if(this.items.length > 0){
      id = this.items[this.items.length - 1].id;
      id += 1;
    }else{
      id = 1;
    }
    this.itemsForm.get("id")?.setValue(id);
    await this.rs.addItem(this.itemsForm.value);
    this.addToArray();
    this.clearFormGroup();
  }

  async addToArray(){
    try {
      this.items = await this.rs.getItems();
    } catch (error) {
      console.log(error);
    }
  }

}
