import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor( private _countriesServices: CountriesService){}

  ngOnInit(): void {
    this.countries = this._countriesServices.cacheStore.byCountries.countries;
    this.initialValue = this._countriesServices.cacheStore.byCountries.term;
  }

  searchByCountry( term: string ):void{
    this.isLoading = true;
    this._countriesServices.searchCountry( term )
    .subscribe( countries =>{
      this.countries = countries;
      this.isLoading = false;
    })
  }

}
