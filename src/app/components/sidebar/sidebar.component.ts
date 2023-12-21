import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  titleValue: string = "";
  priceValue: string = "";


  constructor(
    private router: Router
  ){}


  ngOnInit(): void {
    
  }

  filterByTitle(){
    this.router.navigate(["/productos/filtro/titulo", this.titleValue])
  }

  filterByPrice(){
    this.router.navigate(['/productos/filtro/precio', this.priceValue])
    console.log(this.priceValue);
    
  }

}
