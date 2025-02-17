import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-radio-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiRadioExample1 {
    testForm = new FormGroup({
        testValue1: new FormControl('One'),
        testValue2: new FormControl({value: 'One', disabled: true}),
    });
}
