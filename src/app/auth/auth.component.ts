import { Component, HostBinding } from '@angular/core';
import {fadeStateTrigger} from "../shared/animations/fade.animation";


@Component({
  selector: 'app-auth-container',
  templateUrl: './auth.component.html',
  animations: [fadeStateTrigger]
})

export class AuthComponent {

  @HostBinding('@fade') a = true;
}
