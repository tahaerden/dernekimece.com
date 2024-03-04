import { NgModule } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
const modules = [CommonModule, TranslateModule.forChild()];
// const pipes = [];

@NgModule({
  declarations: [],
  imports: [modules],
  exports: [modules],
  providers: []
})
export class SharedModule {}
