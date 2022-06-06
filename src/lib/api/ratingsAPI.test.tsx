import { enableFetchMocks } from "jest-fetch-mock";
import fetch from "jest-fetch-mock";
import { APIClient } from ".";

enableFetchMocks();

describe("Ratings API", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("call the ratings api with the provided page number and returns the data", async () => {
    // Given
    let pageNum = 1;
    let expected = { testing: "test" };
    fetch.mockResponseOnce(JSON.stringify(expected));
    // When
    let actual = await APIClient.getEstablishmentRatings(pageNum);

    // Then
    expect(actual).toEqual(expected);
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      `http://api.ratings.food.gov.uk/Establishments/basic/${pageNum}/10`
    );
  });
});
