import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Twinch } from './entities';
import { CreateTwinchDto, PaginatioQueryDto, UpdateTwinchDto } from './dto';

@Injectable()
export class TwinchsService {

  constructor(@InjectRepository(Twinch) private readonly twinchRepository:Repository<Twinch>){}

  async getTwinchs({limit, offset}:PaginatioQueryDto): Promise<Twinch[]> {
    return await this.twinchRepository.find({relations:['user'], skip:offset, take:limit});
  }

  async getTwinch(id: number): Promise<Twinch[]> {
    const twinch: Twinch[] = await this.twinchRepository.find({
      where: { id },
      relations: ['user']
    });
    if (!twinch) {
      throw new NotFoundException('Resource not found');
    }
    return twinch;
  }

  createTwinch({ message }: CreateTwinchDto): void {
    const twinch: Twinch = this.twinchRepository.create({message});
    this.twinchRepository.save(twinch);
  }

  async updateTwinch(id: number, { message }: UpdateTwinchDto): Promise<Twinch> {
    const twinch: Twinch = await this.twinchRepository.preload({
      id,
      message
    });
    if(!twinch){
      throw new NotFoundException('Resource not found');
    }
    return this.twinchRepository.save(twinch);
  }

  async deleteTwinch(id: number): Promise<void> {
    const twinch: Twinch = await this.twinchRepository.findOneBy({id});
    if(!twinch){
      throw new NotFoundException('Resource not found');
    }
    this.twinchRepository.remove(twinch);
  }
}
