import request from "supertest";
import app from "../../../src/app";

describe("Persons", () => {
    describe("/get", () => {
        it("Happy flow", async () => {
            const expectedResponse = [
                {
                    id: 10,
                    name: "John Doe"
                },
                {
                    id: 11,
                    name: "Sarah Connors"
                }
            ];

            const response:any = await request(app)
                .get("/persons")
                .set("Accept", "application/json")
                .expect("Content-Type", /json/)
                .expect(200);
            
            expect(response.body.persons).toEqual(expectedResponse);
        });        
    });
});