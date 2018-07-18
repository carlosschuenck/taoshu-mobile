import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import {IonicApp, IonicModule} from "ionic-angular";
@NgModule({
	declarations: [MenuComponent],
	imports: [IonicModule.forRoot(MenuComponent),],
  bootstrap: [IonicApp],
	exports: [MenuComponent]
})
export class ComponentsModule {}
