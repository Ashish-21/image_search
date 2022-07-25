export interface APIModel {
  response: ResultsModel;
  status: number;
}

export interface ResultsModel {
  results: ImageModel[];
}

export interface ImageModel {
  id: string;
  alt_description: string;
  urls: any;
}
