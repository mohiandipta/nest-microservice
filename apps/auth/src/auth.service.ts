import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthInfo } from './entities/auth.entity';
import { privateDecrypt } from 'crypto';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
      @InjectRepository(AuthInfo)
      private authInfoRepository: Repository<AuthInfo>
    ) {}

    async getInfo() {
      const result = await this.authInfoRepository.find()

      return result
    }
}
