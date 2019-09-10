import { Database } from 'sqlite';
import { Client } from "discord.js";
import { pubgEnv } from "./features/pubg";
export interface BotConstructorInterface {
    dir?: string;
    client?: Client;
    env: Environment;
    name?: string;
}
export interface Environment {
    discord: {
        token: string;
    };
    szurubooru?: {
        token: string;
        endpoints: {
            frontend: string;
            backend: string;
        };
    };
    pubg?: pubgEnv;
    db?: boolean;
    debug?: boolean;
}
export declare enum eventType {
    USER = "user",
    BOT_PRE = "botPre",
    BOT_POST = "botPost"
}
export interface eventObj {
    type: eventType;
    func: Function;
    runOnce?: boolean;
    name?: string;
}
export interface userEventObj {
    func: Function;
    runOnce?: boolean;
    name?: string;
}
export declare class Bot {
    name: string;
    dir: string;
    client: Client;
    env: Environment;
    db: Database;
    protected events: Record<string, eventObj[]>;
    protected onlineStatus: string;
    constructor(props: BotConstructorInterface);
    private initEvents;
    on: (event: string, func: Function, name?: string) => void;
    once: (event: string, func: Function, name?: string) => void;
    protected addEvent: (event: string, newEvent: eventObj) => void;
    private registerEvent;
    private handleEvent;
    run: () => Promise<void>;
    private initializeDB;
    setOnlineActivity: (arg: string) => void;
}
