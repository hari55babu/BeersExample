import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent implements OnInit {


  private beer_list_url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json';
  private beer_images_url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json';
  beers_response:any;
  beers_response_list=[];

  searchText:any = "";
  p: number = 1;
  beers_images_response:any;
  beers_images_response_list=[];
  constructor(private http : HttpClient) {

    }
  ngOnInit() {
    this.http.get(this.beer_list_url)
      .subscribe(Response => {
        console.log(Response)
        this.beers_response=Response;
        this.beers_response_list=this.beers_response.list;
      });

      this.http.get(this.beer_images_url)
            .subscribe(Response => {
              console.log(Response)
              this.beers_images_response=Response;
              this.beers_images_response_list=this.beers_images_response.list;
            });
  }

}
