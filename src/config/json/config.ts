const configData = {
  mapList: {
    gun: [
      {
        mapID: 10001,
        mapName: '长弓溪谷',
        mapType: 'gun',
      },
      {
        mapID: 10002,
        mapName: '零号大坝',
        mapType: 'gun',
      },
      {
        mapID: 10003,
        mapName: '航天基地',
        mapType: 'gun',
      },
      {
        mapID: 10004,
        mapName: '巴克什',
        mapType: 'gun',
      },
    ],
    operator: [
      {
        mapID: 10005,
        mapName: '攀升',
        mapType: 'operator',
      },
      {
        mapID: 10006,
        mapName: '烬区',
        mapType: 'operator',
      },
      {
        mapID: 10007,
        mapName: '临界点',
        mapType: 'operator',
      },
      {
        mapID: 10008,
        mapName: '贯穿',
        mapType: 'operator',
      },
      {
        mapID: 10009,
        mapName: '堑壕战',
        mapType: 'operator',
      },
      {
        mapID: 10010,
        mapName: '断轨',
        mapType: 'operator',
      },
      {
        mapID: 10011,
        mapName: '刀锋',
        mapType: 'operator',
      },
    ],
  },
  objectMapping: {
    acc: [
      {
        type: 'accForeGrip',
        typeName: '前握把',
      },
      {
        type: 'accFunctional',
        typeName: '功能性配件',
      },
      {
        type: 'accBackGrip',
        typeName: '后握把',
      },
      {
        type: 'accMagazine',
        typeName: '弹匣',
      },
      {
        type: 'accHandGuard',
        typeName: '护木',
      },
      {
        type: 'accMuzzle',
        typeName: '枪口',
      },
      {
        type: 'accStock',
        typeName: '枪托',
      },
      {
        type: 'accBarrel',
        typeName: '枪管',
      },
      {
        type: 'accScope',
        typeName: '瞄具',
      },
    ],
    ammo: [
      {
        type: 'ammo.338',
        typeName: '.338 Lap Mag',
        icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/ammo/338.png',
      },
      {
        type: 'ammo.357',
        typeName: '.357 Magnum',
        icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/ammo/357-Magnum.png',
      },
      {
        type: 'ammo.45',
        typeName: '.45 ACP',
        icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/ammo/45-ACP.png',
      },
      {
        type: 'ammo.50',
        typeName: '.50 AE',
        icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/ammo/50-AE.png',
      },
      {
        type: 'ammo12',
        typeName: '12 Gauge',
        icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/ammo/12-Gauge.png',
      },
      {
        type: 'ammo12.7x55',
        typeName: '12.7x55mm',
        icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/ammo/12.7x55mm.png',
      },
      {
        type: 'ammo4.6x30',
        typeName: '4.6x30mm',
        icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/ammo/4.6x30mm.png',
      },
      {
        type: 'ammo5.45x39',
        typeName: '5.45x39mm',
        icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/ammo/5.45x39mm.png',
      },
      {
        type: 'ammo5.56x45',
        typeName: '5.56x45mm',
        icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/ammo/5.56x45mm.png',
      },
      {
        type: 'ammo5.7x28',
        typeName: '5.7x28mm',
        icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/ammo/5.7x28mm.png',
      },
      {
        type: 'ammo5.8x42',
        typeName: '5.8x42mm',
        icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/ammo/5.8x42mm.png',
      },
      {
        type: 'ammo6.8x51',
        typeName: '6.8x51mm',
        icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/ammo/6.8x51mm.png',
      },
      {
        type: 'ammo7.62x39',
        typeName: '7.62x39mm',
        icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/ammo/7.62x39mm.png',
      },
      {
        type: 'ammo7.62x51',
        typeName: '7.62x51mm',
        icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/ammo/7.62x51mm.png',
      },
      {
        type: 'ammo7.62x54',
        typeName: '7.62x54mm',
        icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/ammo/7.62x54mm.png',
      },
      {
        type: 'ammo9x19',
        typeName: '9x19mm',
        icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/ammo/9x19mm.png',
      },
      {
        type: 'ammo9x39',
        typeName: '9x39mm',
        icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/ammo/9x39mm.png',
      },
    ],
    consume: [
      {
        type: 'repair',
        typeName: '维修套件',
      },
      {
        type: 'drug',
        typeName: '药品',
      },
      {
        type: 'inject',
        typeName: '针剂',
      },
    ],
    gun: [
      {
        type: 'gunSMG',
        typeName: '冲锋枪',
      },
      {
        type: 'gunPistol',
        typeName: '手枪',
      },
      {
        type: 'gunRifle',
        typeName: '步枪',
      },
      {
        type: 'gunSniper',
        typeName: '狙击步枪',
      },
      {
        type: 'gunMP',
        typeName: '精确射手步枪',
      },
      {
        type: 'gunLMG',
        typeName: '轻机枪',
      },
      {
        type: 'gunShotgun',
        typeName: '霰弹枪',
      },
    ],
    props: [
      {
        type: 'collection',
        typeName: '收集品',
      },
      {
        type: 'mandel',
        typeName: '曼德尔砖',
      },
      {
        type: 'consume',
        typeName: '消耗品',
      },
      {
        type: 'key',
        typeName: '钥匙',
      },
    ],
    protect: [
      {
        type: 'helmet',
        typeName: '头盔',
      },
      {
        type: 'armor',
        typeName: '护甲',
      },
      {
        type: 'bag',
        typeName: '背包',
      },
      {
        type: 'chest',
        typeName: '胸挂',
      },
    ],
    vehicle: [
      {
        type: 'primaryArms',
        typeName: '主武器',
      },
      {
        type: 'secondArms',
        typeName: '副武器',
      },
      {
        type: 'firstSlot',
        typeName: '装备位1',
      },
      {
        type: 'secondSlot',
        typeName: '装备位2',
      },
      {
        type: 'thirdSlot',
        typeName: '装备位3',
      },
    ],
  },
  keyTypeMapList: [
    {
      keyType: 'two',
      name: '二指',
    },
    {
      keyType: 'three',
      name: '三指',
    },
    {
      keyType: 'four',
      name: '四指',
    },
    {
      keyType: 'five',
      name: '五指',
    },
    {
      keyType: 'six',
      name: '六指',
    },
  ],
  gunSlotMap: {
    '1': {
      id: '1',
      name: '后握把',
      sort: 30,
      accType: 'accBackGrip',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/1.png',
    },
    '2': {
      id: '2',
      name: '枪管',
      sort: 2,
      accType: 'accBarrel',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/2.png',
    },
    '3': {
      id: '3',
      name: '枪托',
      sort: 27,
      accType: 'accStock',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/3.png',
    },
    '4': {
      id: '4',
      name: '护木',
      sort: 14,
      accType: 'accHandGuard',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/4.png',
    },
    '5': {
      id: '5',
      name: '弹匣',
      sort: 24,
      accType: 'accMagazine',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/5.png',
    },
    '6': {
      id: '6',
      name: '枪口',
      sort: 1,
      accType: 'accMuzzle',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/6.png',
    },
    '8': {
      id: '8',
      name: '前握把',
      sort: 22,
      accType: 'accForeGrip',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/8.png',
    },
    '9': {
      id: '9',
      name: '照门',
      sort: 35,
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/22.png',
    },
    '10': {
      id: '10',
      name: '脚架',
      sort: 3,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/36.png',
    },
    '11': {
      id: '11',
      name: '瞄具',
      sort: 16,
      accType: 'accScope',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/11.png',
    },
    '12': {
      id: '12',
      name: '前瞄具',
      sort: 17,
      accType: 'accScope',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/12.png',
    },
    '14': {
      id: '14',
      name: '战术设备',
      sort: 5,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/14.png',
    },
    '17': {
      id: '17',
      name: '上导轨',
      sort: 6,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/14.png',
    },
    '18': {
      id: '18',
      name: '下导轨',
      sort: 7,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/14.png',
    },
    '19': {
      id: '19',
      name: '左导轨',
      sort: 8,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/14.png',
    },
    '20': {
      id: '20',
      name: '右导轨',
      sort: 9,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/14.png',
    },
    '21': {
      id: '21',
      name: '镜座',
      sort: 34,
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/21.png',
    },
    '22': {
      id: '22',
      name: '独特',
      sort: 36,
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/22.png',
    },
    '28': {
      id: '28',
      name: '枪托垫',
      sort: 29,
      accType: 'accStock',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/28.png',
    },
    '29': {
      id: '29',
      name: '托腮板',
      sort: 33,
      accType: 'accStock',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/29.png',
    },
    '30': {
      id: '30',
      name: '后握贴片',
      sort: 32,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/4.png',
    },
    '31': {
      id: '31',
      name: '侧副瞄具',
      sort: 19,
      accType: 'accScope',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/31.png',
    },
    '32': {
      id: '32',
      name: '上贴片',
      sort: 10,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/4.png',
    },
    '34': {
      id: '34',
      name: '左贴片',
      sort: 11,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/4.png',
    },
    '35': {
      id: '35',
      name: '右贴片',
      sort: 12,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/4.png',
    },
    '36': {
      id: '36',
      name: '枪管脚架',
      sort: 4,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/36.png',
    },
    '37': {
      id: '37',
      name: '护木套件',
      sort: 15,
      accType: 'accHandGuard',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/37.png',
    },
    '38': {
      id: '38',
      name: '枪托套件',
      sort: 28,
      accType: 'accStock',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/3.png',
    },
    '40': {
      id: '40',
      name: '上副瞄具',
      sort: 18,
      accType: 'accScope',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/40.png',
    },
    '41': {
      id: '41',
      name: '增高座瞄具',
      sort: 20,
      accType: 'accScope',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/41.png',
    },
    '43': {
      id: '43',
      name: '握把座',
      sort: 31,
      accType: 'accBackGrip',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/1.png',
    },
    '44': {
      id: '44',
      name: '弹匣座',
      sort: 25,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/44.png',
    },
    '45': {
      id: '45',
      name: '遮光罩',
      sort: 21,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/45.png',
    },
    '46': {
      id: '46',
      name: '上护木',
      sort: 13,
      accType: 'accHandGuard',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/37.png',
    },
    '47': {
      id: '47',
      name: '导气',
      sort: 38,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/47.png',
    },
    '48': {
      id: '48',
      name: '击锤',
      sort: 37,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/48.png',
    },
    '49': {
      id: '49',
      name: '扳机',
      sort: 26,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/49.png',
    },
    '50': {
      id: '50',
      name: '增高座瞄具',
      sort: 21,
      accType: 'accScope',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/41.png',
    },
    '52': {
      id: '52',
      name: '枪机',
      sort: 40,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/52.png',
    },
    '54': {
      id: '54',
      name: '拉机柄帽',
      sort: 39,
      accType: 'accFunctional',
      icon: 'https://playerhub.df.qq.com/playerhub/60004/object/gun/slot/54.png',
    },
  },
  cdnFormat: {
    object: {
      type: '',
      prefix: 'https://playerhub.df.qq.com/playerhub/60004/object/',
      suffix: 'png',
    },
  },
  exchange: [
    {
      type: 'fight',
      name: '战斗部门',
      list: [
        {
          type: 'fileBox',
          typeName: '档案箱',
        },
        {
          type: 'gun',
          typeName: '枪械',
        },
        {
          type: 'skin',
          typeName: '外观',
        },
        {
          type: 'weaponBox',
          typeName: '武器箱',
        },
      ],
    },
    {
      type: 'medic',
      name: '医疗部门',
      list: [
        {
          type: 'materialBox',
          typeName: '材料箱',
        },
        {
          type: 'collection',
          typeName: '收集品',
        },
        {
          type: 'skin',
          typeName: '外观',
        },
        {
          type: 'drug',
          typeName: '药品',
        },
        {
          type: 'medicineBox',
          typeName: '医药箱',
        },
      ],
    },
    {
      type: 'rd',
      name: '研发部门',
      list: [
        {
          type: 'key',
          typeName: '钥匙卡包',
        },
        {
          type: 'skin',
          typeName: '外观',
        },
        {
          type: 'collectionBox',
          typeName: '藏品箱',
        },
      ],
    },
    {
      type: 'tactics',
      name: '战术部门',
      list: [
        {
          type: 'ammoBox',
          typeName: '弹药箱',
        },
        {
          type: 'acc',
          typeName: '枪械配件',
        },
        {
          type: 'skin',
          typeName: '外观',
        },
        {
          type: 'itemBox',
          typeName: '物品箱',
        },
        {
          type: 'ammo',
          typeName: '子弹',
        },
      ],
    },
    {
      type: 'logistics',
      name: '后勤部门',
      list: [
        {
          type: 'bag',
          typeName: '背包',
        },
        {
          type: 'armor',
          typeName: '防弹衣',
        },
        {
          type: 'helmet',
          typeName: '头盔',
        },
        {
          type: 'skin',
          typeName: '外观',
        },
        {
          type: 'chest',
          typeName: '胸挂',
        },
        {
          type: 'equipmentBox',
          typeName: '装备箱',
        },
      ],
    },
  ],
  agentImg: {
    40005:
      'https://playerhub.df.qq.com/playerhub/60004/object/p_88000000028.png',
    10010:
      'https://playerhub.df.qq.com/playerhub/60004/object/p_88000000025.png',
    40010:
      'https://playerhub.df.qq.com/playerhub/60004/object/p_88000000026.png',
    20003:
      'https://playerhub.df.qq.com/playerhub/60004/object/p_88000000027.png',
    30008:
      'https://playerhub.df.qq.com/playerhub/60004/object/p_88000000029.png',
    10007:
      'https://playerhub.df.qq.com/playerhub/60004/object/p_88000000030.png',
    30009:
      'https://playerhub.df.qq.com/playerhub/60004/object/p_88000000035.png',
    20004:
      'https://playerhub.df.qq.com/playerhub/60004/object/p_88000000036.png',
    30010:
      'https://playerhub.df.qq.com/playerhub/60004/object/p_88000000037.png',
  },
  agentName: {
    40005: '露娜',
    10010: '威龙',
    40010: '骇爪',
    20003: '蜂医',
    30008: '牧羊人',
    10007: '红狼',
    30009: '乌鲁鲁',
    20004: '蛊',
    30010: '深蓝',
  },
  mapName: {
    1901: '长弓溪谷-常规',
    1902: '长弓溪谷-机密',
    1911: '长弓溪谷-常规',
    1912: '长弓溪谷-机密',
    1999: '长弓溪谷教学关',
    2201: '零号大坝-常规',
    2202: '零号大坝-机密',
    2211: '零号大坝-常规',
    2212: '零号大坝-机密',
    3901: '航天基地-机密',
    3902: '航天基地-绝密',
    8101: '巴克什-常规',
    8102: '巴克什-机密',
    8103: '巴克什-绝密',
    210: '临界点-占领',
    75: '临界点-攻防',
    213: '临界点-闪击',
    103: '攀升-占领',
    116: '攀升-围攻',
    54: '攀升-攻防',
    117: '攀升-钢铁洪流',
    105: '攀升-闪击',
    34: '烬区-占领',
    118: '烬区-围攻',
    33: '烬区-攻防',
    119: '烬区-钢铁洪流',
    109: '烬区-闪击',
    114: '贯穿-占领',
    113: '贯穿-攻防',
    108: '堑壕战-占领',
    107: '堑壕战-攻防',
    127: '堑壕战-闪击',
    128: '堑壕战-围攻',
    227: '堑壕战-钢铁洪流',
    124: '贯穿-闪击',
    125: '贯穿-围攻',
    126: '临界点-围攻',
    138: '攀升-夺旗',
    139: '堑壕战-夺旗',
    211: '临界点',
    232: '攀升-攻防演练',
    233: '烬区-攻防演练',
    234: '临界点-攻防演练',
    235: '贯穿-攻防演练',
    236: '堑壕战-攻防演练',
    136: '断轨-闪击',
    137: '断轨-围攻',
    111: '断轨-攻防',
    112: '断轨-占领',
    237: '断轨-攻防演练',
    121: '刀锋-攻防',
    122: '刀锋-占领',
    123: '刀锋-闪击',
    238: '刀锋-攻防演练',
  },
};

export { configData };
