import {loadEnv} from 'vite'

const env = loadEnv('development', process.cwd(), "VITE");


export function startProductionServer(nameExpress) {
    const config = {
        port: env.VITE_PORT_BACKEND,
        hostname: env.VITE_HOSTNAME,
    };

    nameExpress.listen(config, () =>{
        console.log(`listening on http://${config.hostname}:${config.port}`);
    });
}
