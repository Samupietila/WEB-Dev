const { request, expect } = require("./config");
describe("Airport API", function () {
  describe("POST /favorites", function () {
    describe("when creating a new favorite", function () {
      it("requires authentication", async function () {
        const response = await request.post("/favorites").send({
          airport_id: "YBR",
          note: "Going to Canada",
        });
        expect(response.status).to.eql(401);
      });
    });

    describe("GET /favorites", function () {
      describe("when retrieving favorites", function () {
        it("allows a user can to get their favorite airports", async function () {
          // Check that a user can create a favorite.
          const postResponse = await request
            .get("/favorites")
            .set("Authorization", "Bearer token=ypMMqeoBcavP4Cw3U9yzjPw5 ");
          expect(postResponse.status).to.eql(200);
          // postResponse.body.data.attributes
          describe("POST /favorites/distance", function () {
            describe("when calculating the distance between two airports", function () {
              it("should return a 200 status and the distance information", async function () {
                const postResponse = await request
                  .post("/airports/distance")
                  .send({ from: "KIX", to: "SFO" });
                expect(postResponse.status).to.eql(200);
                const attributes = postResponse.body.data.attributes;
                expect(attributes).to.include.keys(
                  "kilometers",
                  "miles",
                  "nautical_miles"
                );
                expect(attributes.kilometers).to.be.closeTo(8692, 1);
                expect(attributes.miles).to.be.closeTo(5397, 1);
                expect(attributes.nautical_miles).to.be.closeTo(4690, 1);
                console.log(postResponse.body.data.attributes);
                describe("DELETE or PUT /favorites", function () {
                  describe("when deleting or updating favorites", function () {
                    it("allows a user to save and delete their favorite airports", async function () {
                      // Check that a user can create a favorite.
                      const postResponse = await request
                        .post("/favorites")
                        .set(
                          "Authorization",
                          "Bearer token=ypMMqeoBcavP4Cw3U9yzjPw5"
                        )
                        .send({
                          airport_id: "YBR",
                          note: "Going to Canada",
                        });
                      console.log(postResponse);

                      expect(postResponse.status).to.eql(201);
                      expect(
                        postResponse.body.data.attributes.airport.name
                      ).to.eql("Brandon Municipal Airport");
                      expect(postResponse.body.data.attributes.note).to.eql(
                        "Going to Canada"
                      );

                      const favoriteId = postResponse.body.data.id;

                      // Check that a user can update the note of the created favorite.
                      const putResponse = await request
                        .put(`/favorites/${favoriteId}`)
                        .set(
                          "Authorization",
                          "Bearer token=ypMMqeoBcavP4Cw3U9yzjPw5"
                        )
                        .send({
                          note: "My usual layover when visiting family and friends",
                        });

                      expect(putResponse.status).to.eql(200);
                      expect(putResponse.body.data.attributes.note).to.eql(
                        "My usual layover when visiting family and friends"
                      );

                      // Check that a user can delete the created favorite.
                      const deleteResponse = await request
                        .delete(`/favorites/${favoriteId}`)
                        .set(
                          "Authorization",
                          "Bearer token=ypMMqeoBcavP4Cw3U9yzjPw5"
                        );

                      expect(deleteResponse.status).to.eql(204);

                      // Verify that the record was deleted.
                      const getResponse = await request
                        .get(`/favorites/${favoriteId}`)
                        .set(
                          "Authorization",
                          "Bearer token=ypMMqeoBcavP4Cw3U9yzjPw5"
                        );

                      expect(getResponse.status).to.eql(404);
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
