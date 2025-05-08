import { Directive, input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[bannedWordValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: BannedWordValidator,
            multi: true
        }
    ]
})
export class BannedWordValidator implements Validator {

    bannedWordValidator = input<string>();

    validate(control: AbstractControl): ValidationErrors | null {
        const bannedWord = this.bannedWordValidator()?.toLowerCase();
        const controlValue = (control.value as string).toLowerCase();

        if(bannedWord === controlValue) {
            return {
                bannedWordValidator: bannedWord
            }
        }
        return null
    }
}