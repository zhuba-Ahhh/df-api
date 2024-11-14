export interface protectType {
  helmet: Helmet[];
  armor: Armor[];
  bag: Bag[];
  chest: Bag[];
}

export interface Armor {
  id: number;
  objectID: number;
  objectName: string;
  length: number;
  width: number;
  grade: number;
  weight: string;
  primaryClass: PrimaryClass;
  secondClass: ArmorSecondClass;
  secondClassCN: ArmorSecondClassCN;
  desc: string;
  pic: string;
  prePic: string;
  protectDetail: ArmorProtectDetail;
}

export enum PrimaryClass {
  Protect = 'protect',
}

export interface ArmorProtectDetail {
  durability: number;
  protectLevel: number;
  aimSpeed?: AimSpeed;
  moveSpeed?: AimSpeed;
  repairEfficiency: DurableLoss;
  protectArea: ProtectArea;
  durableLoss: DurableLoss;
}

export interface AimSpeed {
  'percent '?: number;
  batteryValue: number;
  batteryColor: BatteryColor;
  number?: number;
}

export enum BatteryColor {
  Green = 'green',
  Red = 'red',
}

export enum DurableLoss {
  中 = '中',
  低 = '低',
  高 = '高',
}

export enum ProtectArea {
  胸部 = '胸部',
  胸部腹部 = '胸部,腹部',
  胸部腹部肩部 = '胸部,腹部,肩部',
}

export enum ArmorSecondClass {
  Armor = 'armor',
}

export enum ArmorSecondClassCN {
  护甲 = '护甲',
}

export interface Bag {
  id: number;
  objectID: number;
  objectName: string;
  length: number;
  width: number;
  grade: number;
  weight: string;
  primaryClass: PrimaryClass;
  secondClass: BagSecondClass;
  secondClassCN: BagSecondClassCN;
  desc: string;
  pic: string;
  prePic: string;
  protectDetail: BagProtectDetail;
}

export interface BagProtectDetail {
  moveSpeed?: AimSpeed;
  capacity: number;
  aimSpeed?: AimSpeed;
}

export enum BagSecondClass {
  Bag = 'bag',
  Chest = 'chest',
}

export enum BagSecondClassCN {
  背包 = '背包',
  胸挂 = '胸挂',
}

export interface Helmet {
  id: number;
  objectID: number;
  objectName: string;
  length: number;
  width: number;
  grade: number;
  weight: string;
  primaryClass: PrimaryClass;
  secondClass: HelmetSecondClass;
  secondClassCN: HelmetSecondClassCN;
  desc: string;
  pic: string;
  prePic: string;
  protectDetail: HelmetProtectDetail;
}

export interface HelmetProtectDetail {
  durability: number;
  protectLevel: number;
  aimSpeed?: AimSpeed;
  moveSpeed?: AimSpeed;
  soundEffect?: AimSpeed;
  faceMask?: FaceMask;
  repairEfficiency: DurableLoss;
  protectArea?: string;
  durableLoss: DurableLoss;
}

export interface FaceMask {
  value: string;
  batteryValue: number;
  batteryColor: BatteryColor;
}

export enum HelmetSecondClass {
  Helmet = 'helmet',
}

export enum HelmetSecondClassCN {
  头盔 = '头盔',
}
