import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-screenshot-one',
  templateUrl: './screenshot-one.component.html',
  styleUrls: ['./screenshot-one.component.css']
})
export class ScreenshotOneComponent implements OnInit {

  constructor( private router: Router,) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          if (document.getElementById('custom_js') !=null) {
              document.getElementById('custom_js').remove();
          }
          const node = document.createElement('script');
          node.src = 'assets/js/active.js';
          node.type = 'text/javascript';
          node.async = false;
          node.id = 'custom_js';
          node.charset = 'utf-8';
          document.getElementsByTagName('head')[0].appendChild(node);
      }
})
}
}

