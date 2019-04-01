import { commitDeployment } from "../index";
import { codechecks } from "@codechecks/client";

type Mocked<T> = { [k in keyof T]: jest.Mock<T[k]> };

describe("commit-deployment", () => {
  const codeChecksMock = require("../__mocks__/@codechecks/client").codechecks as Mocked<
    typeof codechecks
  >;
  beforeEach(() => jest.resetAllMocks());

  it("should work", async () => {
    codeChecksMock.isPr.mockReturnValue(false);

    await commitDeployment({
      buildPath: "dist",
    });

    expect(codechecks.getPageLink).toMatchInlineSnapshot(`
[MockFunction] {
  "calls": Array [
    Array [
      "deploy",
      "index.html",
    ],
  ],
  "results": Array [
    Object {
      "isThrow": false,
      "value": undefined,
    },
  ],
}
`);
    expect(codechecks.success).toMatchInlineSnapshot(`
[MockFunction] {
  "calls": Array [
    Array [
      Object {
        "detailsUrl": undefined,
        "name": "Commit Deployment",
        "shortDescription": "Deployment ready",
      },
    ],
  ],
  "results": Array [
    Object {
      "isThrow": false,
      "value": undefined,
    },
  ],
}
`);
    expect(codechecks.saveCollection).toMatchInlineSnapshot(`
[MockFunction] {
  "calls": Array [
    Array [
      "deploy",
      "/codechecks/dist",
    ],
  ],
  "results": Array [
    Object {
      "isThrow": false,
      "value": undefined,
    },
  ],
}
`);
  });
});
