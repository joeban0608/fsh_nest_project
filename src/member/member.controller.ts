import { Controller, Get, Param, HttpStatus } from '@nestjs/common';

import { MemberService } from './member.service';
//import { MemberDTO } from '../member/member.dto';

@Controller('member')
export class MemberController {
  constructor(private memberService: MemberService) {}

  @Get(':id')
  async getMember(@Param('id') id: number) {
    const data = await this.memberService.read(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Data fetched successfully',
      data,
    };
  }
}
