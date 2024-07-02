import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootLayoutComponent } from './root-layout/root-layout.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

@NgModule({
  declarations: [RootLayoutComponent, UpcomingComponent],
  imports: [CommonModule, RootRoutingModule],
})
export class RootModule {}
