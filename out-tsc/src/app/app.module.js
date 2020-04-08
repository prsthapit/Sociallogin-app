import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import * as i0 from "@angular/core";
let config = new AuthServiceConfig([
    {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("660536708113-5eld0k4th31e1d92knbu5766q3pdor24.apps.googleusercontent.com")
    },
    {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('703455150460876')
    }
]);
export function provideConfig() {
    return config;
}
export class AppModule {
}
AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: AuthServiceConfig,
            useFactory: provideConfig
        }
    ], imports: [[
            BrowserModule,
            AppRoutingModule,
            ReactiveFormsModule,
            SocialLoginModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        SocialLoginModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent
                ],
                imports: [
                    BrowserModule,
                    AppRoutingModule,
                    ReactiveFormsModule,
                    SocialLoginModule
                ],
                providers: [
                    {
                        provide: AuthServiceConfig,
                        useFactory: provideConfig
                    }
                ],
                bootstrap: [AppComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=app.module.js.map