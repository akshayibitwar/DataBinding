import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
public ProdctName : string = `Apple`;
public ProdStatus : string = `No product is added yet...`
public PrdId : number = 10;
public Cartcount : number = 0;
public isDisable : boolean = true;
public ProdctSearch !: string;
public skills  = ["CSS", "JS", "Angular", "TS", "SASS"];
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isDisable = !this.isDisable;
    },3000)
  }

  onBtnClick(){
    console.log(`btn is Click.....!!!`);
    // this.ProdctName = `Apple store is in Mumbai...`
    this.Cartcount++;
    
    if(this.Cartcount === 1){
      this.ProdStatus = `${this.Cartcount} Product is Added Successfully...`
    }else{
      this.ProdStatus = `${this.Cartcount} Products are Added Successfully...`
    }
  }

  onRemovePrdct(){
    console.log(`Remove work`);
    this.Cartcount--;
    if(this.Cartcount < 1){
      this.ProdStatus = `No product is Added Yet...`
    }else{
      this.ProdStatus = `${this.Cartcount} Products are Added Successfully...`
    }
  }

  onProductStatus(eve : Event){
      //  console.log(`Akshay Ibitwar`);
    
    let val = (eve.target as HTMLInputElement).value;
    console.log(val);
    
  }
}
