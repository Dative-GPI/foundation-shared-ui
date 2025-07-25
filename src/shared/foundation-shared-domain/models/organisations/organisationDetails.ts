import type { PermissionInfosDTO } from "../permissions/permissionInfos";
import { PermissionInfos } from "../permissions/permissionInfos";
import type { OrganisationInfosDTO } from "./organisationInfos";
import { OrganisationInfos } from "./organisationInfos";
import type { DashboardType } from "../../enums/dashboards";

export class OrganisationDetails extends OrganisationInfos {
    code: string;
    mainDashboardId: string | null;
    mainDashboardType: DashboardType;
    description: string;
    locationsCount: number;
    groupsCount: number;
    deviceOrganisationsCount: number;
    alertsCount: number;
    permissions: PermissionInfos[];

    constructor(params: OrganisationDetailsDTO) {
        super(params);

        this.code = params.code;
        this.mainDashboardType = params.mainDashboardType;
        this.mainDashboardId = params.mainDashboardId;
        this.description = params.description;
        this.locationsCount = params.locationsCount;
        this.groupsCount = params.groupsCount;
        this.deviceOrganisationsCount = params.deviceOrganisationsCount;
        this.alertsCount = params.alertsCount;
        this.permissions = params.permissions.map(dto => new PermissionInfos(dto));
    }
}

export interface OrganisationDetailsDTO extends OrganisationInfosDTO {
    code: string;
    mainDashboardId: string | null;
    mainDashboardType: DashboardType;
    description: string;
    locationsCount: number;
    groupsCount: number;
    deviceOrganisationsCount: number;
    alertsCount: number;
    permissions: PermissionInfosDTO[];
}

export interface UpdateOrganisationDTO {
    imageId: string | null;
    image: string | null;
    label: string;
    description: string;
}