const apiBasePath = `http://api.ratings.food.gov.uk`;

export class ApiPaths {
  static getEstablishmentRatings(pageNum: number) {
    return apiBasePath + `/Establishments/basic/${pageNum}/10`;
  }

  static getEstablishmentByAuthority(authorityId: number) {
    return apiBasePath + `/Establishments?localAuthorityID=${authorityId}`;
  }

  static getAuthorities = apiBasePath + "/authorities/basic";
}
