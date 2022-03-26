import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "fs408fy9",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skgHoFvyIoSBUsRRoL6mdBxAzMVpb0RM32llXbGq8ziw684idlXa5xvRHW14BpZOWDvv3SeFV6mVwivFRU2nrHL1jWZE3fPYnGmpv32g5EIEveAlbxf3LavCbnqI92jWqT40wO39LkZNHDmQ5wRAYxxubZlUAhea5zqNooLxzx2rwl1uBXLM",
  useCdn: false,
});
