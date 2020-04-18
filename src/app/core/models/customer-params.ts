export interface CustomerParams {
  filter: string;
  sortDirection: 'asc' | 'desc'| '';
  sortby: string;
  pageIndex: number;
  pageSize: number;
}
