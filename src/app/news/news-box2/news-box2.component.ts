import {Component, Input, OnInit} from '@angular/core';
import {GlobalService} from "../../service/global.service";
import {serialize} from "../../helpers/serialize";

@Component({
    selector: 'app-news-box2',
    templateUrl: './news-box2.component.html',
    styleUrls: [
        '../news.component.css',
        './news-box2.component.css',
    ]
})
export class NewsBox2Component implements OnInit {
    @Input() data;
    @Input() category;
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
