export declare const replaceExt: (file: string, ext: string) => string;
export declare function smallCamel(str: string, separator?: '-' | '_'): string;
export declare function bigCamel(str: string, separator?: '-' | '_'): string;
export declare const isDir: (file: string) => boolean;
export declare const isFileType: (file: string, ext: 'less' | 'ts' | 'vue') => boolean;
export declare const isSFC: (file: string) => boolean;
export declare const isTS: (file: string) => boolean;
export declare const isLess: (file: string) => boolean;
export declare function smartAppendFileSync(file: string, code: string): void;
