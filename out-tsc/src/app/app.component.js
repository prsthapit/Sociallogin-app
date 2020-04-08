import { Component } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import * as i0 from "@angular/core";
import * as i1 from "angularx-social-login";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function AppComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 11);
    i0.ɵɵelementStart(2, "div", 12);
    i0.ɵɵelementStart(3, "label", 13);
    i0.ɵɵtext(4, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 12);
    i0.ɵɵelementStart(7, "label", 15);
    i0.ɵɵtext(8, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "input", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div");
    i0.ɵɵelementStart(11, "button", 17);
    i0.ɵɵtext(12, "LogIn");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div");
    i0.ɵɵelement(14, "div", 18);
    i0.ɵɵelementStart(15, "button", 19);
    i0.ɵɵlistener("click", function AppComponent_div_14_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.signInWithFB(); });
    i0.ɵɵtext(16, " Sign In With Facebook");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 19);
    i0.ɵɵlistener("click", function AppComponent_div_14_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.signInWithGoogle(); });
    i0.ɵɵtext(18, "Sign In With Google");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r0.signinForm);
} }
function AppComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelementStart(2, "label", 20);
    i0.ɵɵtext(3, "First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 12);
    i0.ɵɵelementStart(6, "label", 22);
    i0.ɵɵtext(7, "Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "input", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 12);
    i0.ɵɵelementStart(10, "label", 24);
    i0.ɵɵtext(11, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "input", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div");
    i0.ɵɵelement(14, "img", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "h2");
    i0.ɵɵtext(16, "Wellcome to Social Lgoin ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 27);
    i0.ɵɵlistener("click", function AppComponent_div_15_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.signOut(); });
    i0.ɵɵtext(18, "Sign Out");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.user.firstName);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.user.lastName);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.user.email);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("src", ctx_r1.user.photoUrl, i0.ɵɵsanitizeUrl);
} }
export class AppComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
        });
    }
    signInWithGoogle() {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }
    signInWithFB() {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }
    signOut() {
        this.authService.signOut();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(i0.ɵɵdirectiveInject(i1.AuthService)); };
AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 2, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["http-equiv", "X-UA-Compatible", "content", "ie=edge"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"], [1, "bg-light"], [1, "container"], [1, "row", "py-5", "justify-content-center"], [1, "col-md-8"], [1, "text-center", "py-4"], [4, "ngIf"], [3, "formGroup"], [1, "form-group"], ["for", "email"], ["type", "text", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-control"], [1, "btn", "btn-primary"], ["id", "fb-root"], ["type", "button", 1, "btn", "btn-primary", 2, "margin", "10px", 3, "click"], ["for", "firstname"], ["type", "text", "id", "firstname", "readonly", "", 1, "form-control", 3, "value"], ["for", "lastname"], ["type", "text", "id", "lastname", "readonly", "", 1, "form-control", 3, "value"], ["for", "email2"], ["type", "text", "id", "email2", "readonly", "", 1, "form-control", 3, "value"], [3, "src"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "html", 0);
        i0.ɵɵelementStart(1, "head");
        i0.ɵɵelement(2, "meta", 1);
        i0.ɵɵelement(3, "meta", 2);
        i0.ɵɵelement(4, "meta", 3);
        i0.ɵɵelementStart(5, "title");
        i0.ɵɵtext(6, "Document");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(7, "link", 4);
        i0.ɵɵelementStart(8, "body", 5);
        i0.ɵɵelementStart(9, "div", 6);
        i0.ɵɵelementStart(10, "div", 7);
        i0.ɵɵelementStart(11, "div", 8);
        i0.ɵɵelementStart(12, "h1", 9);
        i0.ɵɵtext(13, "Sign In with Facebook and Gmail");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(14, AppComponent_div_14_Template, 19, 1, "div", 10);
        i0.ɵɵtemplate(15, AppComponent_div_15_Template, 19, 4, "div", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(14);
        i0.ɵɵproperty("ngIf", ctx.loggedIn === false);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.loggedIn === true);
    } }, directives: [i2.NgIf, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: i1.AuthService }]; }, null); })();
//# sourceMappingURL=app.component.js.map