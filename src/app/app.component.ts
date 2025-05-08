import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormDirective } from './directives/form.directives';
import { UserInfo } from './interfaces/user.interface';
import { JsonPipe } from '@angular/common';
import { BannedWordValidator } from './custom-validators/banned-word.validator';

@Component({
  selector: 'app-root',
  imports: [FormsModule, JsonPipe, BannedWordValidator],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  user: UserInfo = {
    name: '',
    lastName: ''
  }

}
