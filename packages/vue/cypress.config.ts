import {defineConfig} from "cypress";
import rootConfig from "../../cypressRootConfig"

export default defineConfig({
    component: {
        devServer: {
            framework: "vue",
            bundler: "vite",
        },
        specPattern: "../../test.cy.ts",
        indexHtmlFile: "../../index.html",
        supportFile: "./mount.ts",
        ...rootConfig.component
    },
});
