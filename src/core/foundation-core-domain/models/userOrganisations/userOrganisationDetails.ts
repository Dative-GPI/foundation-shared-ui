import type { DashboardType, RoleType } from "@dative-gpi/foundation-shared-domain/enums";
import type { PermissionInfosDTO } from "@dative-gpi/foundation-shared-domain/models";
import { PermissionInfos } from "@dative-gpi/foundation-shared-domain/models";

import type { UserOrganisationInfosDTO } from "./userOrganisationInfos";
import { UserOrganisationInfos } from "./userOrganisationInfos";

export class UserOrganisationDetails extends UserOrganisationInfos {
    mainDashboardType: DashboardType;
    mainDashboardId: string | null;
    mainDashboardLabel: string;
    languageCode: string;
    timeZoneId: string;
    permissions: PermissionInfos[];

    constructor(params: UserOrganisationDetailsDTO) {
        super(params);

        this.mainDashboardType = params.mainDashboardType as DashboardType;
        this.mainDashboardId = params.mainDashboardId;
        this.mainDashboardLabel = params.mainDashboardLabel;
        this.languageCode = params.languageCode;
        this.timeZoneId = params.timeZoneId;
        this.permissions = params.permissions.map(dto => new PermissionInfos(dto));
    }
}

export interface UserOrganisationDetailsDTO extends UserOrganisationInfosDTO {
    mainDashboardType: DashboardType;
    mainDashboardId: string | null;
    mainDashboardLabel: string;
    languageCode: string;
    timeZoneId: string;
    permissions: PermissionInfosDTO[];
}

export interface CreateUserOrganisationDTO {
    roleType: RoleType;
    roleId: string | null;
    languageCode: string;
    timeZoneId: string;
    image: string | null;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    tags: string[];
}

export interface UpdateUserOrganisationDTO {
    roleType: RoleType;
    roleId: string | null;
    mainDashboardType: DashboardType;
    mainDashboardId: string | null;
    startOnKioskMode: boolean;
    tags: string[];
}

export interface ChangeCurrentUserOrganisationDashboardDTO {
    mainDashboardType: DashboardType;
    mainDashboardId: string | null;
    startOnKioskMode: boolean;
}