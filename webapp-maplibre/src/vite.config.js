import { defineConfig } from "vite"
import { fileURLtoPath, URL} from "node:url"

export default defineConfig ({
    build:{
        rollupOptions:{
            input:{
                main:fileURLtoPath(new URL("index.html", import.meta.url)),
                indonesia:fileURLtoPath(new URL("asia/indonesia.html", import.meta.env))
            },
        },
    },
})