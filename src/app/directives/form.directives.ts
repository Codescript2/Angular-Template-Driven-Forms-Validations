import { Directive } from "@angular/core";

@Directive({
    selector: 'form',
    host: {
        '(submit)': 'onSubmit($event)'
    }
})
export class FormDirective {
    onSubmit(event: Event) {
        console.log(event);
        return false;
    }
}