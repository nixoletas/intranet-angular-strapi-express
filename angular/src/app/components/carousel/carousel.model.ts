// src/carousel/carousel.model.ts

export interface CarouselItem {
    id: number;
    attributes: {
        titulo: string;
        subtitulo: string;
        link: string;
        data: string;
        banner: {
            data: {
                attributes: {
                            url: string;
                };
            };
        };
    };
}
