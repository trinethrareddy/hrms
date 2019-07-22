import { Component, OnInit } from '@angular/core';
import { WebConfig } from 'src/app/models';
import { UtilService } from 'src/app/utils/util.service';
import { WEB_CONFIGS } from 'src/app/shared/enums';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  webConfigData: WebConfig;
  aboutUsText: string;
  departments: Array<string> = [];
  constructor(private utilService: UtilService) { }

  ngOnInit() {
    const resp = {
      data: {
        bookAppointment: true,
        'organisationWebsiteId': 6,
        'contactNm': '9703180920',
        'emailAddress': 'naresh.uppara@dru.care',
        'emergencyContactNo': '9703180920',
        'workingType': 'yes',
        'workingHourNotes': 'working hours description test',
        'createdUsrId': 220190706000001,
        'orgId': 1871,
        'orgGrpId': 3286,
        'addressLine1': '#402, Plot No 118/b, Sri Sai Nagar, Opp KKR Gowtham School, Lucid Diagnostics Lane, Kukatpally, Hyderabad, Telangana 500085.',
        'createdDttm': '2019-07-20 16:40:30.71395',
        'services': 'Dermatologist,Diabetologist,Dietitian/Nutritionist,Ear-Nose-Throat (ENT),Endocrinologist,Endodontist,Gastroenterologist,Gynecologist/Obstetrician, Dermatologist,Diabetologist,Dietitian/Nutritionist,Ear-Nose-Throat (ENT),Endocrinologist,Endodontist,Gastroenterologist,Gynecologist/Obstetrician',
        'organisationGalleryTransList': [
          {
            'galleryId': 16,
            'imagePath': 'https://s3.ap-south-1.amazonaws.com/dru.provider.profile.image/1HDK7oRh-shield.jpg',
            'isActive': true,
            'createdUsrId': 220190706000001,
            'createdDttm': '2019-07-20 16:40:30.797343',
            'orgId': 1871
          },
          {
            'galleryId': 17,
            'imagePath': 'https://s3.ap-south-1.amazonaws.com/dru.provider.profile.image/SMm6b7F2-0.png',
            'isActive': true,
            'createdUsrId': 220190706000001,
            'createdDttm': '2019-07-20 16:40:30.802302',
            'orgId': 1871
          }
        ],
        'websiteOrgTimingsTransList': [
          {
            'orgTimeId': 16,
            'startDay': 'monaa',
            'endDay': 'fri',
            'startDate': 5400000,
            'endDate': 16200000,
            'orgId': 1871,
            'isActive': true,
            'createdUsrId': 220190706000001
          },
          {
            'orgTimeId': 17,
            'startDay': 'saturday',
            'endDay': '',
            'startDate': 5400000,
            'endDate': 16200000,
            'orgId': 1871,
            'isActive': true,
            'createdUsrId': 220190706000001
          },
          {
            'orgTimeId': 18,
            'startDay': 'sunday',
            'endDay': '',
            'startDate': 5400000,
            'endDate': 16200000,
            'orgId': 1871,
            'isActive': true,
            'createdUsrId': 220190706000001
          }
        ],
        'websiteSetupTransList': [
          {
            'websiteSetupId': 34,
            'setupNm': 'about_org',
            'setupLink': null,
            'setupImage': null,
            'description': 'About organization description test',
            'isActive': true,
            'createdUsrId': 220190706000001,
            'orgId': 1871
          },
          {
            'websiteSetupId': 35,
            'setupNm': 'achievements',
            'setupLink': null,
            'setupImage': null,
            'description': 'Achievements description test',
            'isActive': true,
            'createdUsrId': 220190706000001,
            'orgId': 1871
          },
          {
            'websiteSetupId': 31,
            'setupNm': 'banner_image',
            'setupLink': null,
            'setupImage': 'https://s3.ap-south-1.amazonaws.com/dru.provider.profile.image/1HDK7oRh-shield.jpg',
            'description': 'banner description _one',
            'isActive': true,
            'createdUsrId': 220190706000001,
            'orgId': 1871
          },
          {
            'websiteSetupId': 32,
            'setupNm': 'banner_image',
            'setupLink': null,
            'setupImage': 'https://s3.ap-south-1.amazonaws.com/dru.provider.profile.image/1HDK7oRh-shield.jpg',
            'description': 'banner description _two',
            'isActive': true,
            'createdUsrId': 220190706000001,
            'orgId': 1871
          },
          {
            'websiteSetupId': 33,
            'setupNm': 'banner_image',
            'setupLink': null,
            'setupImage': 'https://s3.ap-south-1.amazonaws.com/dru.provider.profile.image/1HDK7oRh-shield.jpg',
            'description': 'banner description _three',
            'isActive': true,
            'createdUsrId': 220190706000001,
            'orgId': 1871
          }
        ],
        'websiteDoctorsInfoTransList': [
          {
            'websiteDoctorId': 5,
            'empId': 220190706000005,
            'doctorNm': 'naresh_u',
            'doctorSpeciality': 'Auyurvedic',
            'doctorImage': 'https://s3.ap-south-1.amazonaws.com/dru.provider.profile.image/1HDK7oRh-shield.jpg',
            'isActive': true,
            'createdUsrId': 220190706000001,
            'orgId': 1871
          },
          {
            'websiteDoctorId': 6,
            'empId': 220190706000005,
            'doctorNm': 'Naresh Uppara',
            'doctorSpeciality': 'Auyurvedic',
            'doctorImage': 'https://s3.ap-south-1.amazonaws.com/dru.provider.profile.image/1HDK7oRh-shield.jpg',
            'isActive': true,
            'createdUsrId': 220190706000001,
            'orgId': 1871
          }
        ]
      },
      'responseCode': 'E200',
      'responseMessage': 'DATA FETCHED SUCCESSFULLY',
      'validations': [
        {
          'message': 'DATA FETCHED SUCCESSFULLY',
          'errCode': 'FET001'
        }
      ]
    };
    this.webConfigData = resp.data;
    if (this.webConfigData && this.webConfigData.websiteSetupTransList && this.webConfigData.websiteSetupTransList.length) {
      const aboutUsData = this.utilService.filterActiveItems(this.webConfigData.websiteSetupTransList, 'setupNm', WEB_CONFIGS.ABOUT_US);
      // about us
      if (aboutUsData && aboutUsData.length) {
        this.aboutUsText = aboutUsData[0].description;
      }
      // Services
      this.departments = this.utilService.getServices(this.webConfigData.services || '');
      console.log('departments::', this.departments);
    }
  }
}
