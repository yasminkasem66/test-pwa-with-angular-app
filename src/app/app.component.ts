import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jockes';
  update: boolean = false;


  constructor(private swUpdates: SwUpdate) {
    console.log("here");

    swUpdates.available.subscribe((eve) => {
      console.log("here inside");
      this.update = true
      // swUpdates.activateUpdate().then(() => { document.location.reload() })
    })

  }




}
