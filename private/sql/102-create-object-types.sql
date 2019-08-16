do $$


plv8.execute('select acs_object_type__drop_type($1,$2)',['scooru_team',true]);
plv8.execute('select acs_object_type__drop_type($1,$2)',['scooru_game',true]);


const o1 = {
  object_type: 'scooru_team',
  pretty_name: 'scooru team',
  pretty_plural: 'scooru teams',
  supertype: 'application_group',
  table_name: null,
  id_column: null,
  package_name: null,
  abstract_p: false,
  type_extension_table: null,
  name_method: null
}

const query = 'select acs_object_type__create_type($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) as iret';

const retv = plv8.execute(query,[
  o1.object_type,
  o1.pretty_name,
  o1.pretty_plural,
  o1.supertype,
  o1.table_name,
  o1.id_column,
  o1.package_name,
  o1.abstract_p,
  o1.type_extension_table,
  o1.name_method
  ]);

plv8.elog(NOTICE, `Create scooru_team retv:`,retv);

$$ language plv8;

-- ---------------------------------------------------------------------------

do $$

const o1 = {
  object_type: 'scooru_game',
  pretty_name: 'scooru game',
  pretty_plural: 'scooru games',
  supertype: 'application_group',
  table_name: null,
  id_column: null,
  package_name: null,
  abstract_p: false,
  type_extension_table: null,
  name_method: null
}

const query = 'select acs_object_type__create_type($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) as iret';

const retv = plv8.execute(query,[
  o1.object_type,
  o1.pretty_name,
  o1.pretty_plural,
  o1.supertype,
  o1.table_name,
  o1.id_column,
  o1.package_name,
  o1.abstract_p,
  o1.type_extension_table,
  o1.name_method
  ])[0];

plv8.elog(NOTICE, `Create scooru_game retv:`,retv);

$$ language plv8;
