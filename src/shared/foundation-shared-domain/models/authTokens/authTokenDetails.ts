import type { AuthTokenInfosDTO } from "./authTokenInfos";
import { AuthTokenInfos } from "./authTokenInfos";

export class AuthTokenDetails extends AuthTokenInfos {

  token: string;

    constructor(params: AuthTokenDetailsDTO) {
        super(params);
        this.token = params.token;
    }
}

export interface AuthTokenDetailsDTO extends AuthTokenInfosDTO {

  token: string;
}

export interface CreateAuthTokenDTO {
    extensionId: string | null;
    label: string | null;
    lifetime: number | null;
}

export interface AuthTokenFilters {
    userId?: string;
}