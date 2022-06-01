import { EstablishmentsType } from "./responseTypes";

export function getEstablishmentRatings(
  pageNum: number
): Promise<EstablishmentsType> {
  return fetch(
    `http://api.ratings.food.gov.uk/Establishments/basic/${pageNum}/10`,
    { headers: { "x-api-version": "2" } }
  ).then((res) => res.json());
}
