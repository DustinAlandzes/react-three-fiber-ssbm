import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import checker from "vite-plugin-checker";

export default defineConfig((env) => ({
    base: "/react-three-fiber-ssbm/",
    plugins: [react(), checker({
        // e.g. use TypeScript check
        typescript: true,
    })],
}))