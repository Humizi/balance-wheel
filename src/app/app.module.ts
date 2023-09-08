import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from './core/components/button/button.module';
import { DialogModule } from './core/components/dialogs/dialog.module';
import { DialogService } from './core/services/dialog/dialog.service';
import { NgModule } from '@angular/core';
import { WheelSetupDialogModule } from './core/components/dialogs/wheel-setup/wheel-setup.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    WheelSetupDialogModule,
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
