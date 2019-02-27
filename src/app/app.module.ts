import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule  } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ComponentsModule} from "../components/components.module";
import {PresencaListPage} from "../pages/presenca/presenca-list/presenca-list";
import {PresencaListPageModule} from "../pages/presenca/presenca-list/presenca-list.module";
import { DatePipe, CommonModule } from '@angular/common';
import { AlunoModule } from '../pages/aluno/aluno.module';
import { HttpClientModule } from '@angular/common/http';
import { Dialogs } from '@ionic-native/dialogs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    PresencaListPageModule,
    AlunoModule,
    HttpClientModule,
    CommonModule, 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PresencaListPage
  ],
  providers: [
    DatePipe,
    StatusBar,
    SplashScreen,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
