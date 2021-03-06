import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../service/global.service";

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

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
    }

    showForm1(show = true): void {
        if (show) $('#form1').modal('show');
        else $('#form1').modal('hide');
    }

    showForm2(): void {
        this.showForm1(false);
        $('#tvlsform2').modal('show');
    }

    showForm3(): void {
        this.showForm1(false);
        $('#tvlsform3').modal('show');
    }

    showForm4(): void {
        this.showForm1(false);
        $('#tvlsform4').modal('show');
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
