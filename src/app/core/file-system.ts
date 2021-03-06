import { Injectable } from '@angular/core';
import * as commandExists from 'command-exists-promise';
import { remote } from 'electron';
import * as fs from 'fs-extra';
import * as path from 'path';

@Injectable()
export class FileSystem {
    constructor() {
    }

    public applicatioDataDirectory(): string {
        return remote.app.getPath('userData');
    }

    public musicDirectory(): string {
        return remote.app.getPath('music');
    }

    public async ensureDirectoryAsync(directory: string): Promise<void> {
        await fs.ensureDir(directory);
    }

    public pathExists(pathToCheck: string): boolean {
        return fs.existsSync(pathToCheck);
    }

    public readDirectory(directory: string): any[] {
        return fs.readdirSync(directory);
    }

    public async commanExistsAsync(command: string): Promise<boolean> {
        return await commandExists(command);
    }

    public getFileName(filePath: string): string {
        return path.basename(filePath);
    }
}
