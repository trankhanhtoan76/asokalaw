import {Component, Input, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";
import {serialize} from "../../helpers/serialize";

@Component({
    selector: 'app-news-box',
    templateUrl: './news-box.component.html',
    styleUrls: [
        '../news.component.css',
        './news-box.component.css',
    ]
})
export class NewsBoxComponent implements OnInit {
    @Input() data: any;
    @Input() category: any;
    @Input('all-categorys') allCategorys: any;
    currentCategory: any;

    constructor(public global: GlobalService) {
    }

    ngOnInit(): void {
        let currentLevel = 1;
        let needSetToParent = false;
        let cs = serialize.parse(this.data.category_id);
        if (cs.length > 0 && this.category.level < 100) {
            for (let c of cs) {
                let ca = this.allCategorys[c];
                if (currentLevel < ca.level && ca.level - currentLevel > 10) {
                    currentLevel = ca.level;
                }
                if (ca.level > 100 && currentLevel > 100) {
                    needSetToParent = true;
                }
            }
            if (needSetToParent && this.category.level == 1) {
                currentLevel = Math.floor(currentLevel / 10)
            }
        }
        if (this.category.level > 100) {
            currentLevel = this.category.level;
        }
        for (let ckey in this.allCategorys) {
            let c = this.allCategorys[ckey];
            if (c.level == currentLevel) {
                this.currentCategory = c;
                break;
            }
        }
    }
}
