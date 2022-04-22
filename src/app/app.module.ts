import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthSignupComponent } from 'src/auth/components/auth-signup/auth-signup.component';
import { EmployeeRegistrationComponent } from 'src/auth/components/employee-registration/employee-registration.component';
import { EmployerRegistrationComponent } from 'src/auth/components/employer-registration/employer-registration.component';
import { HomeComponent } from 'src/main/components/home/home.component';
import { AboutOneComponent } from 'src/shared-module/Theme/components/about/about-one/about-one.component';
import { AboutTwoComponent } from 'src/shared-module/Theme/components/about/about-two/about-two.component';
import { BlogFiveComponent } from 'src/shared-module/Theme/components/blog/blog-five/blog-five.component';
import { BlogFourComponent } from 'src/shared-module/Theme/components/blog/blog-four/blog-four.component';
import { BlogOneComponent } from 'src/shared-module/Theme/components/blog/blog-one/blog-one.component';
import { BlogSixComponent } from 'src/shared-module/Theme/components/blog/blog-six/blog-six.component';
import { BlogThreeComponent } from 'src/shared-module/Theme/components/blog/blog-three/blog-three.component';
import { BlogTwoComponent } from 'src/shared-module/Theme/components/blog/blog-two/blog-two.component';
import { BrandingComponent } from 'src/shared-module/Theme/components/branding/branding.component';
import { BreadcrumbEightComponent } from 'src/shared-module/Theme/components/breadcrumb/breadcrumb-eight/breadcrumb-eight.component';
import { BreadcrumbFiveComponent } from 'src/shared-module/Theme/components/breadcrumb/breadcrumb-five/breadcrumb-five.component';
import { BreadcrumbFourComponent } from 'src/shared-module/Theme/components/breadcrumb/breadcrumb-four/breadcrumb-four.component';
import { BreadcrumbNineComponent } from 'src/shared-module/Theme/components/breadcrumb/breadcrumb-nine/breadcrumb-nine.component';
import { BreadcrumbOneComponent } from 'src/shared-module/Theme/components/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { BreadcrumbSevenComponent } from 'src/shared-module/Theme/components/breadcrumb/breadcrumb-seven/breadcrumb-seven.component';
import { BreadcrumbSixComponent } from 'src/shared-module/Theme/components/breadcrumb/breadcrumb-six/breadcrumb-six.component';
import { BreadcrumbTenComponent } from 'src/shared-module/Theme/components/breadcrumb/breadcrumb-ten/breadcrumb-ten.component';
import { BreadcrumbThreeComponent } from 'src/shared-module/Theme/components/breadcrumb/breadcrumb-three/breadcrumb-three.component';
import { BreadcrumbTwoComponent } from 'src/shared-module/Theme/components/breadcrumb/breadcrumb-two/breadcrumb-two.component';
import { ContactComponent } from 'src/shared-module/Theme/components/contact/contact.component';
import { ContentEightComponent } from 'src/shared-module/Theme/components/content/content-eight/content-eight.component';
import { ContentFiveComponent } from 'src/shared-module/Theme/components/content/content-five/content-five.component';
import { ContentFourComponent } from 'src/shared-module/Theme/components/content/content-four/content-four.component';
import { ContentNineComponent } from 'src/shared-module/Theme/components/content/content-nine/content-nine.component';
import { ContentOneComponent } from 'src/shared-module/Theme/components/content/content-one/content-one.component';
import { ContentSevenComponent } from 'src/shared-module/Theme/components/content/content-seven/content-seven.component';
import { ContentSixComponent } from 'src/shared-module/Theme/components/content/content-six/content-six.component';
import { ContentThreeComponent } from 'src/shared-module/Theme/components/content/content-three/content-three.component';
import { ContentTwoComponent } from 'src/shared-module/Theme/components/content/content-two/content-two.component';
import { CounterOneComponent } from 'src/shared-module/Theme/components/counter/counter-one/counter-one.component';
import { CounterTwoComponent } from 'src/shared-module/Theme/components/counter/counter-two/counter-two.component';
import { CtaOneComponent } from 'src/shared-module/Theme/components/cta/cta-one/cta-one.component';
import { CtaTwoComponent } from 'src/shared-module/Theme/components/cta/cta-two/cta-two.component';
import { DownloadOneComponent } from 'src/shared-module/Theme/components/download/download-one/download-one.component';
import { DownloadTwoComponent } from 'src/shared-module/Theme/components/download/download-two/download-two.component';
import { FaqOneComponent } from 'src/shared-module/Theme/components/faq/faq-one/faq-one.component';
import { FaqThreeComponent } from 'src/shared-module/Theme/components/faq/faq-three/faq-three.component';
import { FaqTwoComponent } from 'src/shared-module/Theme/components/faq/faq-two/faq-two.component';
import { FeatureOneComponent } from 'src/shared-module/Theme/components/features/feature-one/feature-one.component';
import { FeatureThreeComponent } from 'src/shared-module/Theme/components/features/feature-three/feature-three.component';
import { FeatureTwoComponent } from 'src/shared-module/Theme/components/features/feature-two/feature-two.component';
import { FooterFiveComponent } from 'src/shared-module/Theme/components/footer/footer-five/footer-five.component';
import { FooterFourComponent } from 'src/shared-module/Theme/components/footer/footer-four/footer-four.component';
import { FooterOneComponent } from 'src/shared-module/Theme/components/footer/footer-one/footer-one.component';
import { FooterSixComponent } from 'src/shared-module/Theme/components/footer/footer-six/footer-six.component';
import { FooterThreeComponent } from 'src/shared-module/Theme/components/footer/footer-three/footer-three.component';
import { FooterTwoComponent } from 'src/shared-module/Theme/components/footer/footer-two/footer-two.component';
import { HeroFiveComponent } from 'src/shared-module/Theme/components/hero/hero-five/hero-five.component';
import { HeroFourComponent } from 'src/shared-module/Theme/components/hero/hero-four/hero-four.component';
import { HeroOneComponent } from 'src/shared-module/Theme/components/hero/hero-one/hero-one.component';
import { HeroSixComponent } from 'src/shared-module/Theme/components/hero/hero-six/hero-six.component';
import { HeroThreeComponent } from 'src/shared-module/Theme/components/hero/hero-three/hero-three.component';
import { HeroTwoComponent } from 'src/shared-module/Theme/components/hero/hero-two/hero-two.component';
import { ForgotComponent } from 'src/shared-module/Theme/components/inner-pages/accounts/forgot/forgot.component';
import { LoginComponent } from 'src/shared-module/Theme/components/inner-pages/accounts/login/login.component';
import { SignupComponent } from 'src/shared-module/Theme/components/inner-pages/accounts/signup/signup.component';
import { BlogDetailsLeftSidebarComponent } from 'src/shared-module/Theme/components/inner-pages/blog-page/blog-details-left-sidebar/blog-details-left-sidebar.component';
import { BlogDetailsRightSidebarComponent } from 'src/shared-module/Theme/components/inner-pages/blog-page/blog-details-right-sidebar/blog-details-right-sidebar.component';
import { BlogLeftSidebarComponent } from 'src/shared-module/Theme/components/inner-pages/blog-page/blog-left-sidebar/blog-left-sidebar.component';
import { BlogRightSidebarComponent } from 'src/shared-module/Theme/components/inner-pages/blog-page/blog-right-sidebar/blog-right-sidebar.component';
import { BlogThreeColumnComponent } from 'src/shared-module/Theme/components/inner-pages/blog-page/blog-three-column/blog-three-column.component';
import { BlogTwoColumnComponent } from 'src/shared-module/Theme/components/inner-pages/blog-page/blog-two-column/blog-two-column.component';
import { ComingSoonComponent } from 'src/shared-module/Theme/components/inner-pages/coming-soon/coming-soon.component';
import { ContactPageComponent } from 'src/shared-module/Theme/components/inner-pages/contact-page/contact-page.component';
import { DownloadPageComponent } from 'src/shared-module/Theme/components/inner-pages/download-page/download-page.component';
import { ErrorOneComponent } from 'src/shared-module/Theme/components/inner-pages/error-page/error-one/error-one.component';
import { ErrorTwoComponent } from 'src/shared-module/Theme/components/inner-pages/error-page/error-two/error-two.component';
import { FaqPageComponent } from 'src/shared-module/Theme/components/inner-pages/faq-page/faq-page.component';
import { MaintenanceComponent } from 'src/shared-module/Theme/components/inner-pages/maintenance/maintenance.component';
import { NewsletterComponent } from 'src/shared-module/Theme/components/inner-pages/newsletter/newsletter.component';
import { PricingPageComponent } from 'src/shared-module/Theme/components/inner-pages/pricing-page/pricing-page.component';
import { ReviewPageComponent } from 'src/shared-module/Theme/components/inner-pages/review-page/review-page.component';
import { ThankYouComponent } from 'src/shared-module/Theme/components/inner-pages/thank-you/thank-you.component';
import { MapComponent } from 'src/shared-module/Theme/components/map/map.component';
import { PricingOneComponent } from 'src/shared-module/Theme/components/pricing/pricing-one/pricing-one.component';
import { PricingThreeComponent } from 'src/shared-module/Theme/components/pricing/pricing-three/pricing-three.component';
import { PricingTwoComponent } from 'src/shared-module/Theme/components/pricing/pricing-two/pricing-two.component';
import { PromoFourComponent } from 'src/shared-module/Theme/components/promo/promo-four/promo-four.component';
import { PromoOneComponent } from 'src/shared-module/Theme/components/promo/promo-one/promo-one.component';
import { PromoThreeComponent } from 'src/shared-module/Theme/components/promo/promo-three/promo-three.component';
import { PromoTwoComponent } from 'src/shared-module/Theme/components/promo/promo-two/promo-two.component';
import { ReviewComponent } from 'src/shared-module/Theme/components/review/review.component';
import { ScreenshotOneComponent } from 'src/shared-module/Theme/components/screenshots/screenshot-one/screenshot-one.component';
import { ScreenshotTwoComponent } from 'src/shared-module/Theme/components/screenshots/screenshot-two/screenshot-two.component';
import { ScrollupComponent } from 'src/shared-module/Theme/components/scrollup/scrollup.component';
import { TeamOneComponent } from 'src/shared-module/Theme/components/team/team-one/team-one.component';
import { TeamTwoComponent } from 'src/shared-module/Theme/components/team/team-two/team-two.component';
import { VideoComponent } from 'src/shared-module/Theme/components/video/video.component';
import { AppContainerComponent } from 'src/shared-module/Theme/themes/app-container/app-container.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseService } from './shared/services/base.service';
import { EmployeeConfirmAccountComponent } from 'src/auth/components/employee-confirm-account/employee-confirm-account.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { SharedDataService } from './shared/services/shared-data.service';
import { AuthorizeService } from './shared/services/authorize.service';
import { AuthorizeInterceptor } from './shared/services/authorize.interceptor';
import { EmployeeCompleteProfileComponent } from 'src/auth/components/employee-complete-profile/employee-complete-profile.component';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { AgmCoreModule } from '@agm/core';
import { EmployerConfirmAccountComponent } from 'src/auth/components/employer-confirm-account/employer-confirm-account.component';
import { EmployerCompleteProfileComponent } from 'src/auth/components/employer-complete-profile/employer-complete-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerModule } from 'ng2-datepicker';
import { AuthorizeGuard } from 'src/auth/authorize.guard';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { AuthChooseLoginTypeComponent } from 'src/auth/components/auth-choose-login-type/auth-choose-login-type.component';
import { EmployeeAuthLoginComponent } from 'src/auth/components/employee-auth-login/employee-auth-login.component';
import { EmployerAuthLoginComponent } from 'src/auth/components/employer-auth-login/employer-auth-login.component';
import { AppHeaderComponent } from 'src/shared-module/Theme/components/header/header.component';


const ngWizardConfig: NgWizardConfig = {
  theme: THEME.dots
};

@NgModule({
  declarations: [
    AppComponent,           //|| Used Compnents
    AppHeaderComponent,           //|| Used Compnents
    AppContainerComponent,           //|| Used Compnents
    PromoFourComponent,           //|| Used Compnents
    HeroSixComponent,           //|| Used Compnents
    ContentFiveComponent,           //|| Used Compnents
    ContentSixComponent,           //|| Used Compnents
    ContactComponent,           //|| Used Compnents
    FooterFiveComponent,              //|| Used Compnents 
    EmployeeConfirmAccountComponent,
    EmployeeCompleteProfileComponent, 
    AuthChooseLoginTypeComponent,
    EmployerAuthLoginComponent,            //|| Used Compnents 
    /* Used Components  */

    HeroOneComponent,
    HeroTwoComponent,
    HeroThreeComponent,
    HeroFourComponent,
    HeroFiveComponent,
    PromoOneComponent,
    PromoTwoComponent,
    PromoThreeComponent,
    FeatureOneComponent,
    FeatureTwoComponent,
    FeatureThreeComponent,
    HomeComponent,
    ScreenshotOneComponent,
    ScreenshotTwoComponent,
    ContentOneComponent,
    ContentTwoComponent,
    ContentThreeComponent,
    ContentFourComponent,
    ContentSevenComponent,
    ContentEightComponent,
    ContentNineComponent,
    PricingOneComponent,
    PricingTwoComponent,
    PricingThreeComponent,
    ReviewComponent,
    TeamOneComponent,
    TeamTwoComponent,
    CtaOneComponent,
    CtaTwoComponent,
    DownloadOneComponent,
    DownloadTwoComponent,
    FaqOneComponent,
    FaqTwoComponent,
    FooterOneComponent,
    FooterTwoComponent,
    FooterThreeComponent,
    FooterFourComponent,
    ScrollupComponent,
    VideoComponent,
    AboutOneComponent,
    AboutTwoComponent,
    CounterOneComponent,
    CounterTwoComponent,
    BrandingComponent,
    BreadcrumbOneComponent,
    BreadcrumbTwoComponent,
    BreadcrumbThreeComponent,
    BreadcrumbFourComponent,
    BreadcrumbFiveComponent,
    BreadcrumbSixComponent,
    BreadcrumbSevenComponent,
    BreadcrumbEightComponent,
    BreadcrumbNineComponent,
    BreadcrumbTenComponent,
    FooterSixComponent,
    MapComponent,
    BlogOneComponent,
    BlogTwoComponent,
    BlogThreeComponent,
    BlogFourComponent,
    BlogFiveComponent,
    BlogSixComponent,
    PricingPageComponent,
    ReviewPageComponent,
    FaqPageComponent,
    DownloadPageComponent,
    ThankYouComponent,
    NewsletterComponent,
    ErrorOneComponent,
    ErrorTwoComponent,
    ContactPageComponent,
    MaintenanceComponent,
    ComingSoonComponent,
    BlogTwoColumnComponent,
    BlogThreeColumnComponent,
    BlogLeftSidebarComponent,
    BlogRightSidebarComponent,
    BlogDetailsLeftSidebarComponent,
    BlogDetailsRightSidebarComponent,
    SignupComponent,
    ForgotComponent,
    FaqThreeComponent,
    LoginComponent, EmployeeAuthLoginComponent, AuthSignupComponent, EmployeeRegistrationComponent, EmployerRegistrationComponent, EmployerConfirmAccountComponent, EmployerCompleteProfileComponent
  ],
  imports: [
    BrowserModule,
    //AuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxOtpInputModule,
    NgWizardModule.forRoot(ngWizardConfig),
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem(environment.token);
        },
        allowedDomains: [environment.apiPreLink],
        disallowedRoutes: [],
      },
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSamngRk_CQ_vlRLbYNtO00MtUkm0bXmE'
    }),
    DatepickerModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
  ],
  providers: [
    AuthorizeGuard,
    BaseService,
    SharedDataService,
    AuthorizeService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
