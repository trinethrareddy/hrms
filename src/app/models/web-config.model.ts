export interface Achievement {
    achievementText: string;
    achievementUrl: string;
}

export interface WebConfig {
    organisationWebsiteId: number | string;
    bookAppointment?: boolean;
    contactNm: string;
    emailAddress: string;
    emergencyContactNo?: string;
    emergencyText?: string;
    workingType?: string;
    workingHourNotes?: string;
    description?: string; // no need
    createdUsrId?: string | number;
    orgId?: string | number;
    orgGrpId?: string | number;
    addressLine1?: string | number;
    createdDttm?: string | number;
    abtOrg?: string | number; // no need
    url?: string | number;
    achievementDesc?: string | number; // no need
    services?: any;
    organisationGalleryTransList?: any;
    websiteOrgTimingsTransList?: any;
    websiteSetupTransList: any;
    websiteDoctorsInfoTransList?: any;
}

