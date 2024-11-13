import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsString,
  IsEnum,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum TagType {
  God = 'god',
  OneMinute = 'oneMinute',
}

export enum AbilityType {
  Forte = 'forte',
  Gear = 'gear',
  Props = 'props',
}

export enum AbilityTypeCN {
  干员特长 = '干员特长',
  战术装备 = '战术装备',
  战术道具 = '战术道具',
}

export class AgentsResponsePostDto {
  @IsNumber()
  @ApiProperty({ example: 10017 })
  id: number;

  @IsNumber()
  @ApiProperty({ example: 88000000035 })
  operatorID: number;

  @IsString()
  @ApiProperty({ example: '乌鲁鲁' })
  operator: string;

  @IsString()
  @ApiProperty({ example: '大卫·费莱尔' })
  fullName: string;

  @IsString()
  @ApiProperty({ example: '工程' })
  armyType: string;

  @IsString()
  @ApiProperty({
    example:
      'https://playerhub.df.qq.com/playerhub/60004/object/88000000035.png',
  })
  pic: string;

  @IsNumber()
  @ApiProperty({ example: 0 })
  sort: number;

  @IsString()
  @ApiProperty({
    example:
      'https://playerhub.df.qq.com/playerhub/60004/object/p_88000000035.png',
  })
  prePic: string;

  @IsString()
  @ApiProperty({
    example:
      'https://playerhub.df.qq.com/playerhub/60004/operator/abilities/10038.png',
  })
  armyTypePic: string;

  @IsString()
  @ApiProperty({ example: '工程兵是道具使用专家，可用喷枪进行切割和维修。' })
  armyTypeDesc: string;

  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => AbilitiesListDto)
  @ApiProperty({ type: () => AbilitiesListDto, isArray: true })
  abilitiesList: AbilitiesListDto[];

  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => StrategyListDto)
  @ApiProperty({ type: () => StrategyListDto, isArray: true })
  strategyList: StrategyListDto[];
}

export class AbilitiesListDto {
  @IsEnum(AbilityType)
  @ApiProperty({ enum: AbilityType, example: 'gear' })
  abilityType: AbilityType;

  @IsEnum(AbilityTypeCN)
  @ApiProperty({ enum: AbilityTypeCN, example: '战术装备' })
  abilityTypeCN: AbilityTypeCN;

  @IsString()
  @ApiProperty({ example: 'harm' })
  position: string;

  @IsString()
  @ApiProperty({ example: '伤害' })
  positionCN: string;

  @IsString()
  @ApiProperty({ example: '巡飞弹' })
  abilityName: string;

  @IsString()
  @ApiProperty({
    example:
      '开镜后发射一枚图像制导巡飞弹，爆炸时会额外霰射出四枚炸弹。腰射时，巡飞弹会启用预设制导',
  })
  abilityDesc: string;

  @IsString()
  @ApiProperty({
    example:
      'https://playerhub.df.qq.com/playerhub/60004/operator/abilities/10001.png',
  })
  abilityPic: string;

  @IsNumber()
  @ApiProperty({ example: 0 })
  sort: number;
}

export class StrategyListDto {
  @IsString()
  @ApiProperty({ example: '135667' })
  tagID: string;

  @IsEnum(TagType)
  @ApiProperty({ enum: TagType, example: 'oneMinute' })
  tagType: TagType;
}

export class AgentsResponsePostDtoArray {
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => AgentsResponsePostDto)
  @ApiProperty({ type: () => AgentsResponsePostDto, isArray: true })
  data: AgentsResponsePostDto[];
  @ApiProperty({ example: 1 })
  code: 1;
}
