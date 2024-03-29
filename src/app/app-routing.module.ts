import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    data: { animation: "home" },
    loadChildren: () => import("./pages/home/home.module").then((m) => m.HomeModule)
  },
  {
    path: "404",
    loadChildren: () =>
      import("./pages/page-not-found/page-not-found.module").then((m) => m.PageNotFoundModule)
  },
  { path: "**", redirectTo: "404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
