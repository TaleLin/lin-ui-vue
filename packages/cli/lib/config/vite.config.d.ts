export declare const viteConfig: {
    root: string;
    plugins: any[];
    server: {
        force: boolean;
        port: number;
    };
};
export declare const viteBuildConfig: {
    root: string;
    publicDir: string;
    plugins: any[];
    build: {
        outDir: string;
        emptyOutDir: boolean;
        cssTarget: string;
        rollupOptions: {
            external: string[];
            output: {
                globals: {
                    vue: string;
                };
            };
        };
        lib: {
            entry: string;
            name: string;
            fileName: (format: string) => string;
        };
    };
};
