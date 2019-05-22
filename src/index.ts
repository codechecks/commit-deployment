import { codechecks } from "@codechecks/client";
import { join } from "path";

export async function commitDeployment(_options: Options): Promise<void> {
  const options = normalizeOptions(_options);

  await codechecks.saveCollection(options.artifactName, options.buildPath);
  await codechecks.success({
    name: "Commit Deployment",
    shortDescription: "Deployment ready",
    detailsUrl: codechecks.getPageLink(options.artifactName, options.rootFile),
  });
}

export default commitDeployment;

export interface Options {
  buildPath: string;
  rootFile?: string;
  name?: string;
}

export interface NormalizedOptions {
  buildPath: string;
  rootFile: string;
  name: string;
  artifactName: string;
}

function normalizeOptions(options: Options): NormalizedOptions {
  const name = options.name || "Commit Deployment";
  return {
    buildPath: join(codechecks.context.workspaceRoot, options.buildPath),
    rootFile: options.rootFile || "index.html",
    name,
    artifactName: `deploy:${name}`,
  };
}
