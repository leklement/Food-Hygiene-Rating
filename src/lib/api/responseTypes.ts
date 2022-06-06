interface ILinks {
  rel: string;
  href: string;
}

export interface IAuthority {
  LocalAuthorityId: number;
  LocalAuthorityIdCode: string;
  Name: string;
  EstablishmentCount: number;
  SchemeType: number;
  links: ILinks[];
}

export interface IEstablishment {
  BusinessName: string;
  BusinessType: string;
  RatingValue: string;
}

export type EstablishmentsType = {
  establishments: {}[];
  meta: {
    dataSource: string;
    extractDate: string;
    itemCount: number;
    returncode: string;
    totalCount: number;
    totalPages: number;
    pageSize: number;
    pageNumber: number;
  };
  links: ILinks[];
};

export type AuthoritiesType = {
  authorities: IAuthority[];
};
