import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from 'src/auth/authorize.guard';
import { AuthChooseLoginTypeComponent } from 'src/auth/components/auth-choose-login-type/auth-choose-login-type.component';
import { AuthSignupComponent } from 'src/auth/components/auth-signup/auth-signup.component';
import { EmployeeAuthLoginComponent } from 'src/auth/components/employee-auth-login/employee-auth-login.component';
import { EmployeeCompleteProfileComponent } from 'src/auth/components/employee-complete-profile/employee-complete-profile.component';
import { EmployeeConfirmAccountComponent } from 'src/auth/components/employee-confirm-account/employee-confirm-account.component';
import { EmployeeRegistrationComponent } from 'src/auth/components/employee-registration/employee-registration.component';
import { EmployerAuthLoginComponent } from 'src/auth/components/employer-auth-login/employer-auth-login.component';
import { EmployerCompleteProfileComponent } from 'src/auth/components/employer-complete-profile/employer-complete-profile.component';
import { EmployerConfirmAccountComponent } from 'src/auth/components/employer-confirm-account/employer-confirm-account.component';
import { EmployerRegistrationComponent } from 'src/auth/components/employer-registration/employer-registration.component';
import { HomeComponent } from 'src/main/components/home/home.component';
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




const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'pricing', component: PricingPageComponent },
  { path: 'reviews', component: ReviewPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'download', component: DownloadPageComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'error-one', component: ErrorOneComponent },
  { path: 'error-two', component: ErrorTwoComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'blog-two-column', component: BlogTwoColumnComponent },
  { path: 'blog-three-column', component: BlogThreeColumnComponent },
  { path: 'blog-left-sidebar', component: BlogLeftSidebarComponent },
  { path: 'blog-right-sidebar', component: BlogRightSidebarComponent },
  { path: 'blog-details-left-sidebar', component: BlogDetailsLeftSidebarComponent },
  { path: 'blog-details-right-sidebar', component: BlogDetailsRightSidebarComponent },
  { path: "choose-login-type", component: AuthChooseLoginTypeComponent },
  { path: "employee-login", component: EmployeeAuthLoginComponent },
  { path: "employer-login", component: EmployerAuthLoginComponent },
  { path: "sign-up", component: AuthSignupComponent },
  { path: "employee-registration", component: EmployeeRegistrationComponent },
  { path: "employer-registration", component: EmployerRegistrationComponent },
  { path: "employee-confirm-account", component: EmployeeConfirmAccountComponent },
  { path: "employee-complete-profile", component: EmployeeCompleteProfileComponent, canActivate: [AuthorizeGuard]  },
  { path: "employer-confirm-account", component: EmployerConfirmAccountComponent  },
  { path: "employer-complete-profile", component: EmployerCompleteProfileComponent, canActivate: [AuthorizeGuard] },
  { path: "", component: HomeComponent },
  { path: "**", component: HomeComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled',useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }