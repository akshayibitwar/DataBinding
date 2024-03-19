import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './share/component/products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './share/component/product/product.component';
import { MobileComponent } from './share/component/mobile/mobile.component';
import { ChildComponent } from './share/component/child/child.component';
import { StdComponent } from './share/component/std/std.component';
import { PipeComponent } from './share/component/pipe/pipe.component';

import {  Taskpipe } from './share/pipe/summery';
import { TableComponent } from './share/component/table/table.component';
import { FilterPlayrsPipe } from './share/pipe/filter-playrs.pipe';

import { BasicCssDirectives } from './share/directives/basicCss';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    MobileComponent,
    ChildComponent,
    StdComponent,
    PipeComponent,
    Taskpipe,
    TableComponent,
    FilterPlayrsPipe,
    BasicCssDirectives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
