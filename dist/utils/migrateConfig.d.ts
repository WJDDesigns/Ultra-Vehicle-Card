import { UltraVehicleCardConfig } from '../types';
/**
 * Migrates a configuration object from version 1.x to the current format.
 * @param oldConfig The configuration object from version 1.x.
 * @returns The migrated configuration object conforming to UltraVehicleCardConfig.
 */
export declare function migrateV1Config(oldConfig: any): UltraVehicleCardConfig;
