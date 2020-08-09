import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FormValidateService {

    constructor() {
    }

    fieldValid(value, type?): boolean {
        if (value) {
            if (type == 'phone') {
                return /^[0-9]{10,15}$/.test(value);
            } else if (type == 'email') {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            }
            return true;
        }
        return false;
    }

    formValid(fields): boolean {
        for (const key in fields) {
            if (fields.hasOwnProperty(key)) {
                if (fields[key].hasOwnProperty('value')) {
                    if (fields[key].hasOwnProperty('type')) {
                        if (!this.fieldValid(fields[key].value, fields[key].type))
                            return false;
                    } else {
                        if (!this.fieldValid(fields[key].value))
                            return false;
                    }
                }
            }
        }
        return true;
    }
}
