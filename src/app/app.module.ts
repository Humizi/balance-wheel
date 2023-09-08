import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from './core/components/button/button.module';
import { DialogModule } from './core/components/dialogs/dialog.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, DialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
