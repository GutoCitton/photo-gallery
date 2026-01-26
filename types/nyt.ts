export type NYTMultimedia = {
  url: string;
};

export type NYTStory = {
  url: string;
  title: string;
  abstract: string;
  multimedia?: NYTMultimedia[];
};
