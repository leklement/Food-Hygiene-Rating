import { ApiPaths } from "./paths";
import { apiFetch } from "./request";
import { AuthoritiesType, EstablishmentsType } from "./responseTypes";

export class APIClient {
  static async getEstablishmentRatings(pageNum: number) {
    const result = await apiFetch<EstablishmentsType>(
      ApiPaths.getEstablishmentRatings(pageNum)
    );
    if (result.ok) {
      return result.json;
    }

    return undefined;
  }

  static async getEstablishmentByAuthority(authorityId: number) {
    const result = await apiFetch<EstablishmentsType>(
      ApiPaths.getEstablishmentByAuthority(authorityId)
    );
    if (result.ok) {
      return result.json;
    }

    return undefined;
  }

  static async getAuthorities() {
    const result = await apiFetch<AuthoritiesType>(ApiPaths.getAuthorities);
    if (result.ok) {
      return result.json;
    }

    return undefined;
  }
}
