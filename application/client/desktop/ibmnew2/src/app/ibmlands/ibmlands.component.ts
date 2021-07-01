import { Component, OnInit } from '@angular/core';
import { IbmlandsService } from './ibmlands.service';

@Component({
  selector: 'app-ibmlands',
  templateUrl: './ibmlands.component.html',
  styleUrls: ['./ibmlands.component.scss'],
})

export class IbmlandsComponent implements OnInit {
    public joins = {
        products: '',
    }

    constructor (
        private ibmlandsService: IbmlandsService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.ibmlandsService.GpCreate(this.joins).subscribe(data => {
            this.joins.products = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}