import { AreaEditDialogModule } from 'src/app/core/components/dialogs/area-edit/area-edit.module';
import { ButtonModule } from 'src/app/core/components/button/button.module';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'src/app/core/components/dialogs/dialog.module';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { WheelSetupDialogModule } from 'src/app/core/components/dialogs/wheel-setup/wheel-setup.module';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ButtonModule,
    DialogModule,
    WheelSetupDialogModule,
    AreaEditDialogModule,
  ],
  providers: [DialogService],
})
export class HomePageModule {}
