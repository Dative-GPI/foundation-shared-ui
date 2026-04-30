import { IMAGES } from '@/mocks/images.mock';
import type { ModelInfosDTO } from "@dative-gpi/foundation-core-domain/models";

export const MODELS: ModelInfosDTO[] = [{
    id: "1",
    imageId: "1",
    imageBlurHash: IMAGES[0].blurHash,
    imageHeight: IMAGES[0].height,
    imageWidth: IMAGES[0].width,
    code: "oven.model1",
    label: "Model 1",
    connectable: true
}, {
    id: "2",
    code: "oven.model2",
    label: "Model 2",
    connectable: false
}];