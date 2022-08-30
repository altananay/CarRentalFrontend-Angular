import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/models/brand';
import { BrandService } from 'src/services/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  brands:Brand[] = []



  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands()
  {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
    })
  }

}