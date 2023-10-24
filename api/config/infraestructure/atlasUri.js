import { loadEnv } from 'vite';

export function loadConfiguration() {
    let env = loadEnv('development', process.cwd(), "ATLAS");
    const URI = `mongodb+srv://${env.ATLAS_USER}:${env.ATLAS_PASSWORD}@cluster0.xuq9yaf.mongodb.net/${env.ATLAS_DB}`;
    return URI;
}
