export abstract class ModuleFactory<TInstance, TOptions extends FactoryOptions = FactoryOptions> {
    private key: Key | null = null;
    private instance: TInstance | null = null;

    protected abstract build(options: TOptions): TInstance;

    get(options: TOptions): TInstance {
        if (this.instance === null || options.key !== this.key) {
            this.key = options.key;
            this.instance = this.build(options);
        }

        return this.instance;
    }

    clear(): void {
        this.instance = null;
    }
}

type Key = string | number | object;

export interface FactoryOptions {
    key: Key;
}
