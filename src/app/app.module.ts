import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { AppShellModule } from '@angular/app-shell';


import { AppComponent } from './app.component';
import { GitRepoListComponent } from './git-repo-list/git-repo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GitRepoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppShellModule.runtime()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
