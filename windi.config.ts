import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";
import lineClamp from "windicss/plugin/line-clamp";

export default defineConfig({
  plugins: [formsPlugin, lineClamp],
  attributify: true,
});
