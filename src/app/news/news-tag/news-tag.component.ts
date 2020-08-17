import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-news-tag',
    templateUrl: './news-tag.component.html',
    styleUrls: [ '../news.component.css','./news-tag.component.css']
})
export class NewsTagComponent implements OnInit {
    @Input() data: string;
    displayTags: any;

    constructor() {
    }

    ngOnInit(): void {
        this.ngOnChanges({currentValue: this.data});
    }

    ngOnChanges(data: any): void {
        if (data && data.data && data.data.currentValue) {
            this.displayTags = data.data.currentValue.split(',');
            for (const key in this.displayTags) {
                if (this.displayTags.hasOwnProperty(key)) {
                    this.displayTags[key] = this.displayTags[key].trim();
                }
            }
        }
    }
}
