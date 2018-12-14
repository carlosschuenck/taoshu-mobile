import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ComponentsModule} from "../components/components.module";
import {PresencaListPage} from "../pages/presenca/presenca-list/presenca-list";
import {PresencaListPageModule} from "../pages/presenca/presenca-list/presenca-list.module";
import { DatePipe } from '@angular/common';
import { AlunoListPage } from '../pages/aluno/aluno-list/aluno-list';
import { AlunoListPageModule } from '../pages/aluno/aluno-list/aluno-list.module';
import { AlunoProvider } from '../providers/aluno/aluno';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    PresencaListPageModule,
    AlunoListPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PresencaListPage,
    AlunoListPage
  ],
  providers: [
    DatePipe,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlunoProvider
  ]
})
export class AppModule {}
