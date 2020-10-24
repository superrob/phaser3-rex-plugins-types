declare module 'phaser3-rex-plugins/plugins/utils/ticktask/TickTask' {
    export default class TickTask {
        constructor(parent: any, config: any);
        parent: any;
        _isRunning: any;
        tickingState: boolean;
        boot(): void;
        shutdown(): void;
        setTickingMode(mode: any): void;
        tickingMode: any;
        startTicking(): void;
        stopTicking(): void;
        set isRunning(arg: any);
        get isRunning(): any;
        start(): TickTask;
        pause(): TickTask;
        resume(): TickTask;
        stop(): TickTask;
        complete(): void;
    }
}