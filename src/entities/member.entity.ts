import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('member')
export class MemberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  promotion_code: string;

  @Column()
  track_code: string;

  @Column()
  brand_id: number;

  @Column()
  social_type: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  password_valid: number;

  @Column()
  withdrawal_pass: string;

  @Column()
  phone: string;

  @Column()
  phone_validate: number;

  @Column()
  name: string;

  @Column()
  name_postfix: number;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  birthday: string;

  @Column()
  address: string;

  @Column()
  prompt_member_id: number;

  @Column()
  member_type: number;

  @Column()
  member_type_updated_at: number;

  @Column()
  member_level_id: number;

  @Column()
  vip_level_id: number;

  @Column()
  vip_level_upgrade_at: number;

  @Column()
  image: string;

  @Column()
  status: number;

  @Column()
  enable_login: number;

  @Column()
  enable_deposit: number;

  @Column()
  enable_withdrawal: number;

  @Column()
  enable_game: number;

  @Column()
  enable_event: number;

  @Column()
  enable_rebate: number;

  @Column()
  custom_transfer_withdrawal_limit: number;

  @Column()
  gender: string;

  @Column()
  qq: string;

  @Column()
  telegram: string;

  @Column()
  wechat: string;

  @Column()
  note: string;

  @Column()
  transfer_enable: number;

  @Column()
  guarantee_setting_enable: number;

  @Column()
  agent_note: string;

  @Column()
  agent_line: string;

  @Column()
  agent_tag: number;

  @Column()
  auto_to_game: number;

  @Column()
  updated_at: number;

  @Column()
  created_at: number;

  @Column()
  first_deposit_at: number;

  @Column()
  first_deposit_amount: number;
}
