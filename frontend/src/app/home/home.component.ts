import { Component, OnInit } from '@angular/core';
import * as Clipboard from 'clipboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  description = 'I\'ve just recently graduated from Carleton with a BCS with Honours in the Software Engineering ' +
    'stream. I\'m proficient in Xamarin.Forms mobile development with either SQLite.NET or Xamarin.Realm database ' +
    'solutions, as well as ASP.NET Web API & Entity Framework for the backend.';
  fadeOutRunning = false;

  constructor() { }

  handleCopyEmail(event: any) {
    const self = this;
    if (!self.fadeOutRunning) {
      const notification = document.getElementById('copied-notification');
      notification.style.visibility = 'visible';
      notification.style.opacity = '1';
      self.fadeOutRunning = true;
      self.fade(notification, 0.075, function() {
        self.fadeOutRunning = false;
      });
    }
    event.clearSelection();
  }

  fade(element: HTMLElement, time: number, callback: Function) {
    let op = 1;  // initial opacity
    let speed = 1;
    const timer = setInterval(function () {
    if (op <= 0.01) {
      clearInterval(timer);
      element.style.visibility = 'hidden';
      callback();
    }
    element.style.opacity = op.toString();
    op -= op * time * speed;
    speed += 0.075;
  }, 50);
}

  ngOnInit() {
    const self = this;
    const clipboard = new Clipboard('.btn');
    clipboard.on('success', function(e) {
      self.handleCopyEmail(e);
    });
  }
}
