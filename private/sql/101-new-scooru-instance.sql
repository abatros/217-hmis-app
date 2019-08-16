do $$
plv8.elog(NOTICE, 'Create scooru instance');

const package_key = 'scooru';

// check if package_type exists.
const package_md = (plv8.execute('select * from apm_package_types where package_key = $1',[package_key])[0]);

if (!package_md) {
  plv8.elog(INFO, `FATAL: package_key "${package_key}" not found.`)
  throw 'fatal-22'
}

// here, we can create the instance.

var package_id = null;
//const object_type = 'apm_package';

//select apm_package__new(null,'museum','museum','apm_package',null,null,null,null)
const query = 'select apm_package__new($1,$2,$3,$4,$5,$6,$7,$8) as package_id';

const o = {
  package_id: null,
  instance_name: 'scooru',
  package_key: 'scooru',
  object_type: 'apm_package',
  creation_date: new Date(),
  creation_user: null,
  creation_ip: null,
  context_id: null,
}

const retv = plv8.execute(query,[
  o.package_id,
  o.instance_name,
  o.package_key,
  o.object_type,
  o.creation_date,
  o.creation_user,
  o.creation_ip,
  o.context_id,
  ])[0];


package_id = retv.package_id;

plv8.elog(INFO, 'apm_package__new => package_id:', retv.package_id);

/*
    create root folder for this package instance.
*/

const root_folder_id = plv8.execute("select content_folder__new($1,$2,$3,$4,$5)",
  [
  'scooru-'+package_id,              // name
  o.instance_name,                         // folder-label
  'CMS root folder for '+o.instance_name,  // description
	-100,                           // parent_id
	package_id
  ]
)[0].content_folder__new;

$$
LANGUAGE plv8;
