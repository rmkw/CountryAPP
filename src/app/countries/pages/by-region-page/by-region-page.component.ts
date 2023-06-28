import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania', ''];
  public selectedRegion?: Region;
  public isLoading: boolean = false;

  constructor( private _countriesServices: CountriesService){}

  ngOnInit(): void {
    this.countries = this._countriesServices.cacheStore.byRegion.countries;
    this.selectedRegion = this._countriesServices.cacheStore.byRegion.region;
  }

  searchByRegion( region: Region ):void{

    this.selectedRegion = region;
    this.isLoading = true;
    this._countriesServices.searchRegion( region )
    .subscribe( countries =>{
      this.countries = countries;
      this.isLoading = false;
    })
  }
}
