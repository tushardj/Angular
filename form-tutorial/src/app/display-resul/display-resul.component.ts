import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-resul',
  template: `
    <p>
      display-resul works!
    </p>
  `,
  styles: []
})
export class DisplayResulComponent implements OnInit {
  outputString : any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.outputString = this.route.params.subscribe(params => {
      console.log(params);
    });
  }

}
