import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
});

const apiKeyLogicalId =
  backend.data.resources.cfnResources.cfnApiKey?.logicalId;

backend.data.resources.cfnResources.cfnApiKey?.overrideLogicalId(
  `${apiKeyLogicalId}${new Date().getTime()}`
);
