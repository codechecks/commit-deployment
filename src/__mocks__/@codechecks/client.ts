import * as CC from "@codechecks/client";
import { join } from "path";

export const codechecks: Partial<typeof CC.codechecks> = {
  report: jest.fn(),
  getValue: jest.fn(),
  saveValue: jest.fn(),
  getCollection: jest.fn(),
  saveCollection: jest.fn(),
  isPr: jest.fn(),
  context: {
    workspaceRoot: join(__dirname, "..", ".."),
  } as any,
  getArtifactLink: jest.fn(),
  getPageLink: jest.fn(),
  success: jest.fn(),
  failure: jest.fn(),
};
