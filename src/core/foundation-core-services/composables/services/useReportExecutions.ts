import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { ReportExecution, type ReportExecutionFilters, type ReportExecutionDTO } from "@dative-gpi/foundation-core-domain/models";
import { REPORT_EXECUTIONS_URL } from "../../config/urls";


const ReportServiceFactoryIncomplete = new ServiceFactory("reportExecution", ReportExecution).create(factory => factory.build(
  factory.addGetMany<ReportExecutionDTO, ReportExecution, ReportExecutionFilters>(REPORT_EXECUTIONS_URL, ReportExecution)
));

export const useReportExecutions = ComposableFactory.custom(ReportServiceFactoryIncomplete.getMany);