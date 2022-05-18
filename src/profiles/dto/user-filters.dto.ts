import { IsIn, IsOptional } from 'class-validator';

export class UserFiltersDto {
  @IsOptional()
  @IsIn(['DESC', 'ASC'])
  folder?: 'DESC' | 'ASC';

  @IsOptional()
  @IsIn(['DESC', 'ASC'])
  note?: 'DESC' | 'ASC' = 'ASC';

  @IsOptional()
  @IsIn(['DESC', 'ASC'])
  created_date?: 'DESC' | 'ASC' = 'DESC';

  @IsOptional()
  @IsIn(['DESC', 'ASC'])
  updated_date?: 'DESC' | 'ASC';
}
