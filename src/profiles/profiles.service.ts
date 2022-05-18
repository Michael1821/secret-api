import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';
import { UserFiltersDto } from './dto/user-filters.dto';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile) private readonly repo: Repository<Profile>,
  ) {}

  public async listProfiles(query: UserFiltersDto): Promise<Profile[]> {
    return this.repo.find({ order: query });
  }
}
