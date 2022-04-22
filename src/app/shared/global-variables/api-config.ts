import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
    })
};


export const httpFormDataOptions = {
    headers: new HttpHeaders({
        // 'Content-Type': undefined
    })
};




export enum Controllers {
  WebEmployeeAuth = 'WebEmployeeAuth/',
  WebEmployerAuth = 'WebEmployerAuth/',
  Skill = "Skill",
  ContactUs = "ContactUs",
  Employee = "Employee/",
  Employer = "Employer/"
}

export enum Actions {
  Login = 'Login',
  GetById = "GetById",
  Get = "Get",
  Signup = "Signup",
  ConfirmAccount = "ConfirmAccount",
  GetAll = "/GetAll",
  UpdateProfile = 'UpdateProfile',
  UploadProfileAttachment = "UploadProfileAttachment",
  Post = "/Create",
  GetProfile = "GetProfile",
  removeUserExperience = "DeleteEmployeeExperience",
  removeUserSkill = "DeleteEmployeeSkill",
  addUserSkill = "AddUserSkill",
  addUserExperience = "AddUserExperience",
  getUserExperiences = "GetEmployeeExperience",
  addCompanyBranch = "AddCompanyBranch",
  downloadEmployerFile = "DownloadEmployerFile",
  downloadEmployeeFile = "DownloadEmployeeFile",
  getEmployeeAttachments = "GetEmployeeAttachments",

}
