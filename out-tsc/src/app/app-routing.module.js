import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [];
export class AppRoutingModule {
}
AppRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppRoutingModule });
AppRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[RouterModule.forRoot(routes)],
        RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forRoot(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
//# sourceMappingURL=app-routing.module.js.map