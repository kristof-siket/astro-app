// @ts-check
import { module } from "@prisma/composer";
import astroService from "./service.mjs";

export default module("astro-app", ({ provision }) => {
  provision(astroService);
});
