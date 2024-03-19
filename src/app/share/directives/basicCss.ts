import { Directive, ElementRef, Input, OnInit } from "@angular/core";


@Directive({
    selector : '[basicCss]'
})

export class BasicCssDirectives implements OnInit {
    @Input()  defaultColor !: string
    constructor(private  eleRef : ElementRef){

    }
    
    ngOnInit(): void {
        console.log(this.eleRef.nativeElement);
        const para = this.eleRef.nativeElement;
        para.style.backgroundColor = this.defaultColor;
        para.style.color = "white";
        para.style.pading = "15px"
        
    }

}