import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-tvls',
    templateUrl: './tvls.component.html',
    styleUrls: ['./tvls.component.css']
})
export class TvlsComponent implements OnInit {
    type = '0';
    service: string;
    checkService1: boolean;
    checkService2: boolean;
    checkService3: boolean;
    isShowForm2: boolean;

    constructor() {
    }

    ngOnInit(): void {
    }

    showForm1(show = true): void {
        if (show) $('#form1').modal('show');
        else $('#form1').modal('hide');
    }

    showForm2(): void {
        this.isShowForm2 = true;
        this.showForm1(false);
    }

    selectService(e): void {
        this.checkService1 = false;
        this.checkService2 = false;
        this.checkService3 = false;
        if (e == 1) this.checkService1 = true;
        else if (e == 2) this.checkService2 = true;
        else if (e == 3) this.checkService3 = true;
    }

    pauseVideo(): void {
        const video = $('#prevformclose').find('iframe');
        video.attr('src', video.attr('src'));
    }
}
