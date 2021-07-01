import { Component, OnInit } from '@angular/core';
import { Task1Service } from './task1.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss'],
})

export class Task1Component implements OnInit {
    public task1 = {
        name: '',
    }

    constructor (
        private task1Service: Task1Service,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.task1Service.GpCreate(this.task1).subscribe(data => {
            this.task1.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}