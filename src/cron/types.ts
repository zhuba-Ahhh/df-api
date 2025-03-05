/**
 * Request
 */
export interface Request {
  code: number;
  data: Datum[];
  [property: string]: any;
}

export interface Datum {
  ArmedForceId: number;
  CarryoutSafeBoxPrice: number;
  CarryoutSelfPrice: number;
  dtEventTime: string;
  DurationS: number;
  EscapeFailReason: number;
  FinalPrice: string;
  flowCalGainedPrice: number;
  KeyChainCarryInPrice: number;
  KeyChainCarryOutPrice: string;
  KillAICount: number;
  KillCount: number;
  KillPlayerAICount: number;
  MapId: string;
  teammateArr: TeammateArr[];
  [property: string]: any;
}

export interface TeammateArr {
  ArmedForceId: number;
  CarryoutSafeBoxPrice: number;
  CarryoutSelfPrice: number;
  dtEventTime: string;
  DurationS: number;
  EscapeFailReason: number;
  FinalPrice: string;
  KeyChainCarryInPrice: number;
  KeyChainCarryOutPrice: string;
  KillAICount: number;
  KillCount: number;
  KillPlayerAICount: number;
  MapId: string;
  nickName: string;
  Rescue: number;
  TeamId: string;
  vopenid: boolean;
  [property: string]: any;
}

/**
 * Request
 */
export interface Request1 {
  iRet: number;
  jData: JData;
  ret: number;
  sAmsSerial: string;
  sMsg: string;
  [property: string]: any;
}

export interface JData {
  careerData: CareerData;
  iRet: string;
  sMsg: string;
  userData: UserData;
  [property: string]: any;
}

export interface CareerData {
  avgkillperminute: string;
  error_info: number;
  rankpoint: string;
  result: number;
  solduration: string;
  solescaperatio: string;
  soltotalfght: string;
  soltotalkill: string;
  solttotalescape: string;
  tdmduration: string;
  tdmrankpoint: string;
  tdmsuccessratio: string;
  tdmtotalfight: string;
  tdmtotalkill: number;
  totalwin: string;
  [property: string]: any;
}

export interface UserData {
  charac_name: string;
  picurl: string;
  [property: string]: any;
}
