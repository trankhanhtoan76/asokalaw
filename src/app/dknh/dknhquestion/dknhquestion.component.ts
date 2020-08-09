import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-dknhquestion',
    templateUrl: './dknhquestion.component.html',
    styleUrls: ['./dknhquestion.component.css']
})
export class DknhquestionComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        $('.s6head').click(function (e) {
            e.preventDefault();
            $(this).parents("li").find(".s6body").slideToggle();
        });
    }

}
