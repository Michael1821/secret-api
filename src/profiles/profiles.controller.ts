import { Controller, Get, Query } from '@nestjs/common';
import { UserFiltersDto } from './dto/user-filters.dto';
import { ProfilesService } from './profiles.service';
import { Profile } from './entities/profile.entity';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get('/list')
  getProfiles(@Query() query: UserFiltersDto): Promise<Profile[]> {
    return this.profilesService.listProfiles(query);
  }
}
