import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { StatusBar, StatusBarStyle, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    StatusBar.setStyle({ style: Style.Dark})
  }
}
