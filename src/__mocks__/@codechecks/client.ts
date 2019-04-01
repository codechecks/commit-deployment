import * as CC from "@codechecks/client";

export const codechecks: Partial<typeof CC.codechecks> = {
  report: jest.fn(),
  getValue: jest.fn(),
  saveValue: jest.fn(),
  getCollection: jest.fn(),
  saveCollection: jest.fn(),
  isPr: jest.fn(),
  context: {
    workspaceRoot: "/codechecks",
  } as any,
  getArtifactLink: jest.fn(),
  getPageLink: jest.fn(),
  success: jest.fn(),
  failure: jest.fn(),
};
