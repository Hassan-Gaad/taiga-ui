import {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TUI_ANIMATION_OPTIONS, tuiScaleIn} from '@taiga-ui/core';

@Component({
    selector: 'button[tuiTabBarItem], a[tuiTabBarItem]',
    templateUrl: './tab-bar-item.template.html',
    styleUrls: ['./tab-bar-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiScaleIn],
})
export class TuiTabBarItemComponent {
    @Input()
    icon = '';

    @Input()
    badge?: number | null = null;

    readonly animation = {value: '', ...this.animationOptions} as const;

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS)
        private readonly animationOptions: AnimationOptions,
    ) {}

    format(value: number): string {
        return value > 999 ? '999+' : String(value);
    }
}
