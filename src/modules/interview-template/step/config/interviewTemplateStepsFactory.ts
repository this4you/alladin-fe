export {}

// import { FactoryOptions, ModuleFactory } from 'commons/utils/factory/moduleFactory';
// import { InterviewTemplateStepsContext } from './interviewTemplateStepsContext';
// import { commonContextFactory } from 'commons/config/commonFactory';
// import { createTemplateStep as createTemplateStepUseCase } from '../application/use-cases/template-list-steps/createTemplateStep';
// import { deleteTemplateStep as deleteTemplateStepUseCase } from '../application/use-cases/template-list-steps/deleteTemplateStep';
// import { initTemplateStepsList } from '../application/use-cases/template-list-steps/initTemplateStepsList';
//
// class InterviewTemplateStepsFactory extends ModuleFactory<InterviewTemplateStepsContext> {
//     build(options: FactoryOptions): InterviewTemplateStepsContext {
//         const { restClient, logger, notificator } = commonContextFactory;
//
//         return {
//             createTemplateStep: createTemplateStepUseCase(
//                 createTemplate(restClient.create),
//                 addNewTemplate,
//                 logger,
//                 notificator
//             ),
//             deleteTemplateStep: deleteTemplateStepUseCase(
//                 deleteTemplate(restClient.delete),
//                 removeTemplate,
//                 clearTemplateItem,
//                 logger,
//                 notificator
//             ),
//             initTemplateStepsList: initTemplateStepsList(
//                 getTemplates(restClient.get),
//                 setTemplates,
//                 setIsProcess,
//                 setFinished,
//                 notificator,
//                 logger,
//             )
//         }
//     }
// }
//
// export const interviewTemplateFactory = new InterviewTemplateStepsFactory();