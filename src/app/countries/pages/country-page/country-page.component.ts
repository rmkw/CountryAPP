import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { count, switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  public country?: Country;


  constructor(
    private _aRouter: ActivatedRoute,
    private _countriesService: CountriesService,
    private _router: Router
    ){}

  ngOnInit(): void {

    this._aRouter.params
    .pipe(
      switchMap( ({ id }) => this._countriesService.searchCountryByAlphaCode( id ))
    )
    .subscribe( country => {
      if ( !country ){
        return this._router.navigateByUrl('');
      }

      return this.country = country;

    });







}
}
