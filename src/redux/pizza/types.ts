export type Pizza = {
  id: string,
  title: string,
  price: number,
  imageUrl: string
  types: number[],
  sizes: number[],
  count: number
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export interface PizzaSliceState {
  items: Pizza[];
  status: Status
}

export type SearchPizzaParams = {
  sortType:string;
  order:string ;
  category:string;
  search:string; 
  currentPage:string;
}