import { AuthoritiesType, EstablishmentsType } from "./responseTypes";

export function getEstablishmentRatings(
  pageNum: number
): Promise<EstablishmentsType> {
  return fetch(
    `http://api.ratings.food.gov.uk/Establishments/basic/${pageNum}/10`,
    { headers: { "x-api-version": "2" } }
  ).then((res) => res.json());
}

export function getAuthorities(): Promise<AuthoritiesType> {
  return fetch(`http://api.ratings.food.gov.uk/authorities/basic`, {
    headers: { "x-api-version": "2" },
  }).then((res) => res.json());
}
