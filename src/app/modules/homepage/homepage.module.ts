import { ButtonModule } from 'src/app/core/components/button/button.module';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'src/app/core/components/dialogs/dialog.module';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { NgModule } from '@angular/core';
import { WheelSetupDialogModule } from 'src/app/core/components/dialogs/wheel-setup/wheel-setup.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    ButtonModule,
    DialogModule,
    WheelSetupDialogModule,
  ],
  providers: [DialogService],
})
export class HomepageModule {}
