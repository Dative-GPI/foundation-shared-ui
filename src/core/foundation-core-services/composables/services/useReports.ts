import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { REPORTS_URL, REPORT_URL } from "../../config/urls";
import {
  type CreateReportDTO, ReportDetails, type ReportDetailsDTO, type ReportFilters, ReportInfos, type ReportInfosDTO, type UpdateReportDTO,
} from "@dative-gpi/foundation-core-domain/models";


const ReportServiceFactory = new ServiceFactory<ReportDetailsDTO, ReportDetails>("report", ReportDetails)
  .createComplete<ReportInfos, ReportInfosDTO, CreateReportDTO, UpdateReportDTO, ReportFilters>(REPORTS_URL, REPORT_URL, ReportInfos);

const ReportServiceFactoryIncomplete = new ServiceFactory("report", ReportDetails).create(factory => factory.build(
  factory.addNotify(() => ({
    ...ServiceFactory.addCustom("trigger", (axios, reportId: string) => axios.patch(REPORT_URL(reportId)), () => {
    }),
  }))
));

export const useReport = ComposableFactory.get(ReportServiceFactory);
export const useReports = ComposableFactory.getMany(ReportServiceFactory);
export const useCreateReport = ComposableFactory.create(ReportServiceFactory);
export const useUpdateReport = ComposableFactory.update(ReportServiceFactory);
export const useRemoveReport = ComposableFactory.remove(ReportServiceFactory);
export const useTriggerReport = ComposableFactory.custom(ReportServiceFactoryIncomplete.trigger);