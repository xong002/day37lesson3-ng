import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  imagePath! : string;
  route = inject(ActivatedRoute);

  ngOnInit(){
    this.route.params.subscribe(
      (params : Params) => {
        this.imagePath = 'https://csf-xz.sgp1.digitaloceanspaces.com/images/' + params['id'];
      }
      )
  }

}
