import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyLibComponent } from './../../../../my-lib/src/lib/my-lib/my-lib.component'


@Component({
    standalone: true,
    selector: 'mono-repo-demo-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterModule, MyLibComponent]
})
export class AppComponent {
  title = 'app2';
}
