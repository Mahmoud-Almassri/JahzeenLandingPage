import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME, TOOLBAR_BUTTON_POSITION } from 'ng-wizard';
import { NgxSpinnerService } from 'ngx-spinner';
import { of } from 'rxjs';
import { Actions, Controllers } from 'src/app/shared/global-variables/api-config';
import { CompanyAttachmentModel } from 'src/app/shared/models/attachments.model';
import { TitleLevel } from 'src/app/shared/models/enums.model';
import { CompanyBraches } from 'src/app/shared/models/skill.model';
import { AuthorizeService } from 'src/app/shared/services/authorize.service';
import { BaseService } from 'src/app/shared/services/base.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

export enum FilesName{
  Logo = 1,
  Commerical = 2,
  OtherAttachment = 3
}
@Component({
  selector: 'app-employer-complete-profile',
  templateUrl: './employer-complete-profile.component.html',
  styleUrls: ['./employer-complete-profile.component.scss']
})
export class EmployerCompleteProfileComponent implements OnInit {

  public lat = 31.953589;
  public lng = 35.910665;
  public CompanyBranches: CompanyBraches[] = [];
  public titleLevels;
  public loggedInUserId: number;
  public companyAttachemt : FormData=new FormData();

  public LogoFile : File
  public OtherAttachmentFile : File
  public CommericalFile : File

  companyLogo : string;
  commercialRegister : string;
  otherAttachment : string;

  constructor(
    private baseService: BaseService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private auhtService: AuthorizeService,
    private ngWizardService: NgWizardService,
    private notification: NotificationService) {
  }
  public isValidTypeBoolean: boolean = true;
  public profileForm = new FormGroup({
    companyName: new FormControl(''),
    contactPersonName: new FormControl(''),
    contactPersonTitle: new FormControl(''),
    mobileNumber: new FormControl(''),
    //  companyLogoPath:new FormControl(''),
    //  CommercialRegisterPath:new FormControl(''),
    //  OtherAttachmentPath:new FormControl(''),
    companySize: new FormControl(''),
    industryOption: new FormControl(''),
    
  });
  public branchName = new FormControl('', Validators.required);
  public city = new FormControl('', Validators.required);
  public street = new FormControl('', Validators.required);
  public area = new FormControl('', Validators.required);

  
  public stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };
  public wizardConfig: NgWizardConfig = {
    selected: 0,
    theme: THEME.dots,
    toolbarSettings: {
      toolbarButtonPosition: TOOLBAR_BUTTON_POSITION.end,
      toolbarExtraButtons: [
        { text: 'Finish', class: 'btn btn-info', event: () => { this.submitForm(); } }
      ],
    }
  };
  ngOnInit() {
    this.loggedInUserId = this.auhtService.getLoggedInUserId();
    this.GetProfile();
  }
  public GetProfile() {
    this.baseService.GetProfile(Controllers.Employer).subscribe(res => {
      this.profileForm.patchValue(res);
      this.companyLogo = res.companyLogoPath;
      this.commercialRegister = res.commercialRegisterPath;
      this.otherAttachment = res.otherAttachmentPath;
      this.getFormControlByName('mobileNumber').setValue(res.contactPersonMobileNumber);
      this.getFormControlByName('industryOption').setValue(res.industryOption);
      this.CompanyBranches = res.companyBranches ?  res.companyBranches : [] ;
      this.spinner.hide();
    })
  }
  public addToBranches() {
    if(!this.branchName.invalid && !this.city.invalid && !this.street.invalid && !this.area.invalid){
      const companyBranch = new CompanyBraches();
      companyBranch.companyId = 0
      companyBranch.branchName = this.branchName.value
      companyBranch.city = this.city.value
      companyBranch.street = this.street.value
      companyBranch.area = this.area.value
      this.CompanyBranches.push(companyBranch);
      this.branchName.reset();
      this.city.reset();
      this.street.reset();
      this.area.reset();
      this.notification.showNotification('Branch was added successfully', 'success');
    }else{
      this.notification.showNotification('Please check form field', 'warning');
    }
  }
  public removeBranch(companyBranch: CompanyBraches) {
    console.log(companyBranch)
    this.CompanyBranches = this.CompanyBranches.filter(company => company!=companyBranch);
  }
  public showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }

  public showNextStep(event?: Event) {
    this.ngWizardService.next();
  }

  public resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }

  public setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }

  public stepChanged(args: StepChangedArgs) {
    console.log(args.step);
  }

  public isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }

  public isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }
  public getFormControlByName(controlName: string): FormControl {
    return this.profileForm.get(controlName) as FormControl;
  }

 
  public handleCompanyLogoFile(file: File) {
    if (file) {
      this.companyAttachemt.append('CompanyLogoPath',file);
      console.log(this.companyAttachemt);
      console.log(file)
      this.notification.showNotification( 'Document attached successfully', 'success');
    } else {
      this.notification.showNotification( 'Please Select File', 'danger');
    }
  }
  downloadCompanyLogo(){
    if(this.companyLogo != null){
      this.baseService.downloadFile(Controllers.WebEmployerAuth, Actions.downloadEmployerFile, this.companyLogo).subscribe(res => {
        this.downLoadFile(res, "application/ms-excel")
      })
    }else{
      this.notification.showNotification('There is no upload attachment to download', 'warning');
    }
  }
  downloadCommercialRegister(){
    if(this.commercialRegister != null){
      this.baseService.downloadFile(Controllers.WebEmployerAuth, Actions.downloadEmployerFile, this.commercialRegister).subscribe(res => {
        this.downLoadFile(res, "application/ms-excel")
      })
    }else{
      this.notification.showNotification('There is no upload attachment to download', 'warning');
    }
  }
  downloadOtherAttachment(){
    if(this.otherAttachment != null){
      this.baseService.downloadFile(Controllers.WebEmployerAuth, Actions.downloadEmployerFile, this.otherAttachment).subscribe(res => {
        this.downLoadFile(res, "application/ms-excel")
      })
    }else{
      this.notification.showNotification('There is no upload attachment to download', 'warning');
    }


  }
   downLoadFile(data: any, type: string) {
        let blob = new Blob([data], { type: type});
        let url = window.URL.createObjectURL(blob);
        let pwa = window.open(url);
        if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
            alert( 'Please disable your Pop-up blocker and try again.');
        }
      }
  public handleCommercialRegisterFile(file: File) {
    if (file) {
      this.companyAttachemt.append('CommercialRegisterPath',file);
      console.log(file)
      this.notification.showNotification( 'Document attached successfully', 'success');
    } else {
      this.notification.showNotification( 'Please Select File', 'danger');
    }
  }
  public handleOtherAttachmentFile(file: File) {
    if (file) {
      this.companyAttachemt.append('OtherAttachmentPath',file);
      console.log(file)
      this.notification.showNotification( 'Document attached successfully', 'success');
    } else {
      this.notification.showNotification( 'Please Select File', 'danger');
    }
  }
  public submitAttachments(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      this.notification.showNotification('Please Check Form Fields', 'warning');
      this.spinner.hide();
    }
    else {
      this.baseService.postFormData(Controllers.WebEmployerAuth, Actions.UploadProfileAttachment, this.companyAttachemt).subscribe(response => {
        this.notification.showNotification( 'Profile updated successfully', 'success');
        this.spinner.hide();
      }, error => {
        console.log(error);
        this.notification.showNotification('Something went wrong please contact system admin', 'danger');
        this.spinner.hide();
      });
    }
  }
  
  public submitForm(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      this.notification.showNotification('Please Check Form Fields', 'warning');
    }
    else {
      this.spinner.show();
      const profileForm = this.profileForm.value;
      profileForm.companyBranches = this.CompanyBranches
      this.baseService.postItem(Controllers.WebEmployerAuth, Actions.UpdateProfile, profileForm).subscribe(response => {
      this.submitAttachments();
        this.spinner.hide();
         this.router.navigate(['/Home']);
      }, error => {
        console.log(error);
        this.notification.showNotification('Something went wrong please contact system admin', 'danger');
        this.spinner.hide();
      });
    }
  }
 

  // public UploadAttachments(){
  //   this.companyAttachemt = {
  //     compnayLogo : this.LogoFile,
  //     commercialRegister : this.CommericalFile,
  //     otherAttachment : this.OtherAttachmentFile
  //   }
  // }
}
