import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-form-field-upload',
    templateUrl: './form-field-upload.component.html',
    styleUrls: ['./form-field-upload.component.css']
})
export class FormFieldUploadComponent implements OnInit {
    @Input() label;
    @Input() type;
    @Output() data = new EventEmitter;
    file = {
        data: '',
        ext: ''
    };

    constructor() {
    }

    ngOnInit(): void {
    }

    onRemoveSelectedFile() {
        this.file = {
            data: '',
            ext: ''
        };
        this.data.emit(this.file);
    }

    onSelectFile(e) {
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        const reader = new FileReader();

        if (this.type == 'image') {
            const pattern = /image-*/;
            if (!file.type.match(pattern)) {
                alert('invalid format');
                return;
            }
        }

        this.file.ext = e.srcElement.value.split('.').pop();

        reader.onload = this.readFile.bind(this);
        reader.readAsDataURL(file);
    }

    readFile(e) {
        let reader = e.target;
        this.file.data = reader.result;
        this.data.emit(this.file);
    }
}
