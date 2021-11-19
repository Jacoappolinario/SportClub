import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('partners')
class Partner {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @CreateDateColumn()
  birth_date: Date;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  adress: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Partner };
