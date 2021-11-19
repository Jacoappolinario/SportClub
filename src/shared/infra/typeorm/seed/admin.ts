import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import createConnection from '../index';

async function create() {
  const connection = await createConnection('localhost');
  const id = uuidV4();
  const password = await hash('admin', 8);

  await connection.query(
    `INSERT INTO users(id, name, email, password, isAdmin, created_at)
        values('${id}', 'admin', 'admin@sportclub.com.br', '${password}', true, NOW())
      `,
  );

  await connection.close;
}

create().then(() => console.log('User admin created!'));
