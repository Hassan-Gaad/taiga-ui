import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiResizerModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiExpandModule,
    TuiGroupModule,
    TuiHintModule,
    TuiLinkModule,
    TuiModeModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {
    TuiCheckboxLabeledModule,
    TuiDataListWrapperModule,
    TuiRadioBlockModule,
    TuiSelectModule,
} from '@taiga-ui/kit';

import {TuiDocDemoComponent} from './demo.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        TuiLinkModule,
        TuiButtonModule,
        TuiSelectModule,
        TuiExpandModule,
        TuiGroupModule,
        TuiTooltipModule,
        TuiModeModule,
        TuiRadioBlockModule,
        TuiCheckboxLabeledModule,
        TuiSvgModule,
        TuiDataListWrapperModule,
        TuiDataListModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiResizerModule,
    ],
    declarations: [TuiDocDemoComponent],
    exports: [TuiDocDemoComponent],
})
export class TuiDocDemoModule {}
