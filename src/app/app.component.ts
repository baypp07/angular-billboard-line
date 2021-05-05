import bb, { line } from "billboard.js";

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  constructor() {
    bb.generate({
      bindto: "#chart",
      data: {
        columns: [
          ["data1", 30, 200, 100, 400, 150, 250],
          ["data2", 50, 20, 10, 40, 15, 25]
        ],
        type: line
      }
    });
  }
}
