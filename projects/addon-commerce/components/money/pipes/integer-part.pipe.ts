import {Inject, Pipe, PipeTransform} from '@angular/core';
import {
    TUI_NUMBER_FORMAT,
    tuiFormatNumber,
    TuiNumberFormatSettings,
} from '@taiga-ui/core';

@Pipe({name: `tuiIntegerPart`})
export class TuiIntegerPartPipe implements PipeTransform {
    constructor(
        @Inject(TUI_NUMBER_FORMAT) private readonly numberFormat: TuiNumberFormatSettings,
    ) {}

    transform(value: number): string {
        return tuiFormatNumber(Math.floor(Math.abs(Number(value))), {
            ...this.numberFormat,
            decimalLimit: 0,
        });
    }
}
