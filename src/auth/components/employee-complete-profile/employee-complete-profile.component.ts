import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { BaseService } from 'src/app/shared/services/base.service';
import { Actions, Controllers } from 'src/app/shared/global-variables/api-config';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME, TOOLBAR_BUTTON_POSITION, TOOLBAR_POSITION } from 'ng-wizard';
import { SkillModel, UserSkillModel } from 'src/app/shared/models/skill.model';
import { ExperienceType, TitleLevel } from 'src/app/shared/models/enums.model';
import { AuthorizeService } from 'src/app/shared/services/authorize.service';
import { ExperienceModel } from 'src/app/shared/models/experience.model';
import { DatepickerOptions } from 'ng2-datepicker';
import { EmployeeAttachmentModel } from 'src/app/shared/models/attachments.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-employee-complete-profile',
  templateUrl: './employee-complete-profile.component.html',
  styleUrls: ['./employee-complete-profile.component.scss']
})
export class EmployeeCompleteProfileComponent implements OnInit {
  public lat = 31.953589;
  public lng = 35.910665;
  public myDateValue: Date;
  public skills: SkillModel[] = [];
  public titleLevels;
  public experienceTypes;
  public skillTypes;
  public loggedInUserId: number;
  public userSkills: UserSkillModel[] = [];
  public userExperience: ExperienceModel[] = [];
  public employeeAttachments : FormData=new FormData();
  firstName: string;
  lastName: string;
  yearOfBirth: number;
  lastEducationLevel: string;
  personalPicture : string;
  noCriminalRecord : string;
  personalId : string;
  lastEducationCertificate : string;

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
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    yearOfBirth: new FormControl(''),
    gender: new FormControl(''),
    lastEducationLevel: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    skills: new FormControl(''),
    experiences: new FormControl(''),
    noPrevExperience: new FormControl(false),
  });

  public experienceForm = new FormGroup({
    experienceType: new FormControl('', Validators.required),
    jobTitle: new FormControl('', Validators.required),
    employer: new FormControl('', Validators.required),
    from: new FormControl (new Date()),
    to: new FormControl(new Date()),
    applicationUserId: new FormControl(''),
    noPrevExperience: new FormControl(false),
  });
  public skillControl = new FormControl();
  public titleLevelControl = new FormControl();
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
  options: DatepickerOptions = {
    calendarClass: 'datepicker-blue',
    scrollBarColor: '#ffffff',
    placeholder: 'Choose the date'
  };
  ngOnInit() {
    this.spinner.show();
    this.myDateValue = new Date();
    this.loggedInUserId = this.auhtService.getLoggedInUserId();
    this.titleLevels = TitleLevel;
    this.experienceTypes = ExperienceType;
    this.skillTypes = TitleLevel;
    this.GetProfile();
    this.GetAttachments();
    this.getAllSkills();
  }
  public getAllSkills() {
    this.baseService.getAll(Controllers.Skill).subscribe(res => {
      this.skills = res;
      this.spinner.hide();
    })
  }
  public GetProfile() {
    this.baseService.GetProfile(Controllers.Employee).subscribe(res => {
      this.profileForm.patchValue(res);
      this.userExperience=res.userExperience;
      this.userSkills=res.userSkill;
       this.lat = res.latitude;
       this.lng = res.longitude;
      this.getExperienceFormControlByName('noPrevExperience').setValue(res.noPrevExperience?res.noPrevExperience:false);
      this.getFormControlByName('firstName').setValue(res.fullName.substring(0,res.fullName.indexOf(' ')).trim());
      this.getFormControlByName('lastName').setValue(res.fullName.substring(res.fullName.indexOf(' ')).trim());
      console.log(res);
      this.spinner.hide();
    })
  }
  public GetAttachments() {
    this.baseService.GetEmployeeAttachments(Controllers.WebEmployeeAuth).subscribe(res => {
      this.personalPicture = res.personalPicturePath;
       this.noCriminalRecord = res.noCriminalRecordPath;
       this.personalId = res.personalId;
       this.lastEducationCertificate = res.lastEducationCertificatePath;
      this.spinner.hide();
    })
  }
  public addToSkills() {
    const skillToAdd = new UserSkillModel();
    skillToAdd.skillId = this.skillControl.value;
    const skill = this.skills.find(x => x.id == skillToAdd.skillId);
    if(skill && this.titleLevelControl.value){
    skillToAdd.skillName = skill.name;
    skillToAdd.titleLevel = Number(this.titleLevelControl.value);
    skillToAdd.titleLevelName = TitleLevel.find(x => x.id == skillToAdd.titleLevel).name;
    skillToAdd.userId = this.loggedInUserId;

    this.baseService.postItem(Controllers.WebEmployeeAuth, Actions.addUserSkill, skillToAdd).subscribe(response => {
      this.baseService.GetProfile(Controllers.Employee).subscribe(res => {
        this.userSkills=res.userSkill;
        this.getFormControlByName('skills').setValue(res.userSkill);
      })
      
      this.notification.showNotification('Skill was added successfully', 'success');
    }, error => {
      console.log(error);
      this.notification.showNotification('Something went wrong please contact system admin', 'danger');
      this.spinner.hide();
    });
  }else{
    this.notification.showNotification('Please Check Form Fields', 'warning');
  }
    
    
  }
  CutTimeZoneDate(dateForm, controlName){
    let date:Date = dateForm
    date.setHours(date.getHours() - date.getTimezoneOffset() / 60);
    this.experienceForm.controls[controlName].setValue(date)
  }
  public addToExperience() {
    if(this.experienceForm.valid){
    if(new Date(this.experienceForm.controls['from'].value)>new Date(this.experienceForm.controls['to'].value))
      this.notification.showNotification('from Date cant before to date', 'warning');
      else{
    this.CutTimeZoneDate(this.experienceForm.controls['from'].value, 'from');
    this.CutTimeZoneDate(this.experienceForm.controls['to'].value, 'to');
    this.getExperienceFormControlByName('applicationUserId').setValue(this.loggedInUserId);
    this.baseService.postItem(Controllers.WebEmployeeAuth, Actions.addUserExperience, this.experienceForm.value).subscribe(response => {   
    this.baseService.GetProfile(Controllers.Employee).subscribe(res => {
      this.userExperience=res.userExperience;
      this.getFormControlByName('experiences').setValue(this.userExperience);
    })
    
      this.notification.showNotification('Experience was added successfully', 'success');
      this.experienceForm.reset();
      this.experienceForm.controls.from.setValue(new Date());
      this.experienceForm.controls.to.setValue(new Date());
      this.getExperienceFormControlByName('noPrevExperience').setValue(false);
    }, error => {
      console.log(error);
      
      this.spinner.hide();
    });
  }
}else{
  this.notification.showNotification('Please Check Form Fields', 'warning');
  }
  }
  public removeUserSkill(userSkill: UserSkillModel) {
    console.log(userSkill);
    this.baseService.postItem(Controllers.WebEmployeeAuth, Actions.removeUserSkill, userSkill).subscribe(response => {
      this.userSkills = this.userSkills.filter(skill => skill != userSkill);
      this.notification.showNotification('Skill was deleted successfully', 'success');
    }, error => {
      console.log(error);
      this.notification.showNotification('Something went wrong please contact system admin', 'danger');
      this.spinner.hide();
    });
    
  }
  public removeUserExperience(userExperience: ExperienceModel) {
    console.log(userExperience);
    this.baseService.postItem(Controllers.WebEmployeeAuth, Actions.removeUserExperience, userExperience).subscribe(response => {
      this.userExperience = this.userExperience.filter(ecperience => ecperience != userExperience);
      this.notification.showNotification('Experience was deleted successfully', 'success');
    }, error => {
      console.log(error);
      this.notification.showNotification('Something went wrong please contact system admin', 'danger');
      this.spinner.hide();
    });
    
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
  public getExperienceFormControlByName(controlName: string): FormControl {
    return this.experienceForm.get(controlName) as FormControl;
  }
  public mapClicked(event) {
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.getFormControlByName('latitude').setValue(this.lat.toString());
    this.getFormControlByName('longitude').setValue(this.lng.toString());
  }
  public handlePersonalPictureFile(file: File) {
    if (file) {
      this.employeeAttachments.append('PersonalPicture',file);
      console.log(file)
      this.notification.showNotification( 'Document attached successfully', 'success');
    } else {
      this.notification.showNotification( 'Please Select File', 'danger');
    }
  }
  public handleLastEducationCertificateFile(file: File) {
    if (file) {
      this.employeeAttachments.append('LastEducationCertificate',file);
      console.log(file)
      this.notification.showNotification( 'Document attached successfully', 'success');
    } else {
      this.notification.showNotification( 'Please Select File', 'danger');
    }
  }
  public handleNoCriminalRecordFile(file: File) {
    if (file) {
      this.employeeAttachments.append('NoCriminalRecord',file);
      console.log(file)
      this.notification.showNotification( 'Document attached successfully', 'success');
    } else {
      this.notification.showNotification( 'Please Select File', 'danger');
    }
  }
  public handlePersonalIdFile(file: File) {
    if (file) {
      this.employeeAttachments.append('PersonalId',file);
      console.log(file)
      this.notification.showNotification( 'Document attached successfully', 'success');
    } else {
      this.notification.showNotification( 'Please Select File', 'danger');
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
      profileForm.noPrevExperience = this.experienceForm.controls.noPrevExperience.value;
      this.baseService.postItem(Controllers.WebEmployeeAuth, Actions.UpdateProfile, profileForm).subscribe(response => {
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
  public submitAttachments(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      this.notification.showNotification('Please Check Form Fields', 'warning');
      this.spinner.hide();
    }
    else {
      this.baseService.postFormData(Controllers.WebEmployeeAuth, Actions.UploadProfileAttachment, this.employeeAttachments).subscribe(response => {
        this.spinner.hide();
        this.notification.showNotification( 'Profile updated successfully', 'success');
      }, error => {
        console.log(error);
        this.notification.showNotification('Something went wrong please contact system admin', 'danger');
        this.spinner.hide();
      });
    }
  }
  downloadPersonalpicture(){
    if(this.personalPicture != null){
      this.baseService.downloadFile(Controllers.WebEmployeeAuth, Actions.downloadEmployeeFile, this.personalPicture).subscribe(res => {
        this.downLoadFile(res, "application/ms-excel")
      })
    }else{
      this.notification.showNotification('There is no upload attachment to download', 'warning');
    }
  }
  downloadLastEducationCertificate(){
    if(this.lastEducationCertificate != null){
      this.baseService.downloadFile(Controllers.WebEmployeeAuth, Actions.downloadEmployeeFile, this.lastEducationCertificate).subscribe(res => {
        this.downLoadFile(res, "application/ms-excel")
      })
    }else{
      this.notification.showNotification('There is no upload attachment to download', 'warning');
    }
  }
  downloadNoCriminalRecord(){
    if(this.noCriminalRecord != null){
      this.baseService.downloadFile(Controllers.WebEmployeeAuth, Actions.downloadEmployeeFile, this.noCriminalRecord).subscribe(res => {
        this.downLoadFile(res, "application/ms-excel")
      })
    }else{
      this.notification.showNotification('There is no upload attachment to download', 'warning');
    }
  }
  downloadPersonalId(){
    if(this.personalId != null){
      this.baseService.downloadFile(Controllers.WebEmployeeAuth, Actions.downloadEmployeeFile, this.personalId).subscribe(res => {
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
}
