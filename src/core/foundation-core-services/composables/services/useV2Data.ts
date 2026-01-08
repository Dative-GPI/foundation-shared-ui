import type { AxiosInstance } from "axios";
import { ServiceFactory } from "@dative-gpi/bones-ui/core";
import { DATA_V2_RELOAD_URL } from "@dative-gpi/foundation-core-services/config/urls";
import type { DataFiltersDTO, DataSerieDTO } from "@dative-gpi/foundation-core-domain/models";


const DataServiceFactory = ServiceFactory.addCustom("getMany",(axios: AxiosInstance, filters: DataFiltersDTO) => {
    return axios.post(DATA_V2_RELOAD_URL, filters);
  },
  (dtos: DataSerieDTO[]) => dtos
);

export const getManyDatas = DataServiceFactory.getMany;