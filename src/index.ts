import { codechecks } from "@codechecks/client";
import { join } from "path";

const ARTIFACT_KEY = "commit-deployment";

export async function commitDeployment(_options: Options): Promise<void> {
  const options = normalizeOptions(_options);

  await codechecks.saveCollection(ARTIFACT_KEY, options.buildPath);
  await codechecks.success({
    name: "Commit Deployment",
    shortDescription: "Deployment ready",
    detailsUrl: codechecks.getPageLink(ARTIFACT_KEY, options.rootFile),
  });
}

export default commitDeployment;

export interface Options {
  buildPath: string;
  rootFile?: string;
}

function normalizeOptions(options: Options): Required<Options> {
  return {
    buildPath: join(codechecks.context.workspaceRoot, options.buildPath),
    rootFile: options.rootFile || "index.html",
  };
}
